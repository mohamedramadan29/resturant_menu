@php
 $public_setting = \App\Models\admin\PublicSetting::first();
@endphp
<!DOCTYPE html>
<html lang="ar" dir="rtl"
<head>
    <!-- Meta -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Title -->
    <title> @yield('title') </title>

    <!-- Favicons -->
    <link rel="shortcut icon" href="{{ asset('assets/uploads/PublicSetting/' . $public_setting->website_logo) }}" />
    <link rel="apple-touch-icon" href="{{ asset('assets/uploads/PublicSetting/' . $public_setting->website_logo) }}" />
    <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="{{ asset('assets/uploads/PublicSetting/' . $public_setting->website_logo) }}"
    />
    <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="{{ asset('assets/uploads/PublicSetting/' . $public_setting->website_logo) }}"
    />
    <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="{{ asset('assets/uploads/PublicSetting/' . $public_setting->website_logo) }}"
    />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zain:wght@200;300;400;700;800;900&display=swap" rel="stylesheet">

    <!-- CSS Core -->
{{--    <link rel="stylesheet" href="{{asset('assets/front/css/core.css')}}" />--}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <!-- CSS Theme -->
    <link id="theme" rel="stylesheet" href="{{asset('assets/front/css/theme-beige.css')}}" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    @toastifyCss
    @yield('css')
</head>

<body>
