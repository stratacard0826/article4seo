@extends('layouts.app')
@section('content')


@if(count($essays)>0)
   @foreach($essays as $essay)
      <h1><a href="/customessays/{{$essay->category}}/{{$essay->id}}.htm">{{$essay->title}}</a></h1>
      <p>{{ $essay->details }}</p>

   @endforeach
@endif


@endsection
