@extends('admin.layouts.master')
@section('title')
    تعديل الكاشير
@endsection
@section('css')
@endsection
@section('content')
    <!-- ==================================================== -->
    <div class="page-content">

        <!-- Start Container Fluid -->
        <div class="container-xxl">
            <form method="post" action="{{ url('admin/casher/update/'.$casher['id']) }}" enctype="multipart/form-data">
                @csrf

                <div class="row">
                    <div class="col-xl-12 col-lg-12 ">
                        @if (Session::has('Success_message'))
                            @php
                                toastify()->success(\Illuminate\Support\Facades\Session::get('Success_message'));
                            @endphp
                        @endif
                        @if ($errors->any())
                            @foreach ($errors->all() as $error)
                                @php
                                    toastify()->error($error);
                                @endphp
                            @endforeach
                        @endif
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"> تعديل الكاشير </h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="name" class="form-label"> الاسم </label>
                                            <input required type="text" id="name" class="form-control"
                                                name="name" value="{{  old('name') ?? $casher['name'] }}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="email" class="form-label"> البريد الالكتروني </label>
                                            <input required type="email" id="email" class="form-control"
                                                name="email" value="{{ old('email') ?? $casher['email'] }}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="phone" class="form-label"> رقم الهاتف </label>
                                            <input required type="number" id="phone" class="form-control"
                                                name="phone" value="{{ old('phone') ?? $casher['phone'] }}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="password" class="form-label"> كلمة المرور </label>
                                            <input type="password" id="password" class="form-control"
                                                name="password">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="confirm-password" class="form-label"> تاكيد كلمة المرور </label>
                                            <input type="password" id="confirm-password" class="form-control"
                                                name="password_confirmation">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="phone" class="form-label"> حدد الفرع </label>
                                            <select required name="branch_id" class="form-select" id="branch_id">
                                                <option value="" selected disabled> -- حدد الفرع -- </option>
                                                @foreach ($branches as $branche)
                                                    <option @selected($casher['branch_id'] == $branche['id']) value="{{ $branche['id'] }}">{{ $branche['name'] }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="phone" class="form-label"> الحالة </label>
                                            <select required name="status" class="form-select" id="status">
                                                <option value="" selected disabled> -- حدد الحالة -- </option>
                                                <option value="1" @selected($casher['status'] == 1)> مفعل </option>
                                                <option value="0" @selected($casher['status'] == 0)>غير مفعل</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 bg-light mb-3 rounded">
                            <div class="row justify-content-end g-2">
                                <div class="col-lg-2">
                                    <button type="submit" class="btn btn-outline-secondary w-100"> حفظ <i
                                            class='bx bxs-save'></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!-- End Container Fluid -->


        <!-- ==================================================== -->
        <!-- End Page Content -->
        <!-- ==================================================== -->
    @endsection

    @section('js')
    @endsection
