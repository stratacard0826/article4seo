@extends('layouts.app')
@section('content')



<div class="b_about">
  <div class="container">

    <div class="_h3">about</div>
    <div class="_h4">{!!$data->title!!}</div>

    <div class="_about">
        <div class="_paragraph">
            {!!$data->details!!}
        </div>
     </div>

     <a href="{{route('editBlogPost', $slug)}}" class="btn">test</a>
  </div>
</div>










</div>

@endsection
