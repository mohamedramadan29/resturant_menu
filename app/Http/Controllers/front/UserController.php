<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\front\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function account(){
        $orders = Order::with( 'details')->where("user_id",Auth::user()->id)->get();
        //dd($orders);
        return view("front.user.dashboard",compact("orders"));
    }
    public function logout(){
        Auth::logout();
        return redirect()->route('index');
    }
}
