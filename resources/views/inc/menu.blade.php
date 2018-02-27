<Vue-headroom>
	<nav class="navbar">

		<a href="{{ url('/') }}/"><img class="imgLogo" src="{{asset('img/logo-mini.png')}}" alt="" ></a>

		<ul class="menu-links">
			<li class="hide-narrowest"><a href="/order" >Place An Order</a></li>
			<li class="hide-narrow"><a href="/support" >Support</a></li>

			@auth
				<li class="hide-narrowest"><a href="/myorders#1">My Orders</a></li>
				<li class="hide-narrowest">
					<a href="{{ route('logout')}}" class="btnLogout"><img src="{{asset('img/f-ico1.png')}}" alt="">Log Out</a>
				</li>
			@else
				<li class="hide-narrowest">

					<a href="{{ route('login') }}" id="btnLogin"><img src="{{asset('img/f-ico1.png')}}" alt="">Log In</a>
				</li>
			@endauth

			@if(session('batchid'))
				<a href="" id="batchid">batchid</a>
			@endif
		</ul>


		@auth
		<span id="cart-holder"></span>
		@endauth


		<span class="info-block__phone">
                <a href="tel:188880324322"><img src="{{asset('img/flag.jpg')}}" alt="">1-888-823-9060</a>
        </span>

        <ul class="menu-btn">
			<li class="button-menu"><a class="btn-open" v-on:click="show = !show">MENU &nbsp;</a></li>
		</ul>

	</nav>

	<div class="container-fluid orderFormInnerBlock" id="blockQuoteOrder">
        <div class="row">
            <div class="blockQuoteBody">
            </div>
        </div>
    </div>
</Vue-headroom>
