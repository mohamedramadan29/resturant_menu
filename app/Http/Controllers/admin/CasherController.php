<?php

namespace App\Http\Controllers\admin;

use App\Models\admin\admin;
use App\Models\admin\Branch;
use Illuminate\Http\Request;
use App\Http\Traits\Message_Trait;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class CasherController extends Controller
{
    use Message_Trait;

    public function index()
    {
        $casheries = admin::with('branch')->where('account_type','casher')->orderBy('id', 'desc')->get();
        return view('admin.casher.index', compact('casheries'));
    }

    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->all();
            $rules = [
                'name' => 'required',
                'email' => 'required|email|unique:admins,email',
                'phone' => 'required|numeric|unique:admins,phone',
                'password' => 'required|min:6',
                'password_confirmation' => 'required|same:password',
                'branch_id' => 'required',
                'status' => 'required',

            ];
            $messages = [
                'name.required' => 'الاسم مطلوب',
                'email.required' => 'البريد الالكتروني مطلوب',
                'email.email' => 'البريد الالكتروني غير صحيح',
                'email.unique' => 'البريد الالكتروني موجود بالفعل',
                'phone.required' => 'رقم الهاتف مطلوب',
                'phone.unique' => 'رقم الهاتف موجود بالفعل',
                'password.required' => 'كلمة المرور مطلوبة',
                'password.min' => 'كلمة المرور يجب ان تكون على الاقل 6 حروف',
                'branch_id.required' => 'الفرع مطلوب',
                'status.required' => 'الحالة مطلوبة',
            ];
            $validator = Validator::make($data, $rules, $messages);
            if ($validator->fails()) {
                return Redirect::back()->withErrors($validator)->withInput();
            }
            $casher = new admin();
            $casher->name = $data['name'];
            $casher->email = $data['email'];
            $casher->phone = $data['phone'];
            $casher->password = Hash::make($data['password']);
            $casher->account_type = 'casher';
            $casher->branch_id = $data['branch_id'];
            $casher->status = $data['status'];
            $casher->save();

            return $this->success_message(' تم اضافة الكاشير بنجاح');
        }

        $branches = Branch::all();
        return view('admin.casher.add', compact('branches'));
    }

    public function update(Request $request, $id)
    {
        $casher = admin::find($id);
        if (!$casher) {
            abort(404);
        }
        if ($request->isMethod('post')) {
            $data = $request->all();
            $rules = [
                'name' => 'required',
                'email' => 'required|email|unique:admins,email,' . $casher->id,
                'phone' => 'required|numeric|unique:admins,phone,' . $casher->id,
                'password' => 'nullable|min:6',
                'password_confirmation' => 'nullable|same:password',
                'branch_id' => 'required',
                'status' => 'required',
            ];
            $messages = [
                'name.required' => 'الاسم مطلوب',
                'email.required' => 'البريد الالكتروني مطلوب',
                'email.email' => 'البريد الالكتروني غير صحيح',
                'email.unique' => 'البريد الالكتروني موجود بالفعل',
                'phone.required' => 'رقم الهاتف مطلوب',
                'phone.unique' => 'رقم الهاتف موجود بالفعل',
                'password.min' => 'كلمة المرور يجب ان تكون على الاقل 6 حروف',
                'branch_id.required' => 'الفرع مطلوب',
                'status.required' => 'الحالة مطلوبة',
            ];
            $validator = Validator::make($data, $rules, $messages);
            if ($validator->fails()) {
                return Redirect::back()->withErrors($validator)->withInput();
            }
            $casher->update([
                "name" => $data['name'],
                "email" => $data['email'],
                "phone" => $data['phone'],
                "password" => $data['password'] ? Hash::make($data['password']) : $casher->password,
                "account_type" => 'casher',
                "branch_id" => $data['branch_id'],
                "status" => $data['status'],
            ]);
            return $this->success_message(' تم تعديل الكاشير بنجاح');
        }
        $branches = Branch::all();
        return view('admin.casher.edit', compact('casher', 'branches'));
    }
    public function delete($id)
    {
        $casher = admin::find($id);
        if (!$casher) {
            abort(404);
        }
        $casher->delete();
        return $this->success_message(' تم حذف الكاشير بنجاح');
    }
}
