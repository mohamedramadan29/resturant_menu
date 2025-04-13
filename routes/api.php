<?php

use App\Http\Controllers\testpaymentcontroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Broadcast;

use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Broadcast::routes(['middleware' => ['auth:admin']]);

Route::post('/payment/process', [testpaymentcontroller::class, 'paymentProcess']);
Route::match(['GET', 'POST'], '/payment/callback', [testpaymentcontroller::class, 'callBack']);
