<?php

use App\Http\Controllers\front\CartController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\front\FrontController;


Route::controller(FrontController::class)->group(function (){
    Route::get('/','index');
});
Route::controller(CartController::class)->group(function () {
    Route::get('cart', 'cart');
    Route::match(['post','get'],'cart/add', 'add');
    Route::get('/cart/items', 'getCartItems');
    Route::post('cart/delete/{id}', 'delete');
    Route::post('/cart/update', 'updateCart')->name('cart.update');
    Route::post('apply_coupon', 'apply_coupon');

});
include 'admin.php';
