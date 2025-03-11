<?php

namespace App\Http\Controllers\front;

use App\Models\admin\Branch;
use Illuminate\Http\Request;
use App\Http\Traits\Message_Trait;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\front\UserBranchDetail;
use Illuminate\Support\Facades\Session;

class SetBranchController extends Controller
{
    use Message_Trait;
    public function setBranchSession(Request $request)
    {
        $data = $request->all();
        $branch_name = $data['branch'];
        $branch = Branch::where('name', $branch_name)->first();
        $session_id = Session::get('session_id');
        if (empty($session_id)) {
            $session_id = Session::getId();
            Session::put('session_id', $session_id);
            Session::regenerate();
        }
        if (Auth::check()) {
            $user_id = Auth::user()->id;
            $user_branch = UserBranchDetail::where('user_id', $user_id)->first();
        } else {
            $user_id = 0;
            $user_branch = UserBranchDetail::where('session_id', $session_id)->first();
        }
        if ($user_branch) {
            $user_branch->branch_id = $branch->id;
            $user_branch->branch_name = $data['branch'];
            $user_branch->pickup_method = $data['pickup-method'];
            $user_branch->car_plate = $data['car-plate'];
            $user_branch->car_color = $data['car-color'];
            $user_branch->car_model = $data['car-modal'];
            $user_branch->save();
            return $this->success_message(' تم تحديث الفرع وطريقة الاستلام بنجاح' );
        } else {
            $user_branch = new UserBranchDetail();
            $user_branch->user_id = $user_id;
            $user_branch->session_id = $session_id;
            $user_branch->branch_name = $data['branch'];
            $user_branch->branch_id = $branch->id;
            $user_branch->pickup_method = $data['pickup-method'];
            $user_branch->car_plate = $data['car-plate'];
            $user_branch->car_color = $data['car-color'];
            $user_branch->car_model = $data['car-modal'];
            $user_branch->save();
            return $this->success_message('تم تحديد الفرع وطريقة الاستلام بنجاح');
        }
    }
}
