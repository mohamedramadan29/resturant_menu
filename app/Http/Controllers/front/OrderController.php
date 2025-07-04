<?php

namespace App\Http\Controllers\front;

use App\Models\User;
use App\Models\front\Cart;
use App\Models\admin\admin;
use App\Models\front\Order;
use App\Models\admin\Branch;
use Illuminate\Http\Request;
use App\Models\admin\Product;
use App\Notifications\NewOrder;
use App\Models\front\OrderDetail;
use App\Http\Traits\Message_Trait;
use App\Models\front\OrderDetails;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\front\UserBranchDetail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Notification;
use App\Interfaces\PaymentGatewayInterface;

class OrderController extends Controller
{
    use Message_Trait;

    protected PaymentGatewayInterface $paymentGateway;

    public function __construct(PaymentGatewayInterface $paymentGateway)
    {

        $this->paymentGateway = $paymentGateway;
    }

    public function store(Request $request)
    {
        $rules = [
            'name' => 'required',
            'phone' => 'required',
            'payment_type' => 'required',
        ];
        $messages = [
            'name.required' => ' من فضلك ادخل الاسم  ',
            'phone.required' => ' من فضلك ادخل رقم الهاتف  ',
            'payment_type.required' => ' من فضلك حدد وسيلة الدفع  ',
        ];
        $transaction_id = uniqid();
        $track_id = uniqid();
        Session::put('track_id', $track_id);
        $data = $request->all();
        if(!Auth::check()){
            return to_route('index');
        }
        $user = User::where('phone', $data['phone'])->first();
        $user_branch = UserBranchDetail::where('user_id', $user->id)->first();
        if (!$user_branch) {
            return Redirect::back()->withInput()->withErrors('يجب عليك اختيار الفرع لاتمام الطلب');
        }
        $branch = Branch::find($user_branch->branch_id);
        if ($branch->isOpen() == false) {
            return Redirect::back()->withInput()->withErrors('الفرع مغلق في الوقت الحالي');
        }
        $validator = Validator::make($data, $rules, $messages);
        if ($validator->fails()) {
            return Redirect::back()->withInput()->withErrors($validator);
        }

        // خزّن البيانات المدخلة مؤقتًا في الـ session
        session([
            'order_data' => $request->only(['name', 'phone', 'notes', 'payment_type'])
        ]);

        $coupon_amount = Session::get('coupon_amount', 0);
        $coupon = Session::get('coupon_code');
        $cartItems = Cart::getcartitems();
        $total_price = Cart::getcarttotal();

        DB::beginTransaction();
        $order = new Order();
        $order->user_id = Auth::id();
        $order->transaction_id = $transaction_id;
        $order->name = $data['name'];
        $order->phone = $data['phone'];
        $order->notes = $data['notes'];
        $order->time_delivery = 'now';
        $order->payment_method = $data['payment_type'];
        $order->payment_status = 'pending';
        $order->coupon_code = $coupon;
        $order->coupon_amount = $coupon_amount;
        $order->order_status = 'لم يبدا';
        $order->grand_total = $total_price;
        $order->branch_name = $user_branch->branch_name ?? null;
        $order->branch_id = $user_branch->branch_id ?? null;
        $order->pickup_method = $user_branch->pickup_method ?? null;
        $order->car_plate = $user_branch->car_plate ?? null;
        $order->car_color = $user_branch->car_color ?? null;
        $order->car_model = $user_branch->car_model ?? null;
        $order->track_id = $track_id;
        $order->save();
        // خزّن الـ transaction_id أو order_id في السيشن
        Session::put('transaction_id', $transaction_id);
        Session::put('order_id', $order->id);

        #### Update User Table

        $user->name = $data['name'];
        $user->save();

        foreach ($cartItems as $item) {
            OrderDetail::create([
                'order_id' => $order->id,
                'product_id' => $item['product_id'],
                'product_name' => Product::find($item['product_id'])->name ?? 'منتج',
                'product_price' => $item['price'],
                'product_qty' => $item['qty'],
                'total_price' => $item['total_price'],
                'size' => $item['size'],
            ]);
        }
        DB::commit();


        $payment_type = $request->payment_type;
        if ($payment_type == 'cash') {
            $admin = Admin::all();
            Notification::send($admin, new NewOrder($order->id));
            return Redirect()->route('thanks');
        } else {
            return Redirect()->route('payemnt.process', ['amount' => $total_price,'order_id'=>$order->id]);
        }
    }

    public function paymentProcess(Request $request)
    {
        return $this->paymentGateway->sendPayment($request);

    }

    public function callBack(Request $request): \Illuminate\Http\RedirectResponse
    {
        $response = $this->paymentGateway->callBack($request);
        if ($response) {
            if (isset($response[0]['result']) && $response[0]['result'] === 'CAPTURED') {
             // dd($response);
             $trackId = $response[0]['trackId'];
             $order = Order::where('track_id', $trackId)->first();
             $order->update([
                 'payment_status' => 'paid',
             ]);
             $admin = Admin::all();
             Notification::send($admin, new NewOrder($order->id));
             return redirect()->route('thanks');
            }
            return redirect()->route('payment.failed');
        }
        return redirect()->route('payment.failed');
    }

    // public function callBack(Request $request): \Illuminate\Http\RedirectResponse
    // {
    //     try {
    //         \Illuminate\Support\Facades\Log::info('Payment Callback Data:', $request->all());

    //         $response = $this->paymentGateway->callBack($request);
    //         \Illuminate\Support\Facades\Log::info('Payment Gateway Response:', ['response' => $response]);

    //         if ($response) {
    //             $orderId = Session::get('order_id');
    //             \Illuminate\Support\Facades\Log::info('Order ID from Session:', ['order_id' => $orderId]);

    //             if ($orderId) {
    //                 $order = Order::find($orderId);
    //                 if ($order) {
    //                     $order->payment_status = 'paid';
    //                     $order->save();

    //                     // إرسال إشعار للأدمن
    //                     $admin = Admin::first();
    //                     Notification::send($admin, new NewOrder($orderId));

    //                     // تنظيف سلة المشتريات
    //                     Cart::where('user_id', Auth::id())
    //                         ->orWhere('session_id', Session::get('session_id'))
    //                         ->delete();

    //                     // حذف بيانات الجلسة
    //                     Session::forget(['transaction_id', 'order_id', 'order_data']);

    //                     return redirect()->route('thanks');
    //                 }
    //             }
    //         }
    //         \Illuminate\Support\Facades\Log::error('Payment Failed - Invalid Response');
    //         return redirect()->route('payment.failed');
    //     } catch (\Exception $e) {
    //         \Illuminate\Support\Facades\Log::error('Payment Error:', ['error' => $e->getMessage()]);
    //         return redirect()->route('payment.failed');
    //     }
    // }


    public function success()
    {
        // إذا نجح الطلب يمكن حذف البيانات المؤقتة
        session()->forget('order_data');
        Session::forget('transaction_id');
        Session::forget('order_id');
        return view('front.payment.success');
    }
    public function failed(Request $request)
    {
        // dd($request->all());
        // Session::forget('transaction_id');
        // Session::forget('order_id');
        return view('front.payment.failed');
    }

    public function thanks()
    {
        $session_id = Session::get('session_id');
        if (Session::has('order_id')) {
            // Empty The Cart
            Cart::where('user_id', Auth::user()->id)->orWhere('session_id', $session_id)->delete();
            return view('front.thanks');
        } else {
            return redirect('/');
        }
    }
}
