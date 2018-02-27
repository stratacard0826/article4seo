<transition name="fade">
<div class="overlay" v-if="show">
  <div class="">
    <div class="button-menu">
      <a class="btn-close"></a>
    </div>

    <div class="overlay-header">
      <img src="{{asset('img/logo-mini.png')}}" alt="">
    </div>

    <ul class="menu-wrap">
      @auth

      <li><h3><i class="fa fa-user-circle" style="font-size:60px;"></i>My Account {{ Auth::user()->name }}</h3>
        <ul class="overlay-list">


          <li><a href="/myorders">My Orders</a></li>
          <li><a href="/billing">Billing History</a></li>
          <li><a href="/account">Account Settings</a></li>
          <li><a href="/referral">Referral Program - My Friends</a></li>
          <li><a href="{{ route('logout') }} class="btnLogout">Log Out</a></li>

        </ul>
      </li>

      @else

        <li><a href="{{ url('/') }}/">Log In</a></li>

      @endauth

      <li><h3><i class="fa fa-external-link" style="font-size:60px;"></i>Service Shortcuts</h3>
        <ul class="overlay-list">
          <li><a href="{{ url('/') }}/">Home</a></li>
          <li><a href="/support" class="btnLogin">Support Center</a></li>
          <li><a href="/order" >Place An Order</a></li>

          @auth
            <li><a class="btn-cart">Shopping Cart</a></li>
            <li><a href="/checkout">Checkout</a></li>

          @endauth





        </ul>
      </li>
      <li><h3><i class="fa fa-info-circle" style="font-size:60px;"></i>About Us</h3>
        <ul class="overlay-list">
          <li><a href="/info/services">Our Services</a></li>
          <li><a href="/info/writers">Our Writers</a></li>
          <li><a href="/info/testimonials">Client Testimonials</a></li>
          <li><a href="/info/discounts">Discounts</a></li>
          <li><a href="/info/content-formatting">Formatting</a></li>
          <li><a href="/info/privacy-policy">Privacy Policy</a></li>
          <li><a href="/info/terms-of-service">Terms of Service</a></li>
          <li><a href="/info/faq" class="btnLogin">FAQ</a></li>

        </ul>
      </li>

      <li><h3><i class="fa fa-support" style="font-size:60px;"></i>Support</h3>
        <ul class="overlay-list">
          <li><a href="/info/privacy-policy">Live Chat</a></li>
          <li><a href="/info/privacy-policy">1-888-823-9060 (Toll Free)</a></li>
          <li><a href="/info/privacy-policy">1-518-620-6761 (Hotline)</a></li>

          <li><a href="/info/privacy-policy">Submit a Ticket</a></li>

        </ul>
      </li>

      <li><h3><i class="fa fa-support" style="font-size:60px;"></i>Resources</h3>
        <ul class="overlay-list">
          <li><a href="/info/privacy-policy">Topic Hint Tool</a></li>
        </ul>
      </li>

      @if(@count($categories) > 0)
         <ul>
         @foreach($categories as $category)
            <li><a href="/customessaytopics/{{$category->title}}.htm">{{$category->title}}</a></li>
         @endforeach
         </ul>
      @endif





    </ul>





  </div>
</div>
</transition>
