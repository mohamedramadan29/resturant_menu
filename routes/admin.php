<?php

use App\Http\Controllers\admin\PublicSettingController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\admin\AdminController;
use \App\Http\Controllers\admin\ProductController;
use \App\Http\Controllers\admin\OrderController;
use \App\Http\Controllers\admin\CategoryController;
Route::group(['prefix' => 'admin'], function () {
// Admin Login

    Route::controller(AdminController::class)->group(function () {
        Route::match(['post', 'get'], '/', 'login')->name('admin_login');
        Route::match(['post', 'get'], 'login', 'login')->name('admin_login');
// Admin Dashboard
        Route::group(['middleware' => 'admin'], function () {
            Route::get('dashboard', 'dashboard');
// update admin password
            Route::match(['post', 'get'], 'update_admin_password', 'update_admin_password');
// check Admin Password
            Route::post('check_admin_password', 'check_admin_password');
// Update Admin Details
            Route::match(['post', 'get'], 'update_admin_details', 'update_admin_details');
            Route::get('logout', 'logout')->name('logout');
        });
    });
    Route::group(['middleware' => 'admin'], function () {

        ////////////////////// Start Products ///////////////////////////////
        Route::controller(ProductController::class)->group(function () {
            Route::get('products', 'index');
            Route::match(['post', 'get'], 'product/add', 'store');
            Route::match(['post', 'get'], 'product/update/{slug}', 'update')->name('product.update');
            Route::post('product/delete/{id}', 'delete');
            Route::get('/get-attribute-values/{attributeId}', 'getAttributeValues');
            Route::get('/get-subcategories', 'getSubCategories')->name('get.subcategories');
            Route::post('product/gallary/delete/{id}', 'delete_image_gallary');
        });



        ///////////////////// Start Order Controller ///////////////
        ///
        Route::controller(OrderController::class)->group(function () {
            Route::get('orders', 'index')->name('orders');
            Route::post('order/delete/{id}', 'delete');
            Route::match(['post', 'get'], 'order/update/{id}', 'update');
            Route::match(['post', 'get'], 'order/store', 'store');
            Route::get('order/print/{id}', 'print');
            Route::get('orders/archive', 'archive');
        });

        ///////////////// Start Public Settings
        ///

        Route::controller(PublicSettingController::class)->group(function () {
            Route::match(['post', 'get'], 'public-setting/update', 'update');
        });

        /////////////  Start Categories //////////////
        ///
        Route::controller(CategoryController::class)->group(function () {
            Route::get('main-categories', 'index');
            Route::match(['post', 'get'], 'main-category/add', 'store');
            Route::match(['post', 'get'], 'main-category/update/{id}', 'update');
            Route::post('main-category/delete/{id}', 'delete');
        });

        ///////////////////// Start Order Controller ///////////////
        ///
        Route::controller(OrderController::class)->group(function () {
            Route::get('orders', 'index')->name('orders');
            Route::post('order/delete/{id}', 'delete');
            Route::match(['post', 'get'], 'order/update/{id}', 'update');
            Route::match(['post', 'get'], 'order/store', 'store');
            Route::get('order/print/{id}', 'print');
            Route::get('orders/archive', 'archive');
        });


    });
});
