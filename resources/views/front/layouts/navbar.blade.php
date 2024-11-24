@php

    $public_setting = \App\Models\admin\PublicSetting::first();
    $categories = \App\Models\admin\Category::where('status',1)->get();
    $cartCount = \App\Models\front\Cart::getcartitems()->count();
    $carttotal = \App\Models\front\Cart::getcarttotal();
@endphp

    <!-- Body Wrapper -->
<div id="body-wrapper" class="animsition">
    <!-- Header -->
    <header id="header" class="light">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <!-- Logo -->
                    <div class="module module-logo dark">
                        <a href="{{url('/')}}">
                            <img src="{{asset('assets/uploads/PublicSetting/' . $public_setting->website_logo)}}" alt=""
                                 width="88"/>
                        </a>
                    </div>
                </div>
                <div class="col-md-7">
                    <!-- Navigation -->
                    <nav class="module module-navigation right mr-4">
                        <ul id="nav-main" class="nav nav-main">
                            <li><a href="{{url('/')}}">الرئيسية </a></li>
                            <li class="has-dropdown">
                                <a href="#"> الاقسام <i class="bi bi-arrow-down-short"></i> </a>
                                <div class="dropdown-container">
                                    <ul>
                                        @foreach($categories as $category)
                                            <li><a href="#{{$category['slug']}}">{{$category['name']}}</a></li>
                                        @endforeach
                                    </ul>
                                </div>
                            </li>
                            <li><a href="{{url('account')}}"> حسابي </a></li>
                        </ul>
                    </nav>

                </div>
                <div class="col-md-2">
                    <a href="#"
                       class="module module-cart right"
                       data-toggle="panel-cart">
                <span class="cart-icon">
                  <i class="bi bi-bag-heart-fill"></i>
                  <span class="notification1" style="display: block !important;">{{$cartCount}}</span>
                </span>
                        <span class="cart-value">ريال <span>{{ number_format($carttotal,2)}}</span></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    <!-- Header / End -->

    <!-- Header -->
    <header id="header-mobile" class="light">
        <div class="module module-nav-toggle">
            <a href="#" id="nav-toggle" data-toggle="panel-mobile"
            ><span></span><span></span><span></span><span></span
                ></a>
        </div>

        <div class="module module-logo">
            <a href='{{url('/')}}'>
                <img src="{{asset('assets/uploads/PublicSetting/' . $public_setting->website_logo)}}" alt=""/>
            </a>
        </div>
        <a href="#" class="module module-cart cart-icon" data-toggle="panel-cart">
            <i class="bi bi-bag-heart-fill"></i>
            <span class="notification1">{{$cartCount}}</span>
        </a>
    </header>
    <!-- Header / End -->

    <!-- Panel Mobile -->
    <nav id="panel-mobile">
        <div class="module module-logo bg-dark dark">
            <a href="#">
                <img src="{{asset('assets/uploads/PublicSetting/' . $public_setting->website_logo)}}" alt=""
                     width="88"/>
            </a>
            <button class="close" data-toggle="panel-mobile">
                <i class="bi bi-x-square"></i>
            </button>
        </div>
        <nav class="module module-navigation"></nav>
        <div class="module module-social">
            <h6 class="text-sm mb-3"> تابعنا !</h6>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-facebook"
            ><i class="bi bi-snapchat"></i></a>

            <a href="#" class="icon icon-social icon-circle icon-sm icon-twitter"
            ><i class="bi bi-instagram"></i> </a>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-youtube"
            ><i class="bi bi-tiktok"></i></a>

        </div>
    </nav>

