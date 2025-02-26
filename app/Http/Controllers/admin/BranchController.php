<?php

namespace App\Http\Controllers\admin;

use App\Models\admin\Branch;
use Illuminate\Http\Request;
use App\Http\Traits\Message_Trait;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class BranchController extends Controller
{
    use Message_Trait;
    public function index()
    {
        $branches = Branch::all();
        return view("admin.branches.index", compact("branches"));
    }

    public function store(Request $request)
    {
        if ($request->isMethod("post")) {
            $data = $request->except('search_terms');
            $rules = [
                'name' => 'required|unique:branches,name',
                'location' => 'required|unique:branches,location',
                'phone' => 'required',
                'status' => 'required',
            ];

            $messages = [
                'name.required' => 'من فضلك ادخل اسم الفرع',
                'name.unique' => 'اسم الفرع مستخدم من قبل، يرجى اختيار اسم آخر',
                'location.required' => 'من فضلك ادخل موقع الفرع',
                'location.unique' => 'الموقع مستخدم بالفعل، يرجى اختيار موقع آخر',
                'phone.required' => 'من فضلك ادخل رقم الهاتف',
                'status.required' => 'يرجى تحديد حالة الفرع',
            ];

            $validator = Validator::make($data, $rules, $messages);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }

            Branch::create($data);

            return $this->success_message('تم اضافة الفرع بنجاح ');
        }
        return view('admin.branches.store');
    }

    public function update(Request $request, $id)
    {
        $branch = Branch::find($id);
        if ($request->isMethod('post')) {

            $data = $request->except('search_terms');
            $rules = [
                'name' => 'required|unique:branches.name' . $branch->id,
                'location' => 'required|unique:branches.location' . $branch->id,
                'phone' => 'required',
                'status' => 'required'
            ];

            $messages = [
                'name.required' => 'من فضلك ادخل اسم الفرع',
                'name.unique' => 'اسم الفرع مستخدم من قبل، يرجى اختيار اسم آخر',
                'location.required' => 'من فضلك ادخل موقع الفرع',
                'location.unique' => 'الموقع مستخدم بالفعل، يرجى اختيار موقع آخر',
                'phone.required' => 'من فضلك ادخل رقم الهاتف',
                'status.required' => 'يرجى تحديد حالة الفرع',
            ];
            $branch->update($data);
            return $this->success_message('تم تعديل البيانات بنجاح');
        }
        return view('admin.branches.update', compact('branch'));
    }

    public function delete($id)
    {
        $branch = Branch::find($id);
        $branch->delete();
        return $this->success_message('تم الحذف بنجاح');
    }


}
