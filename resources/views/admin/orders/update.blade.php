@extends('admin.layouts.master')
@section('title')
    تفاصيل الطلب
@endsection
@section('css')
@endsection
@section('content')
    <!-- ==================================================== -->
    <div class="page-content">

        <!-- Start Container Fluid -->
        <div class="container-xxl">
            <form method="post" action="{{ url('admin/order/update/' . $order['id']) }}" enctype="multipart/form-data">
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
                                <h4 class="card-title"> معلومات العميل </h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="name" class="form-label"> الاسم </label>
                                            <input disabled required type="text" id="name" class="form-control"
                                                name="name" value="{{ $order['name'] }}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="name" class="form-label"> رقم الهاتف </label>
                                            <input disabled required type="text" id="name" class="form-control"
                                                name="name" value="{{ $order['phone'] }}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="name" class="form-label"> توقيت الطلب </label>
                                            <input disabled required type="text" id="name" class="form-control"
                                                name="name" value="{{ $order['time_delivery'] }}">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label for="name" class="form-label"> ملاحظات </label>
                                            <textarea class="form-control" disabled readonly name="" id="">{{ $order['notes'] }}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"> طريقة الاستلام ونوع الدفع </h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label for="name" class="form-label"> نوع الدفع </label>
                                            @if ($order['payment_method'] == 'cash')
                                                <span class="badge badge-success bg-success"> الدفع عند الاستلام </span>
                                            @else
                                                <span class="badge badge-danger bg-danger"> الدفع الالكتروني </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label for="name" class="form-label"> الفرع </label>
                                            <input disabled required type="text" id="name" class="form-control"
                                                name="name" value="{{ $order['branch_name'] }}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        @if ($order['pickup_method'] == 'counter')
                                            <div class="mb-3">
                                                <label for="name" class="form-label"> طريقة الاستلام </label>
                                                <input disabled required type="text" id="name" class="form-control"
                                                    name="name" value=" استلام من الشباك ">
                                            </div>
                                        @else
                                            <div class="mb-3">
                                                <label for="name" class="form-label"> طريقة الاستلام </label>
                                                <input disabled required type="text" id="name" class="form-control"
                                                    name="name" value=" استلام من  السيارة ">
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-3">
                                                    <label for="name" class="form-label"> رقم السيارة </label>
                                                    <input disabled required type="text" id="name"
                                                        class="form-control" name="name"
                                                        value="{{ $order['car_plate'] }}">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-3">
                                                    <label for="name" class="form-label"> اللون </label>
                                                    <input disabled required type="text" id="name"
                                                        class="form-control" name="name"
                                                        value="{{ $order['car_color'] }}">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-3">
                                                    <label for="name" class="form-label"> الموديل </label>
                                                    <input disabled required type="text" id="name"
                                                        class="form-control" name="name"
                                                        value="{{ $order['car_model'] }}">
                                                </div>
                                            </div>
                                        @endif

                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"> تفاصيل الطلب </h4>
                            </div>
                            <div class="card-body">
                                <table class="table-bordered table">
                                    <thead>
                                        <tr>
                                            <th> المنتج </th>
                                            <th> العدد </th>
                                            <th> السعر </th>
                                            <th> السعر الكلي </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($order['details'] as $detail)
                                            <tr>
                                                <td> {{ $detail['product_name'] }}
                                                    @if ($detail['size'])
                                                        <span class="caption badge badge-danger bg-danger">
                                                            {{ $detail['size'] }}
                                                        </span>
                                                    @endif
                                                </td>
                                                <td> {{ $detail['product_qty'] }} </td>
                                                <td> {{ $detail['product_price'] }} </td>
                                                <td> {{ number_format($detail['product_qty'] * $detail['product_price'], 2) }}
                                                </td>
                                            </tr>
                                        @endforeach

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"> حالة الطلب </h4>
                            </div>
                            <div class="card-body">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label for="name" class="form-label"> تحديث حالة الطلب </label>
                                        <select class="form-select" name="order_status">
                                            <option value="" selected disabled> -- حدد حالة الطلب --</option>
                                            <option {{ $order['order_status'] == 'لم يبدا' ? 'selected' : '' }}
                                                value="لم يبدا">لم يبدأ</option>
                                            <option {{ $order['order_status'] == 'بداية التنفيذ' ? 'selected' : '' }}
                                                value="بداية التنفيذ"> بداية التنفيذ </option>
                                            <option {{ $order['order_status'] == 'مكتمل' ? 'selected' : '' }}
                                                value="مكتمل">مكتمل </option>
                                            <option {{ $order['order_status'] == 'ملغي' ? 'selected' : '' }}
                                                value="ملغي">ملغي</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 bg-light mb-3 rounded">
                            <div class="row justify-content-end g-2">
                                <div class="col-lg-2">
                                    <a href="{{ url('admin/orders') }}" class="btn btn-primary w-100"> رجوع </a>
                                </div>
                                <div class="col-lg-2">
                                    <button type="submit" class="btn btn-outline-secondary w-100"> تحديث حالة الطلب <i
                                            class='bx bxs-save'></i></button>
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
