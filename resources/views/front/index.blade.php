@extends('front.layouts.master')
@section('title')
    الرئيسية
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
        <div class="hero_section page-title" style="background-image: url('{{ asset('assets/front/uploads/slogan2.png') }}')">
            <div class="container">
                <div class="row">

                </div>
            </div>
        </div>

        <!-- Page Content -->
        <!-- Page Content -->
        <div class="page-content">
            <div class="container">
                <!-- Tabs for categories -->
                <div class="categories-tabs mb-4">
                    <ul class="nav nav-tabs overflow-auto flex-nowrap" id="categoryTabs" role="tablist"
                        style="padding-right: 0">
                        @foreach ($categories as $index => $category)
                            <li class="nav-item" role="presentation">
                                <button class="nav-link @if ($index == 0) active @endif"
                                    id="tab-{{ $category['slug'] }}" data-bs-toggle="tab"
                                    data-bs-target="#content-{{ $category['slug'] }}" type="button" role="tab">
                                    {{ $category['name'] }}
                                </button>
                            </li>
                        @endforeach
                    </ul>
                </div>

                <!-- Tab Content for products -->
                <div class="tab-content" id="categoryTabsContent">
                    @foreach ($categories as $index => $category)
                        <div class="tab-pane fade @if ($index == 0) show active @endif"
                            id="content-{{ $category['slug'] }}" role="tabpanel">
                            <div class="row">
                                @foreach ($category['products'] as $product)
                                    <div class="col-lg-3 col-md-4 col-6 mb-4">
                                        <div class="menu-item menu-grid-item">
                                            @if ($product['is_featured'] == 1)
                                                <span class="badge bg-success featured-badge">مميز</span>
                                            @endif
                                            <img loading="lazy" class="img-fluid mb-2"
                                                src="{{ asset('assets/uploads/product_images/' . $product['image']) }}"
                                                alt="{{ $product['name'] }}" />
                                            <h6 class="text-truncate">{{ $product['name'] }}</h6>
                                            <div class="d-flex justify-content-between align-items-center m-2">
                                                <span class="">
                                                    @if ($product['discount'] > 0 || $product['discount_percentage'] > 0)
                                                        <span class="text-muted">
                                                            <s>
                                                                <strong>{{ number_format($product['price'], 2) }} </strong>
                                                            </s>
                                                        </span>
                                                        @if ($product['discount'] > 0)
                                                        <strong>{{ number_format($product['price'] - $product['discount'], 2) }}
                                                        </strong>
                                                        @else
                                                        <strong>{{ number_format($product['price'] - ($product['price'] * $product['discount_percentage'] / 100), 2) }}
                                                        </strong>
                                                        @endif
                                                        <img loading="lazy" src="{{ asset('assets/uploads/riyal.svg') }}"
                                                            width="15">
                                                    @else
                                                        <strong>{{ number_format($product['price'], 2) }} </strong>
                                                        <img loading="lazy" src="{{ asset('assets/uploads/riyal.svg') }}"
                                                            width="15">
                                                    @endif
                                                </span>
                                                <button class="btn btn-sm btn-secondary" data-bs-toggle="modal"
                                                    data-bs-target="#product-modal_{{ $product['id'] }}">
                                                    تفاصيل
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    @include('front.partials.product-modal', ['product' => $product])
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>

    </div>

    <!-- Content / End -->

    </div>
    <style>
        /* تحسين مظهر التابات */
        .categories-tabs .nav-tabs {
            border-bottom: none;
        }

        .categories-tabs .nav-link {
            white-space: nowrap;
            margin-right: 8px;
            background: #f8f9fa;
            border: none;
            border-radius: 30px;
            padding: 8px 20px;
            font-weight: bold;
            color: #333;
            transition: 0.3s;
        }

        .categories-tabs .nav-link.active {
            background-color: #fbd51e;
            color: #000;
            font-weight: bold
        }

        /* Scroll لطيف للتابات */
        .categories-tabs .nav-tabs {
            -ms-overflow-style: none;
            /* Internet Explorer 10+ */
            scrollbar-width: none;
            /* Firefox */
        }

        .categories-tabs .nav-tabs::-webkit-scrollbar {
            display: none;
            /* Chrome/Safari/Webkit */
        }
    </style>

@endsection
@section('js')
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // زيادة العدد
            document.querySelectorAll(".increase-quantity").forEach(button => {
                button.addEventListener("click", function($e) {
                    $e.preventDefault();
                    const productId = this.dataset.productId;
                    const productPrice = parseFloat(this.dataset.productPrice);
                    const quantityInput = document.getElementById(`quantity-${productId}`);
                    const hiddenQuantityInput = document.getElementById(
                        `hidden-quantity-${productId}`);
                    const totalPriceElement = document.getElementById(`total-price-${productId}`);

                    // زيادة العدد
                    let quantity = parseInt(quantityInput.value);
                    quantity++;
                    quantityInput.value = quantity;
                    hiddenQuantityInput.value = quantity; // تحديث الحقل المخفي

                    // تحديث المجموع
                    const totalPrice = (quantity * productPrice).toFixed(2);
                    totalPriceElement.textContent = totalPrice;
                });
            });

            // تقليل العدد
            document.querySelectorAll(".decrease-quantity").forEach(button => {
                button.addEventListener("click", function($e) {
                    $e.preventDefault();
                    const productId = this.dataset.productId;
                    const productPrice = parseFloat(this.dataset.productPrice);
                    const quantityInput = document.getElementById(`quantity-${productId}`);
                    const hiddenQuantityInput = document.getElementById(
                        `hidden-quantity-${productId}`);
                    const totalPriceElement = document.getElementById(`total-price-${productId}`);

                    // تقليل العدد (إذا كان أكبر من 1)
                    let quantity = parseInt(quantityInput.value);
                    if (quantity > 1) {
                        quantity--;
                        quantityInput.value = quantity;
                        hiddenQuantityInput.value = quantity; // تحديث الحقل المخفي

                        // تحديث المجموع
                        const totalPrice = (quantity * productPrice).toFixed(2);
                        totalPriceElement.textContent = totalPrice;
                    }
                });
            });

            // تحديث الحقل المخفي عند إدخال الكمية يدويًا
            document.querySelectorAll("input[type='number']").forEach(input => {
                input.addEventListener("input", function() {
                    const productId = this.dataset.productId;
                    const productPrice = parseFloat(this.dataset.productPrice);
                    const quantity = parseInt(this.value);
                    const hiddenQuantityInput = document.getElementById(
                        `hidden-quantity-${productId}`);
                    const totalPriceElement = document.getElementById(`total-price-${productId}`);

                    if (quantity >= 1) {
                        hiddenQuantityInput.value = quantity; // تحديث الحقل المخفي

                        // تحديث المجموع
                        const totalPrice = (quantity * productPrice).toFixed(2);
                        totalPriceElement.textContent = totalPrice;
                    }
                });
            });
        });
    </script>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const categoriesMenu = document.getElementById("categories-menu");
            const categoryLinks = document.querySelectorAll(".all_categories li a");
            const sections = document.querySelectorAll(".menu-category");

            const menuOffset = categoriesMenu.offsetTop;

            function handleScroll() {
                if (window.scrollY >= menuOffset) {
                    categoriesMenu.classList.add("fixed-menu");
                } else {
                    categoriesMenu.classList.remove("fixed-menu");
                }

                let currentSection = "";
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop - 150; // تعديل ليعمل مع القائمة الثابتة
                    if (window.scrollY >= sectionTop) {
                        currentSection = section.getAttribute("id");
                    }
                });

                categoryLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").slice(1) === currentSection) {
                        link.classList.add("active");
                    }
                });
            }

            window.addEventListener("scroll", handleScroll);

            // تنقل سلس عند الضغط على أي عنصر من القائمة
            categoryLinks.forEach((link) => {
                link.addEventListener("click", function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute("href").slice(1);
                    document.getElementById(targetId).scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                });
            });
        });
    </script>
    <script></script>
@endsection
