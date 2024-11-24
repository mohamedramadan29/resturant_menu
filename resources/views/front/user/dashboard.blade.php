@extends('front.layouts.master')
@section('title')
    حسابي
@endsection

@section('content')
    <!-- Content -->
    <div id="content">
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
        <!-- Page Title -->
        <div class="page-title bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="mb-0" style="text-align: center;font-weight:400"> حسابي </h1>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page Content -->
        <div class="page-content">
            <div class="container">
                <div class="row no-gutters">
                    <table class="table table-bordered table-responsive">
                        <thead>
                            <tr>
                                <th> رقم الطلب </th>
                                <th> قيمة الطلب </th>
                                <th> حالة الطلب </th>
                                <th> منتجات الطلب  </th>

                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($orders as $order)
                                <tr>
                                    <td> {{ $order['id'] }} </td>
                                    <td> {{ $order['grand_total'] }}  ريال  </td>
                                    <td> <span class="badge badge-info"> {{ $order['order_status'] }} </span> </td>
                                    <td>
                                        @foreach ($order['details'] as $detail )
                                        {{ $detail['product_name'] }} - {{ $detail['product_qty'] }} <br>
                                        @endforeach
                                        </td>

                                </tr>
                            @endforeach

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- Content / End -->

    </div>
@endsection
