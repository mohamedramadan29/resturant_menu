<?php

namespace App\Http\Controllers\admin;

use App\Models\admin\Branch;
use Illuminate\Http\Request;
use App\Models\admin\BranchHour;
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
            $data = $request->all();
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

            $branch = new Branch();
            $branch->name = $data['name'];
            $branch->location = $data['location'];
            $branch->phone = $data['phone'];
            $branch->map_link = $data['map_link'];
            $branch->status = $data['status'];
            $branch->save();


            foreach ($request->working_hours as $day => $times) {
                BranchHour::create([
                    'branch_id' => $branch->id,
                    'day' => $day,
                    'open_time' => $times['open'],
                    'close_time' => $times['close'],
                ]);
            }

            return $this->success_message('تم اضافة الفرع بنجاح ');
        }
        return view('admin.branches.store');
    }

    public function update(Request $request, $id)
    {
        $branch = Branch::find($id);
        if ($request->isMethod('post')) {

            $data = $request->all();
            $rules = [
                'name' => 'required|unique:branches,name,' . $branch->id,
                'location' => 'required|unique:branches,location,' . $branch->id,
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
            $validator = Validator::make($data, $rules, $messages);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }
            $branch->update([
                'name' => $data['name'],
                'location' => $data['location'],
                'phone' => $data['phone'],
                'map_link' => $data['map_link'],
                'status' => $data['status'],
            ]);
            // BranchHour::where('branch_id', $branch->id)->delete();
            foreach ($request->working_hours as $day => $times) {
                $branch->hours()->updateOrCreate(
                    ['day' => $day],
                    [
                        'open_time' => $times['open'],
                        'close_time' => $times['close'],
                    ]
                );
            }


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
