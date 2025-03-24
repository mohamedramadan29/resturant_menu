@extends('admin.layouts.master')
@section('title')
    الرئيسية
@endsection
@section('content')
    <!-- ==================================================== -->
    <!-- Start right Content here -->
    <!-- ==================================================== -->
    <div class="page-content">

        <!-- Start Container Fluid -->
        <div class="container-xxl">

            <!-- Start here.... -->

            <div class="row">
                <div class="col-md-3">
                    <div class="card overflow-hidden">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="avatar-md bg-soft-primary rounded">
                                        <i class="bx bx-cart avatar-title fs-32 text-primary"></i>
                                    </div>
                                </div> <!-- end col -->
                                <div class="col-6 text-end">
                                    <p class="text-muted mb-0"> الطلبات </p>
                                    @php
                                    if(Auth::guard('admin')->user()->account_type == 'admin'){
                                        $orders = \App\Models\admin\Order::all();
                                    }else{
                                        $orders = \App\Models\admin\Order::where('branch_id',Auth::guard('admin')->user()->branch_id)->get();
                                    }
                                    @endphp
                                    <h3 class="text-dark mt-1 mb-0"> @php echo  count($orders) @endphp </h3>
                                </div> <!-- end col -->
                            </div> <!-- end row-->
                        </div> <!-- end card body -->
                        <div class="card-footer py-2 bg-light bg-opacity-50">
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="{{ url('admin/orders') }}" class="text-reset fw-semibold fs-12"> مشاهدة
                                    التفاصيل </a>
                            </div>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->
                </div> <!-- end col -->
                @if (Auth::guard('admin')->user()->account_type == 'admin')
                    <div class="col-md-3">
                        <div class="card overflow-hidden">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="avatar-md bg-soft-primary rounded">
                                            <iconify-icon icon="solar:t-shirt-bold-duotone"
                                                class="avatar-title fs-32 text-primary"></iconify-icon>
                                        </div>
                                    </div> <!-- end col -->
                                    <div class="col-6 text-end">
                                        <p class="text-muted mb-0"> المنتجات </p>
                                        <h3 class="text-dark mt-1 mb-0"> @php echo  count(\App\Models\admin\Product::all()) @endphp </h3>
                                    </div> <!-- end col -->
                                </div> <!-- end row-->
                            </div> <!-- end card body -->
                            <div class="card-footer py-2 bg-light bg-opacity-50">
                                <div class="d-flex align-items-center justify-content-between">
                                    <a href="{{ url('admin/products') }}" class="text-reset fw-semibold fs-12"> مشاهدة
                                        التفاصيل </a>
                                </div>
                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-md-3">
                        <div class="card overflow-hidden">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="avatar-md bg-soft-primary rounded">
                                            <iconify-icon icon="solar:clipboard-list-bold-duotone"
                                                class="avatar-title fs-24 text-primary"></iconify-icon>
                                        </div>
                                    </div> <!-- end col -->
                                    <div class="col-6 text-end">
                                        <p class="text-muted mb-0"> التصنيفات الرئيسية </p>
                                        <h3 class="text-dark mt-1 mb-0"> @php echo count(\App\Models\admin\Category::all()) @endphp </h3>
                                    </div> <!-- end col -->
                                </div> <!-- end row-->
                            </div> <!-- end card body -->
                            <div class="card-footer py-2 bg-light bg-opacity-50">
                                <div class="d-flex align-items-center justify-content-between">
                                    <a href="{{ url('admin/main-categories') }}" class="text-reset fw-semibold fs-12">
                                        مشاهدة
                                        التفاصيل </a>
                                </div>
                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->

                    <div class="col-md-3">
                        <div class="card overflow-hidden">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="avatar-md bg-soft-primary rounded">
                                            <i class="bx bx-user avatar-title fs-24 text-primary"></i>
                                        </div>
                                    </div> <!-- end col -->
                                    <div class="col-6 text-end">
                                        <p class="text-muted mb-0 text-truncate"> العملاء </p>
                                        <h3 class="text-dark mt-1 mb-0">3</h3>
                                    </div> <!-- end col -->
                                </div> <!-- end row-->
                            </div> <!-- end card body -->
                            <div class="card-footer py-2 bg-light bg-opacity-50">
                                <div class="d-flex align-items-center justify-content-between">
                                    <a href="#!" class="text-reset fw-semibold fs-12"> مشاهدة التفاصيل </a>
                                </div>
                            </div> <!-- end card body -->
                        </div> <!-- end card -->
                    </div>
                @endif
                <!-- end col -->
            </div> <!-- end row -->
            @php
                $productsOrders = \App\Models\front\OrderDetail::with('product')
                    ->select('product_id', \DB::raw('COUNT(*) as total'))
                    ->groupBy('product_id')
                    ->orderByDesc('total')
                    ->take(15)
                    ->get();

                // التأكد من أن المنتج موجود قبل استخدام الاسم
                $productNames = $productsOrders
                    ->map(fn($item) => $item->product ? $item->product->name : 'منتج غير متوفر')
                    ->toArray();
                $productTotals = $productsOrders->pluck('total')->toArray();

                ####################################################################

                use Carbon\Carbon;
                use App\Models\admin\Order;

                // جلب الطلبات وتجميعها حسب السنة والشهر
                $monthlyOrders = Order::selectRaw(
                    'YEAR(created_at) as year, MONTH(created_at) as month, COUNT(*) as count',
                )
                    ->groupBy('year', 'month')
                    ->orderBy('year')
                    ->orderBy('month')
                    ->get();

                // تجهيز البيانات لتمريرها إلى JavaScript
                $categories = [];
                $orderCounts = [];

                foreach ($monthlyOrders as $order) {
                    $monthYear = Carbon::create($order->year, $order->month)->translatedFormat('F Y'); // تنسيق الشهر والسنة (مثلاً: "يناير 2024")
                    $categories[] = $monthYear;
                    $orderCounts[] = $order->count;
                }

            @endphp
            <div class='row'>
                @if (Auth::guard('admin')->user()->account_type == 'admin')
                    <div class="col-lg-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title anchor" id="basic">
                                    اكثر المنتجات طلبا <a class="anchor-link" href="#basic">#</a>
                                </h5>
                                <div id="basic-bar" class="apex-charts"></div>
                            </div>
                            <script>
                                $(document).ready(function() {
                                    var colors = ["#1c84ee"];
                                    var options = {
                                        chart: {
                                            height: 380,
                                            type: "bar",
                                            toolbar: {
                                                show: true,
                                            },
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                            },
                                        },
                                        dataLabels: {
                                            enabled: true,
                                        },
                                        series: [{
                                            name: "عدد الطلبات",
                                            data: @json($productTotals),
                                        }],
                                        colors: colors,
                                        xaxis: {
                                            categories: @json($productNames),
                                        },
                                        states: {
                                            hover: {
                                                filter: "none",
                                            },
                                        },
                                        grid: {
                                            borderColor: "#f1f3fa",
                                        },
                                    };

                                    var chart = new ApexCharts(document.querySelector("#basic-bar"), options);
                                    chart.render();
                                });
                            </script>
                        </div>

                    </div>

                    <div class="col-lg-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title mb-3anchor" id="datalabels"> تقرير شهري علي المبيعات </h4>


                                <div dir="ltr">
                                    <div id="datalabels-column" class="apex-charts"></div>
                                </div>
                            </div>
                            <script>
                                $(document).ready(function() {
                                    var colors = ["#4ecac2"];
                                    var categories = @json($categories); // تمرير الأشهر مع السنوات
                                    var orderCounts = @json($orderCounts); // تمرير عدد الطلبات

                                    var options = {
                                        chart: {
                                            height: 380,
                                            type: 'bar',
                                            toolbar: {
                                                show: false
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                borderRadius: 10,
                                                dataLabels: {
                                                    position: 'top',
                                                },
                                            }
                                        },
                                        dataLabels: {
                                            enabled: true,
                                            formatter: function(val) {
                                                return val + " طلب";
                                            },
                                            offsetY: -25,
                                            style: {
                                                fontSize: '12px',
                                                colors: ["#304758"]
                                            }
                                        },
                                        colors: colors,
                                        series: [{
                                            name: 'عدد الطلبات',
                                            data: orderCounts // استخدام القيم الديناميكية
                                        }],
                                        xaxis: {
                                            categories: categories, // استخدام الشهر والسنة بدلاً من الأشهر فقط
                                            position: 'top',
                                            labels: {
                                                rotate: -45, // تدوير النصوص الطويلة لتكون واضحة
                                                style: {
                                                    fontSize: '12px'
                                                }
                                            },
                                            axisBorder: {
                                                show: false
                                            },
                                            axisTicks: {
                                                show: false
                                            },
                                        },
                                        yaxis: {
                                            labels: {
                                                formatter: function(val) {
                                                    return val + " طلب";
                                                }
                                            }
                                        },
                                        title: {
                                            text: 'تقرير شهري على المبيعات حسب السنة',
                                            floating: true,
                                            offsetY: 360,
                                            align: 'center',
                                            style: {
                                                color: '#444'
                                            }
                                        },
                                        grid: {
                                            borderColor: '#f1f3fa'
                                        }
                                    };

                                    var chart = new ApexCharts(document.querySelector("#datalabels-column"), options);
                                    chart.render();
                                });
                            </script>

                            <!-- end card body-->
                        </div>
                    </div>

            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title mb-3anchor" id="datalabels"> احدث الطلبات </h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table id="table-search"
                                    class="table table-bordered gridjs-table align-middle mb-0 table-hover table-centered">
                                    <thead class="bg-light-subtle">
                                        <tr>
                                            <th style="width: 20px;">
                                            </th>
                                            <th> الاسم </th>
                                            <th> رقم الهاتف </th>
                                            <th> السعر الكلي </th>
                                            <th> العمليات</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        @foreach ($lastorders as $order)
                                            <tr>
                                                <td>
                                                    {{ $loop->iteration }}
                                                </td>
                                                <td> {{ $order['name'] }} </td>
                                                <td>
                                                    {{ $order['phone'] }}
                                                </td>
                                                <td> {{ $order['grand_total'] }} </td>
                                                <td>
                                                    <div class="d-flex gap-2">
                                                        <a href="{{ url('/admin/order/update/' . $order['id']) }}"
                                                            class="btn btn-soft-primary btn-sm">
                                                            <iconify-icon icon="solar:pen-2-broken"
                                                                class="align-middle fs-18"></iconify-icon>
                                                        </a>
                                                    </div>
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
            @endif
        </div>


    </div>
    <!-- ==================================================== -->
    <!-- End Page Content -->
    <!-- ==================================================== -->
@endsection

@section('js')
    <script src="{{ asset('assets/admin/js/components/apexchart-column.js') }}"></script>
    <!-- Apex Chart Bar Demo js -->
    <script src="{{ asset('assets/admin/js/components/apexchart-bar.js') }}"></script>
@endsection
