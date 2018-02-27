<div class="ui text container">

{{-- @if(count($errors) > 0)
    @foreach($errors->all() as $error)
        <div class="ui error message">{{ $error }}</div>
    @endforeach
@endif --}}



@if(session('success'))
    <div class="ui success message">
        {{ session('success') }}
    </div>
@endif



@if(session('error'))
    <div class="ui error message">
        {{ session('error') }}
    </div>
@endif


</div>
