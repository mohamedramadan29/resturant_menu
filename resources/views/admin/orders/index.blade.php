@extends('admin.layouts.master')
@section('title')
    الطلبات
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
            <div class="row">
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
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center gap-1">
                            <h4 class="card-title flex-grow-1"> الطلبات </h4>
                            <form action="{{ request()->url() }}" method="get">
                                @csrf
                                <label> بحث بين تاريخ </label>
                                <div class="d-flex gap-1">
                                    <input type="date" name="from_date" class="form-control"
                                        value="{{ request()->from_date }}">
                                    <input type="date" name="to_date" class="form-control"
                                        value="{{ request()->to_date }}">
                                    <button type="submit" class="btn btn-primary"> بحث </button>
                                </div>
                            </form>
                        </div>


                        <div>
                            <div class="table-responsive">
                                <table id="table-search"
                                    class="table table-bordered gridjs-table align-middle mb-0 table-hover table-centered">
                                    <thead class="bg-light-subtle">
                                        <tr>
                                            <th> # </th>
                                            <th> رقم الطلب </th>
                                            <th> اسم العميل </th>
                                            <th> رقم الهاتف </th>

                                            {{-- <th> قيمة الشحن   </th> --}}
                                            <th> الاجمالي </th>
                                            <th> حالة الطلب </th>
                                            <th> نوع الدفع </th>
                                            <th> تاريخ الطلب </th>
                                            <th> العمليات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($orders as $order)
                                            <tr>
                                                <td>
                                                    {{ $loop->iteration }}
                                                </td>
                                                <td> {{ $order->id }} </td>
                                                <td> {{ $order['name'] }} </td>
                                                <td> {{ $order['phone'] }} </td>

                                                {{-- <td> {{$order['shipping_price']}} </td> --}}
                                                <td> {{ $order['grand_total'] }} </td>
                                                <td>
                                                    @if ($order['order_status'] == 'لم يبدا')
                                                        <span class="badge badge-info bg-warning">
                                                            {{ $order['order_status'] }} </span>
                                                    @elseif($order['order_status'] == 'بداية التنفيذ')
                                                        <span class="badge badge-info bg-info"> {{ $order['order_status'] }}
                                                        </span>
                                                    @elseif($order['order_status'] == 'مكتمل')
                                                        <span class="badge badge-info bg-success">
                                                            {{ $order['order_status'] }} </span>
                                                    @elseif($order['order_status'] == 'ملغي')
                                                        <span class="badge badge-info bg-danger">
                                                            {{ $order['order_status'] }} </span>
                                                    @endif
                                                </td>
                                                <td>
                                                    @if ($order['payment_method'] == 'cash')
                                                        <span class="badge badge-success bg-success"> الدفع عند الاستلام </span>
                                                    @else
                                                        <span class="badge badge-danger bg-danger"> الدفع الالكتروني </span>
                                                    @endif
                                                </td>
                                                <td> {{ $order['created_at']->format('Y-m-d H:i A') }} </td>
                                                <td>
                                                    <div class="d-flex gap-2">
                                                        <a href="{{ url('admin/order/update/' . $order['id']) }}"
                                                            class="btn btn-soft-primary btn-sm">
                                                            <iconify-icon icon="solar:pen-2-broken"
                                                                class="align-middle fs-18"></iconify-icon>
                                                        </a>
                                                        {{-- <a href="{{url('admin/order/print/'.$order['id'])}}" class="btn btn-soft-primary btn-sm">
                                                        <i class='bx bxs-printer'></i>
                                                    </a>
                                                    <button type="button" class="btn btn-soft-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delete_category_{{$order['id']}}">
                                                        <iconify-icon icon="solar:trash-bin-minimalistic-2-broken"
                                                                      class="align-middle fs-18"></iconify-icon>
                                                    </button> --}}
                                                    </div>
                                                </td>
                                            </tr>
                                            <!-- Modal -->
                                            @include('admin.orders.delete')
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                            <!-- end table-responsive -->
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- End Container Fluid -->

    </div>
    <!-- ==================================================== -->
    <!-- End Page Content -->
    <!-- ==================================================== -->

@endsection

@section('js')
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    {{--    <!-- DataTables JS --> --}}
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>

    <script>
        $(document).ready(function() {
            // تحقق ما إذا كان الجدول قد تم تهيئته من قبل
            if ($.fn.DataTable.isDataTable('#table-search')) {
                $('#table-search').DataTable().destroy(); // تدمير التهيئة السابقة
            }

            // تهيئة DataTables من جديد
            $('#table-search').DataTable({
                "language": {
                    "search": "بحث:",
                    "lengthMenu": "عرض _MENU_ عناصر لكل صفحة",
                    "zeroRecords": "لم يتم العثور على سجلات",
                    "info": "عرض _PAGE_ من _PAGES_",
                    "infoEmpty": "لا توجد سجلات متاحة",
                    "infoFiltered": "(تمت التصفية من إجمالي _MAX_ سجلات)",
                    "paginate": {
                        "previous": "السابق",
                        "next": "التالي"
                    }
                }
            });
        });
    </script>
@endsection
