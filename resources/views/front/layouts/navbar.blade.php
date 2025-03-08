@php
    $public_setting = \App\Models\admin\PublicSetting::first();
    $categories = \App\Models\admin\Category::where('status', 1)->get();
    $cartCount = \App\Models\front\Cart::getcartitems()->count();
    $carttotal = \App\Models\front\Cart::getcarttotal();
    $branches = \App\Models\admin\Branch::all();
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
                        <span class="label"> <i class="bi bi-basket3-fill"></i> استلام من الفرع </span>
                        <button class="select-branch-btn">تحديد الفرع</button>
                    </div>
                    <!-- نافذة اختيار الفرع -->
                    <div class="branch-modal modal">
                        <div class="modal-content">
                            <div class="modal-header modal-branch">
                                <h3>اختر الفرع</h3>
                            </div>
                            <ul class="branch-list">
                                @foreach ($branches as $branch)
                                    <li class="branch-item" data-branch="{{ $branch['name'] }}">{{ $branch['name'] }}
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
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
            <span class="label"> <i class="bi bi-basket3-fill"></i> استلام من الفرع </span>
            <button class="select-branch-btn">تحديد الفرع</button>
        </div>
        <!-- نافذة اختيار الفرع -->
        <div class="branch-modal modal">
            <div class="modal-content">
                <div class="modal-header modal-branch">
                    <h3>اختر الفرع</h3>
                </div>
                <ul class="branch-list">
                    @foreach ($branches as $branch)
                        <li class="branch-item" data-branch="{{ $branch['name'] }}">{{ $branch['name'] }}</li>
                    @endforeach
                </ul>
            </div>
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
                <li><a href="{{ route('user.logout') }}"><i class="bi bi-box-arrow-in-right"></i> تسجيل الخروج</a></li>
            @else
                <li><a class="checkout_button" href="{{ route('check.login.status') }}"><i
                            class="bi bi-box-arrow-in-right"></i> تسجيل الدخول</a></li>
            @endif
        </ul>
    </div>
    @include('front.partials.cart_items')

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

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
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const selectBranchBtns = document.querySelectorAll(".select-branch-btn");
            const branchModals = document.querySelectorAll(".branch-modal");
            const branchItems = document.querySelectorAll(".branch-item");

            // فتح النافذة عند الضغط على أي زر "تحديد الفرع"
            selectBranchBtns.forEach((btn, index) => {
                btn.addEventListener("click", function() {
                    branchModals[index].style.display = "block";
                });
            });

            // إغلاق النافذة عند اختيار فرع
            branchItems.forEach(item => {
                item.addEventListener("click", function() {
                    let selectedBranch = this.dataset.branch;

                    // تحديث جميع الأزرار بنفس اسم الفرع المختار
                    selectBranchBtns.forEach(btn => {
                        btn.innerHTML = `<i class="bi bi-bag-smile"></i> ${selectedBranch}`;
                    });

                    // إغلاق جميع النوافذ
                    branchModals.forEach(modal => {
                        modal.style.display = "none";
                    });

                    // إرسال الفرع إلى Laravel لحفظه في الجلسة
                    fetch("{{ route('setBranchSession') }}", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
                            },
                            body: JSON.stringify({
                                branch: selectedBranch
                            })
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log("Branch saved:", data);
                        });
                });
            });

            // عند تحميل الصفحة، اجلب الفرع المحفوظ في الجلسة
            fetch("{{ route('getBranchSession') }}")
                .then(response => response.json())
                .then(data => {
                    if (data.branch) {
                        selectBranchBtns.forEach(btn => {
                            btn.innerHTML = `<i class="bi bi-bag-smile"></i> ${data.branch}`;
                        });
                    }
                });
        });
    </script>



