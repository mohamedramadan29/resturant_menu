<?php

use App\Http\Controllers\front\CartController;
use App\Http\Controllers\front\CheckoutController;
use App\Http\Controllers\front\UserController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\front\FrontController;
use App\Http\Controllers\front\MessageController;
use App\Http\Controllers\front\OrderController;
use App\Http\Controllers\front\SetBranchController;
use App\Http\Controllers\testpaymentcontroller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

Route::controller(FrontController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/menu', 'menu')->name('menu');
});
Route::controller(CartController::class)->group(function () {
    Route::get('cart', 'cart');
    // Route::match(['post','get'],'cart/add', 'add');
    Route::post('/cart/add', 'add')->name('cart.add');
    Route::get('/cart/items', 'getCartItems');
    Route::post('cart/delete/{id}', 'delete');
    Route::post('/cart/update', 'updateCart')->name('cart.update');
    Route::post('apply_coupon', 'apply_coupon');
});

Route::group(['middleware' => 'auth'], routes: function () {
    Route::controller(CheckoutController::class)->group(function () {
        Route::get('checkout', 'checkout')->name('checkout');
        Route::get('/get-shipping-price', 'getShippingPrice');
    });
});

Route::controller(CheckoutController::class)->group(function () {
    Route::get('/check-login-status', 'checkLoginStatus')->name('check.login.status');

    Route::post('/send-verification-code', 'sendVerificationCode')->name('send.verification.code');
    Route::post('/verify-code', 'verifyCode')->name('verify.code');
});


Route::group(['middleware' => 'auth'], function () {
    Route::controller(OrderController::class)->group(function () {
        Route::post('order/store', 'store');
        Route::get('thanks', 'thanks')->name('thanks');
        Route::post('/payment/response', 'handlePaymentResponse')->name('payment.response');
       Route::get('/payment-success',  'success')->name('payment.success');
        Route::get('/payment-failed', 'failed')->name('payment.failed');

        Route::get('/payment/process', 'paymentProcess')->name('payemnt.process');
        //Route::match(['GET', 'POST'], '/payment/callback', 'callBack');
      //  Route::match(['GET', 'POST'], '/payment/callback', 'callBack')->name('payment.callback');

    });

    ////////////////////////// User Dashbpard
    Route::controller(UserController::class)->group(function () {
        Route::get('account', 'account')->name('account');
        Route::get('logout', 'logout')->name('user.logout');
    });
});


Route::view('terms', 'front.terms');
Route::view('privacy-policy', 'front.privacy-policy');

Route::controller(MessageController::class)->group(function () {
    Route::get('contact', 'index')->name('contact');
    Route::match(['get', 'post'], 'contact/sendmessage', 'store')->name('contact.store');
});

Route::get('/getBranchSession', function () {
    return response()->json([
        'branch' => session('branch'),
        'pickupMethod' => session('pickupMethod'),
        'carDetails' => session('carDetails')
    ]);
})->name('getBranchSession');


Route::controller(SetBranchController::class)->group(function () {
    Route::post('/setBranchSession', 'setBranchSession')->name('setBranchSession');
    // Route::get('/getBranchSession', 'getBranchSession')->name('getBranchSession');
});

//Route::get('/payment-success', [testpaymentcontroller::class, 'success'])->name('payment.success');
///Route::get('/payment-failed', [testpaymentcontroller::class, 'failed'])->name('payment.failed');


include 'admin.php';
