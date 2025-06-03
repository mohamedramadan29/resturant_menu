<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Broadcast;
use App\Http\Controllers\admin\UsersController;
use \App\Http\Controllers\admin\AdminController;
use \App\Http\Controllers\admin\OrderController;
use App\Http\Controllers\admin\BranchController;
use App\Http\Controllers\admin\CasherController;
use \App\Http\Controllers\admin\ProductController;
use \App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\PublicSettingController;

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
        Route::group([
            'middleware' => function ($request, $next) {
                $user = Auth::guard('admin')->user();

                // إذا كان المستخدم "cashier"، السماح فقط بمسارات الطلبات ومنعه من غيرها
                if ($user->account_type == 'casher' && !request()->is('admin/orders*') && !request()->is('admin/order*')) {
                    return abort(403, 'غير مصرح لك بزيارة الصفحة');
                }

                // إذا لم يكن المستخدم "admin" أو "cashier"، منعه من الدخول
                if (!in_array($user->account_type, ['admin', 'casher'])) {
                    return abort(403, 'غير مصرح لك بزيارة الصفحة');
                }

                return $next($request);
            }
        ], function () {
            ////////////////////// Start Products ///////////////////////////////
            Route::controller(ProductController::class)->group(function () {
                Route::get('products', 'index');
                Route::match(['post', 'get'], 'product/add', 'store');
                Route::match(['post', 'get'], 'product/update/{slug}', 'update')->name('product.update');
                Route::post('product/delete/{id}', 'delete');
                Route::get('/get-attribute-values/{attributeId}', 'getAttributeValues');
                Route::get('/get-subcategories', 'getSubCategories')->name('get.subcategories');
                Route::post('product/gallary/delete/{id}', 'delete_image_gallary');
                Route::get('product/change-status/{id}', 'changeStatus')->name('product.change-status');
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
                Route::get('main-category/change-status/{id}', 'changeStatus')->name('main-category.change-status');
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

            ########### Start Branch Controller

            Route::controller(BranchController::class)->group(function () {

                Route::get('branches', 'index');
                Route::match(['post', 'get'], 'branch/store', 'store');
                Route::match(['post', 'get'], 'branch/update/{id}', 'update');
                Route::post('branch/delete/{id}', 'delete');
            });
            ############ End Branch Controller

            ########### Start Users Controller #########

            Route::controller(UsersController::class)->group(function () {
                Route::get('users', 'index');
            });
            ########### End Users Controller #########

            ############# Start Casher Controller

            Route::controller(CasherController::class)->group(function () {
                Route::get('cashers', 'index');
                Route::match(['post', 'get'], 'casher/store', 'store');
                Route::match(['post', 'get'], 'casher/update/{id}', 'update');
                Route::post('casher/delete/{id}', 'delete');
            });
            ############ End Casher Controller
        });
    });

});
