<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <base href="">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="{{asset('img/favicon@3x.png')}}" rel="icon" sizes="48x48" />
    <link href="{{asset('img/favicon@2x.png')}}" rel="icon" sizes="32x32" />
    <link href="{{asset('img/favicon.png')}}" rel="icon"  sizes="16x16" />


    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
</head>

<body>

<div class="shadow"></div>
<div id="app-block">
    <v-app id="inspire">
        <v-content>
            @php
            if(Auth::user()){
                $fullname = Auth::user()->firstname;
            }
            @endphp

            @guest
                <headermenu mode="guest"></headermenu>
            @endguest

            @auth
                <headermenu mode="client" fullname="{{$fullname}}"></headermenu>
            @endauth

            <headerlogo></headerlogo>

            {{-- <siteheader></siteheader> --}}
            {{-- <calc></calc> --}}
            {{-- <slider></slider> --}}

            @include('inc.messages')

            <main>
                @yield('content')
            </main>

            {{-- footer --}}
            @include('inc.footer')
        </v-content>
    </v-app>
</div>

<script src="{{ mix('/js/app.js') }}"></script>

{{-- <script src="{{ asset('js/semantic.min.js') }}"></script> --}}
<script src="/vendor/unisharp/laravel-ckeditor/ckeditor.js"></script>
<script>
if(document.getElementById('article-ckeditor')){
    CKEDITOR.replace( 'article-ckeditor' );
}

</script>

</body>
</html>
