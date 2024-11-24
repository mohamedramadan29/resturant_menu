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
        <div class="page-content">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-md-3">
                        <!-- Menu Navigation -->
                        <nav id="menu-navigation" class="stick-to-content" data-local-scroll>
                            <ul class="nav nav-menu bg-dark dark">
                                @foreach ($categories as $category)
                                    <li><a href="#{{ $category['slug'] }}">{{ $category['name'] }}</a></li>
                                @endforeach
                            </ul>
                        </nav>
                    </div>
                    <div class="col-md-9">
                        @foreach ($categories as $category)
                            <!-- Category Details -->
                            <div id="{{ $category['slug'] }}" class="menu-category">
                                <div class="menu-category-title">
                                    <div class="bg-image">
                                        <img src="{{ asset('assets/uploads/category_images/' . $category['image']) }}"
                                            alt="{{ $category['name'] }}" />
                                    </div>
                                    <h2 class="title">{{ $category['name'] }}</h2>
                                </div>
                                <div class="menu-category-content padded">
                                    <div class="row gutters-sm">
                                        @foreach ($category['products'] as $product)
                                            <div class="col-lg-4 col-6">
                                                <!-- Menu Item -->
                                                <div class="menu-item menu-grid-item">
                                                    <img class="mb-4"
                                                        src="{{ asset('assets/uploads/product_images/' . $product['image']) }}"
                                                        alt="{{ $product['name'] }}" />
                                                    <h6 class="mb-0">{{ $product['name'] }}</h6>
                                                    <div class="row align-items-center mt-4">
                                                        <div class="col-sm-6">
                                                            <span class="text-md mr-4">
                                                                <span class="text-muted"></span> SAR <span
                                                                    data-product-base-price>
                                                                    {{ number_format($product['price'], 2) }} </span>
                                                            </span>
                                                        </div>
                                                        <div class="col-sm-6 text-sm-right mt-2 mt-sm-0">
                                                            <button class="btn btn-secondary btn-sm add_to_cart"
                                                                data-action="open-cart-modal" data-toggle="modal"
                                                                data-target="#product-modal_{{ $product['id'] }}"
                                                                data-id="1">
                                                                <span> تفاصيل المنتج </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!----------------------- Product Model -------------->
                                            <!-- Modal / Product -->
                                            <div class="modal fade product-modal" id="product-modal_{{ $product['id'] }}"
                                                tabindex="-1" role="dialog">
                                                {{--                                            <div class="modal fade product-modal" id="product-modal" role="dialog"> --}}
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header modal-header-lg dark bg-dark">
                                                            <div class="bg-image">
                                                                <img src="{{ asset('assets/uploads/product_images/' . $product['image']) }}"
                                                                    alt="{{ $product['name'] }}" />
                                                            </div>
                                                            <h4 class="modal-title">{{ $product['name'] }}</h4>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <i class="bi bi-x"></i>
                                                            </button>
                                                        </div>
                                                        <div class="modal-product-details">
                                                            <div class="row align-items-center">
                                                                <div class="col-12">
                                                                    <h6 class="mb-1 product-modal-name">
                                                                        {{ $product['name'] }}</h6>
                                                                    <span
                                                                        class="text-muted product-modal-ingredients">{{ $product['description'] }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="quantity_section">
                                                            <div>
                                                                <div class="quantity">
                                                                    <div class="quantity-control d-flex align-items-center">
                                                                        <!-- زر تقليل العدد -->
                                                                        <button class="decrease-quantity btn"
                                                                            data-product-id="{{ $product['id'] }}"
                                                                            data-product-price="{{ $product['price'] }}">
                                                                            -
                                                                        </button>
                                                                        <!-- إدخال العدد -->
                                                                        <input id="quantity-{{ $product['id'] }}"
                                                                            type="number" value="1" name="quantity"
                                                                            class="mx-2 text-center" style="width: 60px;"
                                                                            min="1"
                                                                            data-product-id="{{ $product['id'] }}"
                                                                            data-product-price="{{ $product['price'] }}">
                                                                        <!-- زر زيادة العدد -->
                                                                        <button class="increase-quantity btn"
                                                                            data-product-id="{{ $product['id'] }}"
                                                                            data-product-price="{{ $product['price'] }}">
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="price_section">
                                                                <span id="total-price-{{ $product['id'] }}"
                                                                    class="product-modal-price">{{ number_format($product['price'], 2) }}
                                                                </span>
                                                                SAR
                                                            </div>

                                                        </div>
                                                        <form id="addToCart_{{ $product['id'] }}" class=""
                                                            method="post">
                                                            @csrf
                                                            <input type="hidden" name="product_id"
                                                                value="{{ $product['id'] }}">
                                                            <input type="hidden" id="hidden-quantity-{{ $product['id'] }}"
                                                                name="number" value="1">
                                                            <input type="hidden" name="price"
                                                                value="{{ $product['price'] }}">
                                                            <div class="row align-items-center">
                                                                <button type="button"
                                                                    id="addtocartbutton_{{ $product['id'] }}"
                                                                    class="btn btn-secondary btn-block btn-lg">
                                                                    اضف الي السلة
                                                                </button>
                                                            </div>
                                                        </form>
                                                        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                                                        <script>
                                                            $(document).ready(function() {
                                                                $("#addtocartbutton_{{ $product['id'] }}").on('click', function(e) {
                                                                    e.preventDefault();
                                                                    console.log('clicked');

                                                                    $.ajax({
                                                                        url: '{{ route('cart.add') }}',
                                                                        method: 'POST',
                                                                        headers: {
                                                                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                                                        },
                                                                        data: $("#addToCart_{{ $product['id'] }}").serialize(),
                                                                        success: function(response) {
                                                                            // تحقق من وجود الحقول المطلوبة في response
                                                                            if (response.message) {
                                                                                Toastify({
                                                                                    text: response.message,
                                                                                    duration: 3000,
                                                                                    gravity: "top",
                                                                                    position: "right",
                                                                                    backgroundColor: "#4CAF50",
                                                                                }).showToast();
                                                                            }
                                                                            // تحديث عداد المنتجات في السلة
                                                                            if (response.cartCount) {
                                                                                $('.cart-icon .notification1').text(response.cartCount);
                                                                            }

                                                                            if (response.cartCount) {
                                                                                updateCartCount(response.cartCount); // تحديث العداد
                                                                            }
                                                                            updateCartModal();
                                                                            $('#panel-cart').addClass('show');
                                                                            $('.product-modal').hide();
                                                                              // إزالة overlay الخاص بالمودال
                                                                              $('.modal-backdrop').remove();
                                                                        },
                                                                        error: function(xhr, status, error) {
                                                                            Toastify({
                                                                                text: "حدث خطأ أثناء إضافة المنتج للسلة",
                                                                                duration: 3000,
                                                                                gravity: "top",
                                                                                position: "right",
                                                                                backgroundColor: "#FF5733",
                                                                            }).showToast();
                                                                        }
                                                                    });
                                                                });

                                                                function updateCartCount(cartCount) {
                                                                    $('.cart-icon .notification').text(cartCount);
                                                                }

                                                                function updateCartModal() {
                                                                    $.ajax({
                                                                        url: '/cart/items',
                                                                        method: 'GET',
                                                                        success: function(response) {
                                                                            if (response.html) {
                                                                                $('#panel-cart .cart-details').html(response.html);
                                                                            }

                                                                            if (response.cartCount) {
                                                                                updateCartCount(response.cartCount);
                                                                            }
                                                                        },
                                                                        error: function(xhr, status, error) {
                                                                            console.error('خطأ في تحديث السلة:', error);
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        </script>


                                                    </div>
                                                </div>
                                            </div>
                                            <!--------------------- End Product Model ---------------->
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Content / End -->

    </div>
@endsection
@section('js')
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // زيادة العدد
            document.querySelectorAll(".increase-quantity").forEach(button => {
                button.addEventListener("click", function() {
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
                button.addEventListener("click", function() {
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
@endsection
