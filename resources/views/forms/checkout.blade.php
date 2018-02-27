@extends ('layouts.app')

@section('content')

<div class="ui divider"></div>


<div class="ui text container">

{{-- order form --}}
<h1 class="ui horizontal header divider">Checkout</h1>

{!! Form::open(['class' => 'ui form fluid'] ) !!}




{{-- first namespace --}}
<div class="field">
   {{Form::label('firstname', 'first name')}}
   {{Form::text('firstname', old('firstname'), ['class' => 'form-control', 'placeholder' => 'firstname' ])}}
</div>
{{-- first namespace --}}
<div class="field">
   {{Form::label('lastname', 'last name')}}
   {{Form::text('lastname', old('lastname'), ['class' => 'form-control', 'placeholder' => 'lastname' ])}}
</div>

{{-- email --}}
<div class="field">
   {{Form::label('email', 'email')}}
   {{Form::text('email', old('email'), ['class' => 'form-control', 'placeholder' => 'email' ])}}
</div>
{{-- confirm email --}}
<div class="field">
   {{Form::label('confirm_email', 'confirm email')}}
   {{Form::text('confirm_email', null, ['class' => 'form-control', 'placeholder' => 'email' ])}}
</div>

{{-- password --}}
<div class="field">
   {{Form::label('password', 'password')}}
   {{Form::text('password', null, ['class' => 'form-control', 'placeholder' => 'password' ])}}
</div>
{{-- confirm password --}}
<div class="field">
   {{Form::label('confirm_password', 'password')}}
   {{Form::text('confirm_password', null, ['class' => 'form-control', 'placeholder' => 'password' ])}}
</div>



<div class="form-group{{ $errors->has('address') ? ' has-error' : '' }}">
    {!! Form::label('address', 'Address') !!}
    {!! Form::text('address', null, ['class' => 'form-control', 'placeholder' => 'Address']) !!}
    <small class="text-danger">{{ $errors->first('address') }}</small>
</div>

<div class="form-group{{ $errors->has('city') ? ' has-error' : '' }}">
    {!! Form::label('city', 'City') !!}
    {!! Form::text('city', null, ['class' => 'form-control', 'required' => 'required', 'placeholder' => 'City']) !!}
    <small class="text-danger">{{ $errors->first('city') }}</small>
</div>

<div class="form-group{{ $errors->has('zip') ? ' has-error' : '' }}">
    {!! Form::label('zip', 'Input label') !!}
    {!! Form::text('zip', null, ['class' => 'form-control', 'required' => 'required']) !!}
    <small class="text-danger">{{ $errors->first('zip') }}</small>
</div>



<div class="ui divider"></div>
{{Form::Submit('Checkout', ['class' => 'ui button orange large'])}}

{{ Form::token() }}
{!! Form::close() !!}

</div>

@endsection
