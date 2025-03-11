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

class OrderController extends Controller
{
    use Message_Trait;

    public function store(Request $request)
    {
        $data = $request->all();
        $user = User::where('phone', $data['phone'])->first();
        $user_branch = UserBranchDetail::where('user_id', $user->id)->first();
        if (!$user_branch) {
            return Redirect::back()->withInput()->withErrors('يجب عليك اختيار الفرع لاتمام الطلب');
        }
        $branch = Branch::find($user_branch->branch_id);
        if ($branch->isOpen() == false) {
            return Redirect::back()->withInput()->withErrors('الفرع مغلق في الوقت الحالي');
        }
        // dd($data);
        $coupon_amount = Session::has('coupon_amount') ? Session::get('coupon_amount') : 0;
        $coupon = Session::has('coupon_code') ? Session::get('coupon_code') : null;
        $cartItems = Cart::getcartitems();
        $total_price = Cart::getcarttotal();
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

        $validator = Validator::make($data, $rules, $messages);
        if ($validator->fails()) {
            return Redirect::back()->withInput()->withErrors($validator);
        }
        DB::beginTransaction();
        $order = new Order();
        $order->user_id = Auth::user()->id;
        $order->name = $data['name'];
        $order->phone = $data['phone'];
        $order->notes = $data['notes'];
        $order->time_delivery = 'now';
        $order->payment_method = $data['payment_type'];
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
        $order->save();
        $user->name = $data['name'];
        $user->save();

        foreach ($cartItems as $item) {
            $order_details = new OrderDetail();
            $order_details->order_id = $order->id;
            $order_details->product_id = $item['product_id'];
            $getproductdata = Product::where('id', $item['product_id'])->first();
            $order_details->product_name = $getproductdata['name'];
            $order_details->product_price = $item['price'];
            $order_details->product_qty = $item['qty'];
            $order_details->total_price = $item['total_price'];
            $order_details->save();
        }

        ////////////////////// Send Confirmation Email ///////////////////////////////
        ///
        // $public_setting = PublicSetting::first();
        // $admin_email = $public_setting['website_email'];
        // $email = $admin_email;

        // $MessageDate = [
        //     'name' => $data['name'],
        //     "address" => $data['address'],
        //     'phone' => $data['phone'],
        //     'grand_total'=>$data['grand_total'],
        // ];
        // Mail::send('front.mails.newordertoadmin', $MessageDate, function ($message) use ($email) {
        //     $message->to($email)->subject(' لديك طلب جديد علي متجرك ');
        // });
        DB::commit();
        $admin = admin::all();
        Notification::send($admin, new NewOrder($order->id));
        Session::put('order_id', $order->id);
        return redirect('thanks');
        // return $this->success_message(' تم اضافة الطلب الخاص بك بنجاح  ');
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
