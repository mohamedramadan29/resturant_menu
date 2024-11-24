<?php

use App\Http\Controllers\front\CartController;
use App\Http\Controllers\front\CheckoutController;
use App\Http\Controllers\front\UserController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\front\FrontController;
use App\Http\Controllers\front\OrderController;
use Illuminate\Support\Facades\Auth;

Route::controller(FrontController::class)->group(function () {
    Route::get('/', 'index')->name('index');
});
Route::controller(CartController::class)->group(function () {
    Route::get('cart', 'cart');
    // Route::match(['post','get'],'cart/add', 'add');
    Route::post('/cart/add',  'add')->name('cart.add');
    Route::get('/cart/items', 'getCartItems');
    Route::post('cart/delete/{id}', 'delete');
    Route::post('/cart/update', 'updateCart')->name('cart.update');
    Route::post('apply_coupon', 'apply_coupon');
});

Route::group(['middleware' => 'auth'], routes: function () {
    Route::controller(CheckoutController::class)->group(function () {
        Route::get('checkout', 'checkout');
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
        Route::get('thanks', 'thanks');
    });

    ////////////////////////// User Dashbpard
    Route::controller(UserController::class)->group(function () {
        Route::get('account','account');
        Route::get('logout', 'logout')->name('logout');
    });
});

include 'admin.php';
