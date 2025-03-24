<!-- ========== App Menu Start ========== -->
@php

    $setting = \App\Models\admin\PublicSetting::first();

@endphp
<div class="main-nav">
    <!-- Sidebar Logo -->
    <div class="logo-box">
        <a href="{{ url('admin/dashboard') }}" class="logo-dark">
            <img src="{{ asset('assets/uploads/PublicSetting/' . $setting['website_logo']) }}" class="logo-sm"
                alt="logo sm">
            <img src="{{ asset('assets/uploads/PublicSetting/' . $setting['website_logo']) }}" class="logo-lg"
                alt="logo dark">
        </a>

        <a href="{{ url('admin/dashboard') }}" class="logo-light">
            <img src="{{ asset('assets/uploads/PublicSetting/' . $setting['website_logo']) }}" class="logo-sm"
                alt="logo sm">
            <img src="{{ asset('assets/uploads/PublicSetting/' . $setting['website_logo']) }}" class="logo-lg"
                alt="logo light">
        </a>
    </div>

    <!-- Menu Toggle Button (sm-hover) -->
    <button type="button" class="button-sm-hover" aria-label="Show Full Sidebar">
        <iconify-icon icon="solar:double-alt-arrow-right-bold-duotone" class="button-sm-hover-icon"></iconify-icon>
    </button>

    <div class="scrollbar" data-simplebar>
        <ul class="navbar-nav" id="navbar-nav">

            <li class="menu-title"> العام</li>

            <li class="nav-item">
                <a class="nav-link" href="{{ url('admin/dashboard') }}">
                    <span class="nav-icon">
                        <iconify-icon icon="solar:widget-5-bold-duotone"></iconify-icon>
                    </span>
                    <span class="nav-text"> الرئيسية </span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link menu-arrow" href="#sidebarOrders" data-bs-toggle="collapse" role="button"
                    aria-expanded="false" aria-controls="sidebarOrders">
                    <span class="nav-icon">
                        <iconify-icon icon="solar:bag-smile-bold-duotone"></iconify-icon>
                    </span>
                    <span class="nav-text"> الطلبات </span>
                </a>
                <div class="collapse" id="sidebarOrders">
                    <ul class="nav sub-navbar-nav">

                        <li class="sub-nav-item">
                            <a class="sub-nav-link" href="{{ url('admin/orders') }}"> جميع الطلبات </a>
                        </li>

                    </ul>
                </div>
            </li>

            @if (Auth::guard('admin')->user()->account_type == 'admin')
                <li class="nav-item">
                    <a class="nav-link menu-arrow" href="#sidebarProducts" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarProducts">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:t-shirt-bold-duotone"></iconify-icon>
                        </span>
                        <span class="nav-text"> المنتجات </span>
                    </a>
                    <div class="collapse" id="sidebarProducts">
                        <ul class="nav sub-navbar-nav">
                            <li class="sub-nav-item">
                                <a class="sub-nav-link" href="{{ url('admin/products') }}"> جميع المنتجات </a>
                            </li>
                            <li class="sub-nav-item">
                                <a class="sub-nav-link" href="{{ url('admin/product/add') }}"> اضف منتج جديد </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link menu-arrow" href="#sidebarCategory" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarCategory">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:clipboard-list-bold-duotone"></iconify-icon>
                        </span>
                        <span class="nav-text"> التصنيفات </span>
                    </a>
                    <div class="collapse" id="sidebarCategory">
                        <ul class="nav sub-navbar-nav">
                            <li class="sub-nav-item">
                                <a class="sub-nav-link" href="{{ url('admin/main-categories') }}"> مشاهدة التصنيفات
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>




                <li class="nav-item">
                    <a class="nav-link menu-arrow" href="#sidebarBranches" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarBranches">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:bag-smile-bold-duotone"></iconify-icon>
                        </span>
                        <span class="nav-text"> الفروع </span>
                    </a>
                    <div class="collapse" id="sidebarBranches">
                        <ul class="nav sub-navbar-nav">

                            <li class="sub-nav-item">
                                <a class="sub-nav-link" href="{{ url('admin/branches') }}"> جميع الفروع </a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li class="menu-title mt-2"> اعدادات الموقع</li>

                <li class="nav-item">
                    <a class="nav-link" href="{{ url('admin/public-setting/update') }}">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:settings-bold-duotone"></iconify-icon>
                        </span>
                        <span class="nav-text"> الاعدادات العامة </span>
                    </a>
                </li>


                <li class="menu-title mt-2"> ادارة الكاشير </li>

                <li class="nav-item">
                    <a class="nav-link menu-arrow" href="#sidebarcasher" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarcasher">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:chat-square-like-bold-duotone"></iconify-icon>
                        </span>
                        <span class="nav-text"> ادارة الكاشير </span>
                    </a>
                    <div class="collapse" id="sidebarcasher">
                        <ul class="nav sub-navbar-nav">

                            <li class="sub-nav-item">
                                <a class="sub-nav-link" href="{{ url('admin/cashers') }}"> مشاهدة الكاشير
                                </a>
                            </li>
                            <li class="sub-nav-item">
                                <a class="sub-nav-link" href="{{ url('admin/casher/store') }}"> اضافة كاشير </a>
                            </li>
                        </ul>
                    </div>
                </li>


                <li class="menu-title mt-2"> المستخدمين</li>

                <li class="nav-item">
                    <a class="nav-link menu-arrow" href="#sidebaradminprofile" data-bs-toggle="collapse"
                        role="button" aria-expanded="false" aria-controls="sidebarCustomers">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:chat-square-like-bold-duotone"></iconify-icon>
                        </span>
                        <span class="nav-text"> حسابي </span>
                    </a>
                    <div class="collapse" id="sidebaradminprofile">
                        <ul class="nav sub-navbar-nav">

                            <li class="sub-nav-item">
                                <a class="sub-nav-link" href="{{ url('admin/update_admin_details') }}"> تعديل
                                    البيانات
                                </a>
                            </li>
                            <li class="sub-nav-item">
                                <a class="sub-nav-link" href="{{ url('admin/update_admin_password') }}"> تعديل كلمة
                                    المرور </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link menu-arrow" href="#sidebarCustomers" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarCustomers">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon>
                        </span>
                        <span class="nav-text"> العملاء </span>
                    </a>
                    <div class="collapse" id="sidebarCustomers">
                        <ul class="nav sub-navbar-nav">
                            <li class="sub-nav-item">
                                <a class="sub-nav-link" href="{{ url('admin/users') }}"> جميع العملاء </a>
                            </li>
                        </ul>
                    </div>
                </li>
            @endif
        </ul>
    </div>
</div>
<!-- ========== App Menu End ========== -->
