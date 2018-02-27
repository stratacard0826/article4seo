@extends('layouts.app')
@section('content')

   @section('content')

   {{-- {!! Form::open(['action' => 'OrdersController@store', 'method' => 'POST']) !!} --}}

@php
//$essay = new Essay;
@endphp

{!! Form::model($essay, ['action' => 'OrdersController@store', 'id' => 'formOrder', 'class' => 'formOrder'], $essay->id) !!}


   <div class="form-group">
      {{Form::label('title', 'Title')}}
      {{Form::text('title', '', ['class' => 'form-control', 'placeholder' => 'my input' ])}}
   </div>
   <div class="form-group">
      {{Form::label('details', 'Details')}}
      {{Form::textarea('details', '', ['class' => 'form-control', 'placeholder' => 'my input' ])}}
   </div>
   {{Form::Submit('Submit form', ['class' => 'btn btn-primary'])}}

   {{ Form::token() }}

   {!! Form::close() !!}
@endsection
