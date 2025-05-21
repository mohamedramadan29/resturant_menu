@extends('front.layouts.master')
@section('title')
    شكرا لك
@endsection

@section('content')
    <!-- Content -->
    <div id="content">

        <!-- Section -->
        <section class="section bg-light">
            <div class="container">
                <div class="row">
                    @php
                        $orderdata = \App\Models\front\Order::where(
                            'id',
                            \Illuminate\Support\Facades\Session::get('order_id'),
                        )->first();
                    @endphp
                    <div class="col-12">
                        <span class="icon icon-xl icon-success"><i class="bi bi-check2-square"></i></span>
                        <h1 class="mb-2" style="font-weight: 300"> تم اضافة طلبك بنجاح !! شكرا لك </h1>
                        <h2 style="font-size: 20px;font-weight: bold;border: 1px dashed #fad521;padding: 10px;border-radius: 5px; display: inline-block;"
                            class="mb-2" style="font-weight: 300"> رقم الطلب :: <span> {{ Session::get('order_id') }}
                            </span> </h2>
                        <h4 class=" mb-5"> سوف يتم اتمام الطلب خلال 10 دقيقة </h4>
                        <div style="display: flex;justify-content: center;gap: 10px;">
                            <div>
                                <a href="{{ url('/') }}" class="btn btn-outline-secondary"><span> طلب جديد </span></a>
                            </div>
                            <div>
                                <a href="{{ url('/account') }}" class="btn btn-outline-secondary"><span> جميع الطلبات  </span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
    <!-- Content / End -->
@endsection
