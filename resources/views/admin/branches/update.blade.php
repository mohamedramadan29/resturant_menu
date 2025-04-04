@extends('admin.layouts.master')
@section('title')
    تعديل الفرع
@endsection
@section('css')
    {{--    <!-- DataTables CSS --> --}}
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
@endsection
@section('content')
    <!-- ==================================================== -->
    <div class="page-content">

        <!-- Start Container Fluid -->
        <div class="container-xxl">
            <form method="post" action="{{ url('admin/branch/update/' . $branch->id) }}" enctype="multipart/form-data">
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
                                <h4 class="card-title"> المعلومات العامة </h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">

                                        <div class="mb-3">
                                            <label for="name" class="form-label"> اسم الفرع </label>
                                            <input required type="text" id="name" class="form-control"
                                                name="name" value="{{ $branch['name'] ?? old('name') }}">
                                        </div>

                                    </div>

                                    <div class="col-lg-6">

                                        <div class="mb-3">
                                            <label for="location" class="form-label"> الموقع </label>
                                            <input required type="text" id="location" class="form-control"
                                                name="location" value="{{ $branch['location'] ?? old('location') }}">
                                        </div>

                                    </div>

                                    <div class="col-lg-6">

                                        <div class="mb-3">
                                            <label for="phone" class="form-label"> رقم الهاتف </label>
                                            <input required type="text" id="phone" class="form-control"
                                                name="phone" value="{{ $branch['phone'] ?? old('phone') }}">
                                        </div>

                                    </div>
                                    <div class="col-lg-6">

                                        <div class="mb-3">
                                            <label for="map_link" class="form-label"> رابط جوجل ماب </label>
                                            <input required type="text" id="map_link" class="form-control"
                                                name="map_link" value="{{ $branch['map_link'] ?? old('map_link') }}">
                                        </div>

                                    </div>

                                    <div class="col-lg-12">
                                        <label class="form-label">مواعيد العمل</label>
                                        @foreach(['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'] as $day)
                                            @php
                                                $dayHour = $branch->hours->where('day', $day)->first();
                                            @endphp
                                            <div class="mb-2">
                                                <label class="form-label">{{ $day }}</label>
                                                <div class="row">
                                                    <div class="col-md-5">
                                                        <input type="time" name="working_hours[{{ $day }}][open]" class="form-control"
                                                               value="{{ $dayHour ? $dayHour->open_time : '' }}" required>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <input type="time" name="working_hours[{{ $day }}][close]" class="form-control"
                                                               value="{{ $dayHour ? $dayHour->close_time : '' }}" required>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>





                                    <div class="col-lg-6">
                                        <label for="crater" class="form-label"> حالة التفعيل </label>
                                        <select required name="status" class="form-control" id="crater" data-choices
                                            data-choices-groups data-placeholder="Select Crater">
                                            <option value=""> -- حدد الحالة --</option>
                                            <option value="1" @selected($branch['status'] == 1)>مفعل</option>
                                            <option value="0" @selected($branch['status'] == 0)>غير مفعل</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 bg-light mb-3 rounded">
                            <div class="row justify-content-end g-2">
                                <div class="col-lg-2">
                                    <a href="{{ url('admin/branches') }}" class="btn btn-primary w-100"> رجوع </a>
                                </div>
                                <div class="col-lg-2">
                                    <button type="submit" class="btn btn-outline-secondary w-100"> تعديل <i
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
