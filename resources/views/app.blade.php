<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Just West</title>
    <link rel="shortcut icon" type="image/png" href="{{ asset('img/landing/favicon.png')}}" />
    {{-- <link rel="stylesheet" href="{{ asset('css/normalize.css')}}"> --}}
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{ asset('css/bootstrap-vue.min.css')}}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body>
    <div id="app">
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"> </script>

    <script src="{{asset('js/jquery.parallax-scroll.js')}}"></script>
    {{-- <script src="{{asset('js/smoothPageScroll.js')}}"></script> --}}
    
    <script src="https://maps.googleapis.com/maps/api/js?key={{env('GOOGLE_MAPS_API_KEY')}}" async defer>
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>