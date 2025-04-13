<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <!-- Title Meta -->
    <meta charset="utf-8" />
    <title> @yield('title') </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A fully responsive premium admin dashboard template" />
    <meta name="author" content="Techzaa" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ asset('assets/admin/images/favicon.ico') }}">

    <!-- Vendor css (Require in all Page) -->
    <link href="{{ asset('assets/admin/css/vendor.min.css') }}" rel="stylesheet" type="text/css" />

    <!-- Icons css (Require in all Page) -->
    <link href="{{ asset('assets/admin/css/icons.min.css') }}" rel="stylesheet" type="text/css" />

    <!-- App css (Require in all Page) -->
    <link href="{{ asset('assets/admin/css/app-rtl.min.css') }}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <!-- Theme Config js (Require in all Page) -->
    <script src="{{ asset('assets/admin/js/config.js') }}"></script>
    {{-- @vite(['resources/js/app.js']) --}}
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

    @if (Auth::guard('admin')->check())
        <script>
            admin_id = "{{ \Illuminate\Support\Facades\Auth::guard('admin')->user()->id }}";
            //  alert(window.admin_id);
        </script>
        <script src="{{ asset('build/assets/app-B19uNHDu.js') }}"></script>
    @else
        @php
            return redirect()->route('admin_login');
        @endphp
    @endif
    @toastifyCss
    @yield('css')
</head>

<body>

    @php

        $setting = \App\Models\admin\PublicSetting::first();

    @endphp


    <!-- START Wrapper -->
    <div class="wrapper">

        <!-- ========== Topbar Start ========== -->
        <header class="topbar">
            <div class="container-fluid">
                <div class="navbar-header">
                    <div class="d-flex align-items-center">
                        <!-- Menu Toggle Button -->
                        <div class="topbar-item">
                            <button type="button" class="button-toggle-menu me-2">
                                <iconify-icon icon="solar:hamburger-menu-broken"
                                    class="fs-24 align-middle"></iconify-icon>
                            </button>
                        </div>

                        <!-- Menu Toggle Button -->
                        <div class="topbar-item">
                            <h4 class="fw-bold topbar-button pe-none text-uppercase mb-0"> @yield('title') </h4>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-1">
                        <audio id="notificationSound">
                            <source src="{{ asset('sounds/notification.mp3') }}" type="audio/mp3">
                        </audio>

                        @php
                            $admin = \App\Models\admin\Admin::find(Auth::guard('admin')->user()->id);
                            //$admin_notifications = $admin->notifications;
                            $unreadNotificationsCount = $admin->unreadNotifications->count();
                            $unreadNotifications = $admin->unreadNotifications;
                        @endphp

                        <!-- Start Notification -->
                        <div class="dropdown topbar-item">
                            <button type="button" class="topbar-button position-relative"
                                id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <iconify-icon icon="solar:bell-bing-bold-duotone"
                                    class="fs-24 align-middle"></iconify-icon>
                                <span id="unread"
                                    class="position-absolute topbar-badge fs-10 translate-middle badge bg-danger rounded-pill">{{ $unreadNotificationsCount }}</span>
                            </button>
                            <div class="dropdown-menu py-0 dropdown-lg dropdown-menu-end"
                                aria-labelledby="page-header-notifications-dropdown" style="">
                                <div class="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <h6 class="m-0 fs-16 fw-semibold"> الاشعارات </h6>
                                        </div>

                                    </div>
                                </div>
                                <div data-simplebar="init" style="min-height: 280px;">
                                    <div class="simplebar-wrapper" style="margin: 0px; overflow: scroll;">
                                        <div class="simplebar-height-auto-observer-wrapper">
                                            <div class="simplebar-height-auto-observer"></div>
                                        </div>
                                        <div class="simplebar-mask">
                                            <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                                <div class="simplebar-content-wrapper" tabindex="0" role="region"
                                                    aria-label="scrollable content"
                                                    style="height: auto; overflow: scroll;">
                                                    <div class="simplebar-content notification-dropdown"
                                                        style="padding: 0px;">
                                                        @if ($unreadNotifications->count() > 0)
                                                            @foreach ($unreadNotifications as $notification)
                                                                <!-- Item -->
                                                                <a href="{{ url('admin/order/update/' . $notification['data']['order_id']) }}"
                                                                    class="dropdown-item py-3 border-bottom text-wrap">
                                                                    <div class="d-flex">
                                                                        <div class="flex-shrink-0">
                                                                            <i class="fa fa-bell text-primary"></i>
                                                                        </div>
                                                                        <div class="flex-grow-1">
                                                                            <p class="mb-0"><span class="fw-medium">
                                                                                    طلب
                                                                                    جديد </span>
                                                                                <br>
                                                                                <span>
                                                                                    {{ $notification['data']['title'] }}
                                                                                    رقم
                                                                                    الطلب :
                                                                                    {{ $notification['data']['order_id'] }}
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            @endforeach
                                                        @else
                                                            <div class="text-center py-3">
                                                                <p class="mb-0">لا يوجد اشعارات</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
                                    </div>
                                    <div class="simplebar-track simplebar-horizontal">
                                        <div class="simplebar-scrollbar" style="width: 0px;"></div>
                                    </div>
                                    <div class="simplebar-track simplebar-vertical">
                                        <div class="simplebar-scrollbar"
                                            style="height: 0px; transform: translate3d(0px, 0px, 0px);">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Theme Color (Light/Dark) -->
                        <div class="topbar-item">
                            <button type="button" class="topbar-button" id="light-dark-mode">
                                <iconify-icon icon="solar:moon-bold-duotone" class="fs-24 align-middle"></iconify-icon>
                            </button>
                        </div>



                        <!-- User -->
                        <div class="dropdown topbar-item">
                            <a type="button" class="topbar-button" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="d-flex align-items-center">
                                    <img class="rounded-circle" width="32"
                                        src="{{ asset('assets/uploads/PublicSetting/' . $setting['website_logo']) }}"
                                        alt="avatar-3">
                                </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <!-- item-->
                                <h6 class="dropdown-header">
                                    مرحبا {{ \Illuminate\Support\Facades\Auth::guard('admin')->user()->name }} ! </h6>
                                <a class="dropdown-item" href="{{ url('admin/update_admin_details') }}">
                                    <i class="bx bx-user-circle text-muted fs-18 align-middle me-1"></i><span
                                        class="align-middle"> حسابي </span>
                                </a>
                                <a class="dropdown-item" href="{{ url('admin/update_admin_password') }}">
                                    <i class="bx bx-message-dots text-muted fs-18 align-middle me-1"></i><span
                                        class="align-middle"> تغير كلمة المرور </span>
                                </a>
                                <div class="dropdown-divider my-1"></div>
                                <a class="dropdown-item text-danger" href="{{ route('logout') }}">
                                    <i class="bx bx-log-out fs-18 align-middle me-1"></i><span class="align-middle">
                                        تسجيل خروج </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
