@extends ('layouts.app')
@section('content')

<div class="ui text container">


    <h1 class="ui horizontal header divider">
        <a href="#">Edit post</a>
    </h1>




{!! Form::open(['class' => 'ui form fluid'] ) !!}
{{-- project title --}}
<div class="field">
   {{Form::label('title', 'What is the title of your project?')}}
   {{Form::text('title', null, ['class' => 'form-control', 'placeholder' => 'Project title' ])}}
</div>

{{-- project details --}}
<div class="field">
    {{Form::label('details', 'Detailed instructions')}}
    {{Form::textarea('details', null, ['id' => 'article-ckeditor', 'class' => 'form-control summernote', 'placeholder' => 'Instructions' ])}}
</div>










{{Form::Submit('Submit form', ['class' => 'ui button'])}}

{{ Form::token() }}

{!! Form::close() !!}

</div>



@endsection
