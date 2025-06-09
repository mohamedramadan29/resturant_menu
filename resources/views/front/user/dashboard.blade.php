@extends('front.layouts.master')
@section('title')
    طلباتي
@endsection

@section('css')
<link rel="stylesheet" href="https://cdn.datatables.net/2.3.1/css/dataTables.dataTables.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.dataTables.min.css">
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
                        <h1 class="mb-0" style="text-align: center;font-weight:400"> طلباتي </h1>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page Content -->
        <div class="page-content">
            <div class="container">
                <div class="row no-gutters">
                    <div class="table-responsive">
                        <table class="table table-bordered display nowrap" id="orders">
                            <thead>
                                <tr>
                                    <th> رقم الطلب </th>
                                    <th> قيمة الطلب </th>
                                    <th> حالة الطلب </th>
                                    <th> نوع الدفع </th>
                                    <th> تاريخ الطلب </th>
                                    <th> المنتجات  </th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($orders as $order)
                                    <tr>
                                        <td> {{ $order['id'] }} </td>
                                        <td> {{ $order['grand_total'] }} ريال </td>
                                        <td> <span class="badge badge-info"> {{ $order['order_status'] }} </span> </td>
                                        <td> @if($order['payment_method'] == 'cash')
                                            <span class="badge badge-success"> الدفع عند الاستلام  </span>
                                        @else
                                            <span class="badge badge-danger"> الدفع الالكتروني  </span>
                                        @endif </td>
                                        <td> {{ $order['created_at']->format('Y-m-d H:i A') }}  </td>
                                        <td>
                                            @foreach ($order['details'] as $detail)
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
    </div>
    <!-- Content / End -->

    </div>
@endsection


@section('js')
<script src="https://cdn.datatables.net/2.3.1/js/dataTables.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"></script>
<script>
    $(document).ready(function() {
        $('#orders').DataTable({
            responsive: true,
            searching: false,
            ordering: false,
            paging: false,
            lengthChange: false,
            info: false,
            autoWidth: false,
            language: {
                url: "https://cdn.datatables.net/plug-ins/1.13.4/i18n/ar.json"
            }
        });
    });
</script>
@endsection
