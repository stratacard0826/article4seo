@extends ('layouts.app')



@section('content')

{!! Form::open(['action' => 'OrdersController@store', 'method' => 'POST']) !!}


<div class="form-group">
   {{Form::label('firstname', 'First Name')}}
   {{Form::text('title', '', ['class' => 'form-control', 'placeholder' => 'my input' ])}}
</div
<div class="form-group">
   {{Form::label('title', 'Title')}}
   {{Form::text('title', '', ['class' => 'form-control', 'placeholder' => 'my input' ])}}
</div
<div class="form-group">
   {{Form::label('title', 'Title')}}
   {{Form::text('title', '', ['class' => 'form-control', 'placeholder' => 'my input' ])}}
</div
<div class="form-group">
   {{Form::label('title', 'Title')}}
   {{Form::text('title', '', ['class' => 'form-control', 'placeholder' => 'my input' ])}}
</div
<div class="form-group">
   {{Form::label('title', 'Title')}}
   {{Form::text('title', '', ['class' => 'form-control', 'placeholder' => 'my input' ])}}
</div
{{Form::Submit('Submit form', ['class' => 'btn btn-primary'])}}



{!! Form::close() !!}

@endsection
