@php
    $public_setting = \App\Models\admin\PublicSetting::first();
    $categories = \App\Models\admin\Category::where('status', 1)->get();
    $cartCount = \App\Models\front\Cart::getcartitems()->count();
    $carttotal = \App\Models\front\Cart::getcarttotal();
    $branches = \App\Models\admin\Branch::all();
    $user_branch = \App\Models\front\UserBranchDetail::where('session_id', Session::get('session_id'))->first();
@endphp
<!-- Body Wrapper -->
<div id="body-wrapper">
    <!-- Header Desktop -->
    <header id="header" class="light">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="module module-logo dark">
                        <a class="index_page" href="{{ url('/') }}">
                            <img src="{{ asset('assets/uploads/PublicSetting/' . $public_setting->website_logo) }}"
                                alt="" width="150px" />
                        </a>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="branch-selector">
                        <span class="label"> <i class="bi bi-basket3-fill"></i> الفرع </span>
                        <button id="selectbranchBtn" type="button" class="select-branch-btn" data-bs-toggle="modal"
                            data-bs-target="#selectbranchModal">
                            @if ($user_branch)
                                {{ $user_branch->branch_name }}
                            @else
                                تحديد الفرع
                            @endif

                        </button>
                    </div>
                    <script>
                        document.getElementById('selectbranchBtn').addEventListener('click', function() {
                            $('.modal-backdrop.show').remove();
                        });
                    </script>
                </div>
                <div class="col-md-2">
                    <a class="module module-cart right" data-bs-toggle="offcanvas" data-bs-target="#offcanvascart"
                        role="button">
                        <span class="cart-icon">
                            <i class="bi bi-bag-heart-fill"></i>
                            <span class="notification1">{{ $cartCount }}</span>
                        </span>
                        <span class="cart-value">ريال <span>{{ number_format($carttotal, 2) }}</span></span>
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- Header Mobile -->
    <header id="header-mobile" class="light">
        <div class="module module-nav-toggle">
            <a href="#" id="nav-toggle">
                <span></span><span></span><span></span><span></span>
            </a>
        </div>
        <div class="branch-selector">
            <span class="label"> <i class="bi bi-basket3-fill"></i> الفرع </span>
            <button id="selectbranchBtn" type="button" class=" select-branch-btn" data-bs-toggle="modal"
                data-bs-target="#selectbranchModal">
                @if ($user_branch)
                    {{ $user_branch->branch_name }}
                @else
                    تحديد الفرع
                @endif
            </button>
            <script>
                document.getElementById('selectbranchBtn').addEventListener('click', function() {
                    $('.modal-backdrop.show').remove();
                });
            </script>
        </div>

        <a class="module module-cart right" data-bs-toggle="offcanvas" data-bs-target="#offcanvascart" role="button">
            <i class="bi bi-bag-heart-fill"></i>
            <span class="notification1">{{ $cartCount }}</span>
        </a>
    </header>

    <!-- Header / End -->
    <!-- القائمة المنسدلة -->
    <div id="dropdownMenu" class="dropdown-menu">
        <ul class="menu-items">
            <li><a href="{{ route('index') }}"><i class="bi bi-menu-up"></i> القائمة </a></li>
            <li><a href="{{ route('account') }}"><i class="bi bi-person"></i> حسابي </a></li>
            <li><a href="{{ route('contact') }}"><i class="bi bi-telephone"></i> اتصل بنا</a></li>
            @if (Auth::check())
                <li><a href="{{ route('user.logout') }}"><i class="bi bi-box-arrow-in-right"></i> تسجيل الخروج</a>
                </li>
            @else
                <li><a class="checkout_button" href="{{ route('check.login.status') }}"><i
                            class="bi bi-box-arrow-in-right"></i> تسجيل الدخول</a></li>
            @endif
        </ul>
    </div>
    <!-- select branch modal -->
    <div class="modal fade selectbranchModal" id="selectbranchModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-between">
                    <h5 class="modal-title"> حدد طريقة الاستلام </h5>
                    <button style="left: 10px;right: auto !important;font-size: 20px;" type="button" class="close"
                        data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="{{ route('setBranchSession') }}" method="post">
                    @csrf
                    <div class="modal-body">
                        <div class="pickup-methods">
                            <label>
                                <input type="radio" name="pickup-method" value="counter" checked
                                    {{ $user_branch && $user_branch->pickup_method == 'counter' ? 'checked' : '' }}>
                                استلام
                                من الشباك
                            </label>
                            <label>
                                <input type="radio" name="pickup-method" value="car"
                                    {{ $user_branch && $user_branch->pickup_method == 'car' ? 'checked' : '' }}> توصيل
                                للسيارة
                            </label>
                        </div>
                        <div class="car-info">
                            <button class="add-car-btn btn btn-primary btn-sm">إضافة سيارة <i
                                    class="bi bi-car-front-fill"></i> </button>
                            <div class="car-form" style="display: none;">
                                <div class="form-group">
                                    <label for="car-plate"> رقم اللوحة: </label>
                                    <input type="text" name="car-plate" class="form-control car-plate"
                                        placeholder="أدخل رقم اللوحة"
                                        value="{{ $user_branch && $user_branch->car_plate ? $user_branch->car_plate : '' }}">
                                </div>
                                <div class="form-group">
                                    <label for="car-color"> اللون: </label>
                                    <input type="text" name="car-color" class="form-control car-color"
                                        placeholder="أدخل لون السيارة"
                                        value="{{ $user_branch && $user_branch->car_color ? $user_branch->car_color : '' }}">
                                </div>
                                <div class="form-group">
                                    <label for="car-modal"> موديل السيارة : </label>
                                    <input type="text" name="car-modal" class="form-control car-modal"
                                        placeholder="أدخل موديل السيارة"
                                        value="{{ $user_branch && $user_branch->car_model ? $user_branch->car_model : '' }}">
                                </div>
                            </div>
                        </div>
                        <ul class="branch-list">
                            @foreach ($branches as $branch)
                                {{-- <div class="branch-item" data-branch="{{ $branch['name'] }}">
                                <label> {{ $branch['name'] }} </label>
                                <input type="radio" name="branch" value="{{ $branch['name'] }}">
                            </div> --}}
                            @endforeach
                        </ul>
                        <ul class="branch-list">
                            @foreach ($branches as $branch)
                                <li>
                                    <input
                                        {{ $user_branch && $user_branch->branch_name == $branch['name'] ? 'checked' : '' }}
                                        required type="radio" id="{{ $branch['name'] }}" name="branch"
                                        value="{{ $branch['name'] }}" hidden>
                                    <label for="{{ $branch['name'] }}" class="branch-item">
                                        {{ $branch['name'] }}
                                        <span class="checkmark">✔</span>
                                        <div class="icons">
                                            <a href="tel:{{ $branch['phone'] }}"><i class="bi bi-telephone"></i> </a>
                                            <a href="https://www.google.com/maps/place/24%C2%B050'52.1%22N+46%C2%B040'58.6%22E/@24.847832,46.6829274,20z/data=!4m4!3m3!8m2!3d24.847803!4d46.6829564?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                                                target="_blank"><i class="bi bi-geo-alt"></i> </a>
                                            <span>
                                                @if ($branch->isOpen())
                                                    <span class="badge bg-success">مفتوح الآن</span>
                                                @else
                                                    <span class="badge bg-danger">مغلق الآن</span>
                                                @endif
                                            </span>
                                        </div>
                                    </label>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">اغلاق</button>
                        <button type="submit" class="btn btn-primary">حفظ</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


    @include('front.partials.cart_items')

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Mobile Nav Toggle  -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const navToggle = document.getElementById("nav-toggle");
            const dropdownMenu = document.getElementById("dropdownMenu");

            // عند الضغط على زر القائمة
            navToggle.addEventListener("click", function(e) {
                e.preventDefault();
                console.log("clicked"); // تحقق أن الزر يعمل
                dropdownMenu.classList.toggle("active");
            });

            // إغلاق القائمة عند الضغط خارجها
            document.addEventListener("click", function(e) {
                if (!navToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                    dropdownMenu.classList.remove("active");
                }
            });
        });
    </script>
    <!-- End Mobile Nav Toggle  -->

    <!-- select branch modal -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const selectBranchBtns = document.querySelectorAll(".select-branch-btn");
            const pickupMethodRadios = document.querySelectorAll('input[name="pickup-method"]');
            const carInfoSections = document.querySelectorAll(".car-info");
            const addCarBtns = document.querySelectorAll(".add-car-btn");
            const carForms = document.querySelectorAll(".car-form");
            const branchItems = document.querySelectorAll(".branch-item");

            let selectedBranch = "";
            let pickupMethod = "counter"; // الافتراضي: استلام من الشباك

            // اختيار طريقة الاستلام (الشباك أو السيارة)
            pickupMethodRadios.forEach(radio => {
                radio.addEventListener("change", function() {
                    const parentModal = this.closest(".modal-content");
                    const carInfoSection = parentModal.querySelector(".car-info");
                    pickupMethod = this.value;
                    carInfoSection.style.display = pickupMethod === "car" ? "block" : "none";
                });
            });

            // إظهار/إخفاء فورم إدخال بيانات السيارة
            addCarBtns.forEach(btn => {
                btn.addEventListener("click", function($e) {
                    $e.preventDefault();
                    const parentCarSection = this.closest(".car-info");
                    const carForm = parentCarSection.querySelector(".car-form");
                    carForm.style.display = carForm.style.display === "block" ? "none" : "block";
                });
            });
        });
    </script>
