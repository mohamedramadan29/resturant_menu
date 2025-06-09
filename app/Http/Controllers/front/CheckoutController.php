<?php

namespace App\Http\Controllers\front;

use Carbon\Carbon;
use App\Models\User;
use App\Models\front\Cart;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\front\UserBranchDetail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class CheckoutController extends Controller
{
    public function checkout()
    {
        $cartItems = Cart::getcartitems();
        if (count($cartItems) > 0) {
            return view("front.checkout");
        } else {
            return redirect()->route('index');
        }
    }


    // التحقق من حالة تسجيل الدخول
    public function checkLoginStatus()
    {
        return response()->json(['logged_in' => auth()->check()]);
    }

    // إرسال رمز التحقق إلى الهاتف
    public function sendVerificationCode(Request $request)
    {
        $phone = $request->input('phone');
        //  dd($phone);
        // إرسال رمز التحقق باستخدام خدمة مثل Twilio (يمكنك إضافة الخدمة هنا)
        //$verificationCode = rand(1000, 9999);
        $verificationCode = '0000';

        User::updateOrCreate([
            'phone' => $phone,
        ], [
            'phone' => $phone,
            // 'verification_code' => $verificationCode,
            // 'expires_at' => Carbon::now()->addMinutes(5)
        ]);
        $user = User::where('phone', $phone)->first();
        if ($user) {
            // إذا كان الرمز صحيحًا ولم تنتهِ صلاحيته
            Auth::login($user,true); // تسجيل دخول المستخدم
            // تحديث عناصر السلة
            $cartItems = Cart::getcartitems(); // استدعاء عناصر السلة
            // dd($cartItems);
            if (!$cartItems || $cartItems->isEmpty()) {
                $session_id = Session::get('session_id');
                $cartItems = Cart::where('session_id', $session_id)->get();
            }
            foreach ($cartItems as $cartItem) {
                $cartItem->user_id = $user->id; // تعيين user_id
                $cartItem->save(); // حفظ العنصر في قاعدة البيانات
            }
            $session_id = Session::get('session_id');
            ####### Update User Branch Detail
            $user_branch = UserBranchDetail::where('session_id', $session_id)->first();
            $user_old_branch = UserBranchDetail::where('user_id', $user->id)->first();
            if ($user_old_branch) {
                $user_old_branch->delete();
            }
            if ($user_branch) {

                $user_branch->user_id = $user->id;
                $user_branch->save();
            }
            ####### Update User Branch Detail
            return Redirect::route('checkout');
            // return response()->json(['message' => 'تم إرسال رمز التحقق']);
        }
        // إرسال رسالة عبر API أو أي خدمة
        // يمكن إضافة الكود الخاص بإرسال الرسالة هنا

        return response()->json(['message' => 'تم إرسال رمز التحقق']);
    }

    // التحقق من الرمز المدخل
    public function verifyCode(Request $request)
    {
        $phone = $request->input('phone'); // يجب إرسال رقم الهاتف مع الرمز للتحقق منه
        $code = $request->input('code'); // الرمز المدخل

        $user = User::where('phone', $phone)->first();

        if ($user) {
            // التحقق مما إذا كان الرمز صحيحًا ولم تنتهِ صلاحيته
            if ($user->verification_code == $code && Carbon::now()->lessThanOrEqualTo($user->expires_at)) {
                // إذا كان الرمز صحيحًا ولم تنتهِ صلاحيته
                Auth::login($user); // تسجيل دخول المستخدم
                // تحديث عناصر السلة
                $cartItems = Cart::getcartitems(); // استدعاء عناصر السلة
                // dd($cartItems);
                if (!$cartItems || $cartItems->isEmpty()) {
                    $session_id = Session::get('session_id');
                    $cartItems = Cart::where('session_id', $session_id)->get();
                }
                foreach ($cartItems as $cartItem) {
                    $cartItem->user_id = $user->id; // تعيين user_id
                    $cartItem->save(); // حفظ العنصر في قاعدة البيانات
                }
                // حذف رمز التحقق بعد التحقق بنجاح
                $user->verification_code = null;
                $user->expires_at = null;
                $user->save();

                return response()->json(['verified' => true]);
            } else {
                // الرمز غير صحيح أو منتهي الصلاحية
                return response()->json(['verified' => false, 'message' => 'رمز التحقق غير صحيح أو منتهي الصلاحية']);
            }
        }
        return response()->json(['verified' => false, 'message' => 'رقم الهاتف غير موجود']);
    }
}
