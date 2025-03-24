<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Traits\Message_Trait;
use App\Models\admin\Order;
use App\Models\admin\PublicSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    use Message_Trait;
    public function index(Request $request)
    {
        if(Auth::guard('admin')->user()->account_type == 'admin')
        {
            $query = Order::orderBy('id', 'desc');
        }else{
            $query = Order::where('branch_id',Auth::guard('admin')->user()->branch_id)->orderBy('id', 'desc');
        }

        // التحقق مما إذا كان هناك تاريخ محدد في الطلب
        if ($request->has('from_date') && $request->has('to_date')) {
            $query->whereBetween('created_at', [$request->from_date . ' 00:00:00', $request->to_date . ' 23:59:59']);
        }

        $orders = $query->get();

        return view('admin.orders.index', compact('orders'));
    }


    public function update(Request $request, $id)
    {
        $order = \App\Models\front\Order::with('details')->where('id', $id)->first();
        //  dd($order);
        if (!isset($order)) {
            return redirect()->route('orders');
        }
        $user = Auth::guard('admin')->user();
        $notification = $user->unreadNotifications->where('data.order_id', $id)->first();

        // التأكد من وجود الإشعار وجعله مقروءًا
        if ($notification) {
            $notification->markAsRead();
        }
        if ($request->isMethod('post')) {
            try {
                $data = $request->all();
                $order->update([
                    'order_status' => $data['order_status']
                ]);
                return $this->success_message(' تم تعديل حالة الطلب بنجاح  ');
            } catch (\Exception $e) {
                return $this->exception_message($e);
            }
        }

        return view('admin.orders.update', compact('order'));
    }

    public function print($id)
    {
        $order = Order::with('details', 'city')->where('id', $id)->first();
        $publicsetting = PublicSetting::first();
        return view('admin.orders.print', compact('order', 'publicsetting'));
    }

    public function delete($id)
    {
        $order = Order::findORFail($id);
        $order->delete();
        return $this->success_message(' تم حذف الطلب ');
    }

}
