<!DOCTYPE html>
<html>

<head>
    <title>Demo</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="Demo project">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <style type="text/css">
        .card-text p,
        .card-title {
            color: black;
        }

        a {
            color: #86A549;
        }

        .card-text-title {
            display: inline-block;
            min-width: 300px;
        }

        .card-title,
        .card-subtitle {
            font-size: 20px;
        }

        .card-text--top {
            margin-bottom: 40px;
        }
    </style>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="card">
                <div class="card-block">

                    {{-- test --}}
                    <div class="card-text--top">
                        A new registrant has signed up for Just West.
                    </div>
                    {{-- <h1 class="card-title">{{ $user->fullname() }}</h1> --}}
                    <h1 class="card-title">{{ $user->FirstName. " " . $user->LastName}}</h1>

                    <h2 class="card-subtitle mb-2 text-muted">
                        <div><a href="mailto:{{ $user->email }}">{{ $user->email }}</a></div>
                        <div><a href="tel:{{ $user->phone }}">{{ $user->phone }}</a></div>
                        <div>City: {{ $user->city }}</div>
                        <div>Postal Code: {{ $user->postal_code }}</div>
                    </h2>
                    <div class="card-text">
                        <p>
                            <span class="card-text-title">Are you working with a REALTOR&reg;? </span>
                            <span class="card-text-content">
                                @php
                                if($user->isCoRealtor['answer'] == 262760){
                                $answer1 = "Yes";
                                }else if($user->isCoRealtor['answer'] == 262761){
                                $answer1 = "No";
                                }else{
                                $answer1 = "N/A";
                                }
                                @endphp
                                {{ $answer1 }}
                            </span>
                        </p>
                        <p>
                            <span class="card-text-title">Are you a REALTOR&reg;? </span>
                            <span class="card-text-content">
                                @php
                                if($user->isRealtor['answer'] == 262762) {
                                $answer2 = "Yes";
                                } else if($user->isRealtor['answer'] == 262763){
                                $answer2 = "No";
                                } else {
                                $answer2 = "N/A";
                                }
                                @endphp
                                {{ $answer2 }}
                            </span>
                        </p>
                        <p>
                            <span class="card-text-title">How did you hear about Just West? </span>
                            <span class="card-text-content">
                                @php
                                if($user->options['answer'] == 262764){
                                $answer3 = "Google Search";
                                }else if($user->options['answer'] == 262765){
                                $answer3 = "BuzzBuzzHome";
                                }else if($user->options['answer'] == 262766){
                                $answer3 = "Social Media";
                                }else if($user->options['answer'] == 262767){
                                $answer3 = "WeChat";
                                }else if($user->options['answer'] == 262768){
                                $answer3 = "Walk/Drive by Signage";
                                }else if($user->options['answer'] == 262769){
                                $answer3 = "Realtor";
                                }else if($user->options['answer'] == 262770){
                                $answer3 = "Friends or Family";
                                }else if($user->options['answer'] == 262771){
                                $answer3 = "Other";
                                }else{$answer3 = "N/A";}
                                @endphp
                                {{ $answer3 }}
                            </span>
                        </p>
                        <p>
                            <span class="card-text-title">If 'other', please specify: </span>
                            <span class="card-text-content">
                                {{ $user->otherReason['answer'] }}
                            </span>
                        </p>
                        <p>
                            <span class="card-text-title">Desired Type of Homes: </span>
                            <span class="card-text-content">
                                @php

                                if($user->options2['answer'] == 262772){
                                $answer4 = "1 Bedroom";
                                }else if($user->options2['answer'] == 262773){
                                $answer4 = "2 Bedroom";
                                }else if($user->options2['answer'] == 262774){
                                $answer4 = "3 Bedroom";
                                }else{
                                $answer4 = "N/A";
                                }
                                @endphp
                                {{ $answer4 }}
                            </span>
                        </p>
                        <p>
                            <span class="card-text-title">Reasons to Purchase: </span>
                            <span class="card-text-content">
                                @php
                                if($user->options3['answer'] == 262775){
                                $answer5 = "A Permanent Home";}
                                else if($user->options3['answer'] == 262776){
                                $answer5 = "An Investment";
                                } else { $answer5 = "N/A";}
                                @endphp
                                {{ $answer5 }}
                            </span>
                        </p>
                    </div>
                    {{-- <a href="tel:{{ $user->phone }}" class="btn btn-primary">Call</a>
                    <a href="mailto:{{ $user->email }}" class="btn btn-danger">Send Email</a> --}}
                </div>
            </div>
        </div>
    </div>
</body>

</html>