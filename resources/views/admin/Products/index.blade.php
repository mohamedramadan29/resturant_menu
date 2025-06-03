@extends('admin.layouts.master')
@section('title')
    المنتجات
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
                            <h4 class="card-title flex-grow-1"> المنتجات </h4>

                            <a href="{{ url('admin/product/add') }}" class="btn btn-sm btn-primary">
                                اضف منتج جديد <i class="ti ti-plus"></i>
                            </a>
                        </div>


                        <div>
                            <div class="table-responsive">
                                <table id="table-search"
                                    class="table table-bordered gridjs-table align-middle mb-0 table-hover table-centered">
                                    <thead class="bg-light-subtle">
                                        <tr>
                                            <th style="width: 20px;">
                                            </th>
                                            <th> اسم المنتج </th>
                                            <th> القسم </th>
                                            <th> السعر </th>
                                            <th> الخصم </th>
                                            <th> الصورة </th>
                                            <th> حالة النشر </th>
                                            <th> المنتج مميز </th>
                                            <th> العمليات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @php
                                            $i = 1;
                                        @endphp
                                        @foreach ($products as $product)
                                            <tr>
                                                <td>
                                                    {{ $i++ }}
                                                </td>
                                                <td><a href="{{ url('admin/product/update/' . $product['slug']) }}"></a>
                                                    {{ $product['name'] }} </td>
                                                <td> {{ $product['Main_Category']['name'] }} </td>
                                                <td>
                                                    @if ($product['product_type'] == 'simple')
                                                        {{ $product['price'] }} $
                                                    @else
                                                        منتج متغير
                                                    @endif
                                                </td>
                                                <td> {{ $product['discount'] ?? 0 }} $ </td>
                                                <td>
                                                    <img class="img-thumbnail"
                                                        src="{{ asset('assets/uploads/product_images/' . $product['image']) }}"
                                                        width="80" height="80px" alt="">
                                                </td>
                                                <td>
                                                    @if ($product['status'] == 1)
                                                        <span class="badge bg-success"> فعال </span>
                                                    @else
                                                        <span class="badge bg-danger"> ارشيف </span>
                                                    @endif
                                                    <a class="btn btn-sm btn-default" href="{{ route('product.change-status', $product['id']) }}"
                                                        > تغير الحالة  </a>
                                                </td>
                                                <td>
                                                    @if ($product['is_featured'] == 1)
                                                        <span class="badge bg-success">مميز</span>
                                                    @else
                                                        <span class="badge bg-danger">غير مميز</span>
                                                    @endif
                                                </td>
                                                <td>
                                                    <div class="d-flex gap-2">
                                                        <a href="{{ url('admin/product/update/' . $product['slug']) }}"
                                                            class="btn btn-soft-primary btn-sm">
                                                            <iconify-icon icon="solar:pen-2-broken"
                                                                class="align-middle fs-18"></iconify-icon>
                                                        </a>
                                                        <button type="button" class="btn btn-soft-danger btn-sm"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#delete_category_{{ $product['id'] }}">
                                                            <iconify-icon icon="solar:trash-bin-minimalistic-2-broken"
                                                                class="align-middle fs-18"></iconify-icon>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <!-- Modal -->
                                            @include('admin.Products.delete')
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
