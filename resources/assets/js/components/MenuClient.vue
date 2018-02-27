<template>
    <div>
        <div class="_menu_logo">
          <a href="/"><img src="img/menu_logo.png" alt=""></a>
        </div>

        <div class="_menu_lists">

          <div class="_list">
            <h3>History</h3>
            <ul>
              <li><a href="/cp/orders">My Orders</a></li>
              <li><a href="/cp/credits">Billing</a></li>
              <li><a href="/cp/balance">Account Balance</a></li>


            </ul>
          </div>

          <div class="_list">
            <h3>Discounts</h3>
            <ul>
            <li><a href="/cp/myfriends">About referral program</a></li>
              <li><a href="/cp/friend">Add a friend</a></li>


            </ul>
          </div>

          <div class="_list">
            <h3>account</h3>
            <ul>

              <li><a href="/cp/profile">Edit Profile</a></li>
              <li><a href="/logout">Sign Out</a></li>

            </ul>
          </div>


        </div>
    </div>
</template>


<style>

.b_header ._header_top ._menu_lists {
  display: flex;
  justify-content: space-between;
  padding: 45px 0 0; }
  @media (max-width: 767px) {
    .b_header ._header_top ._menu_lists {
      display: block; } }
  .b_header ._header_top ._menu_lists ._list {
    text-align: left; }
    @media (max-width: 991px) {
      .b_header ._header_top ._menu_lists ._list {
        max-width: 24%; } }
    @media (max-width: 767px) {
      .b_header ._header_top ._menu_lists ._list {
        max-width: none;
        width: 49%;
        display: inline-block;
        vertical-align: top;
        margin: 0 0 20px; } }
    @media (max-width: 440px) {
      .b_header ._header_top ._menu_lists ._list {
        width: 100%; } }
    .b_header ._header_top ._menu_lists ._list h3 {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 500;
      margin: 0 0 25px; }
      @media (max-width: 991px) {
        .b_header ._header_top ._menu_lists ._list h3 {
          font-size: 17px; } }
      @media (max-width: 767px) {
        .b_header ._header_top ._menu_lists ._list h3 {
          margin: 0 0 10px; } }
    .b_header ._header_top ._menu_lists ._list li {
      display: block; }
      .b_header ._header_top ._menu_lists ._list li + li {
        margin: 5px 0 0; }
      .b_header ._header_top ._menu_lists ._list li a {
        color: #ffffff;
        font-size: 20px;
        font-weight: 300; }
        @media (max-width: 991px) {
          .b_header ._header_top ._menu_lists ._list li a {
            font-size: 15px; } }
        .b_header ._header_top ._menu_lists ._list li a:hover {
          text-decoration: underline; }
</style>
