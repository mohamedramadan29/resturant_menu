<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\front\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class CheckoutController extends Controller
{
    public function checkout()
    {
        $cartItems = Cart::getcartitems();
        if (count($cartItems)  > 0) {
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

        // إرسال رمز التحقق باستخدام خدمة مثل Twilio (يمكنك إضافة الخدمة هنا)
        $verificationCode = rand(1000, 9999);

        User::updateOrCreate([
            'phone' => $phone,
        ], [
            'phone' => $phone,
            'verification_code' => $verificationCode,
            'expires_at' => Carbon::now()->addMinutes(5)
        ]);
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
