<template>
<header class="b_header">

  <div class="_header_bottom">
    <div class="container">

      <div class="flex-luis">
        <div class="flex-item">
          <a href="#">
            <img class="_logo" src="../../img/logo@3x.png" alt="">
          </a>
        </div>

        <div class="flex-item">
          <div class="_client_support">
            <a href="tel:18888239060" class="_phone">1-888-823-9060</a>
            <p>
              <span class="_color">24/7</span> Client Support
            </p>
          </div>
        </div>

        <div class="flex-item">
            <div @click="quote"><w-button>GET IN TOUCH</w-button></div>
          <!-- <a href="#" class="btn btn_orange">Get in Touch</a> -->
        </div>
      </div>

    </div>
  </div>

</header>

</template>

<script>
export default {

}
</script>

<style type="scss" scoped>

.b_header ._header_bottom {
  margin-top:30px;
  text-align: center;
  padding: 25px 0; }
  .b_header ._header_bottom .btn {
    width: 160px; }
  @media (max-width: 767px) {
    .b_header ._header_bottom .flex-luis {
      display: block;
      text-align: center; } }
.b_header ._client_support {
  text-align: left;
  padding: 0 0 0 79px;
  position: relative; }
  @media (max-width: 767px) {
    .b_header ._client_support {
      max-width: 260px;
      margin: 20px auto; } }
  .b_header ._client_support:before {
    position: absolute;
    left: 0;
    width: 50px;
    height: 50px;
    content: '';
    top: 50%;
    transform: translate(0, -50%);
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 50 50'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: url%28%23Безымянный_градиент%29; %7D .cls-2 %7B fill: %23f60; %7D %3C/style%3E%3ClinearGradient id='Безымянный_градиент' data-name='Безымянный градиент' y1='-765.52' x2='50' y2='-765.52' gradientTransform='matrix%281, 0, 0, -1, 0, -740.52%29' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff5404'/%3E%3Cstop offset='0.01' stop-color='%23ff5404'/%3E%3Cstop offset='1' stop-color='%23ff8500'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ctitle%3Eclient_support%3C/title%3E%3Cg%3E%3Cpath id='zkqoa' class='cls-1' d='M25,1A24,24,0,1,1,1,25,24.07,24.07,0,0,1,25,1m0-1A25,25,0,1,0,50,25,25,25,0,0,0,25,0h0Z'/%3E%3Cpath id='zkqod' class='cls-2' d='M16.1,33.7l-1.2-1.1a3.21,3.21,0,0,1-1-2.1,2.91,2.91,0,0,1,1.8-2.6l3.4-1.6a2.44,2.44,0,0,1,2.6.3l0.4,0.3a1.6,1.6,0,0,0,1.5.2,6.29,6.29,0,0,0,2.7-2.4,1,1,0,0,0-.2-1.3L25.7,23a1.83,1.83,0,0,1-.3-2.3l1.8-3.1A3.36,3.36,0,0,1,30.1,16a3.61,3.61,0,0,1,2,.6l1,0.7a4.13,4.13,0,0,1,1.7,4.8A20.89,20.89,0,0,1,21.2,34.7a5.23,5.23,0,0,1-5.1-1h0ZM28.9,18.4l-1.8,3.1v0.1c0,0.1,0,.2.1,0.2l0.4,0.4a2.74,2.74,0,0,1,.5,3.3,8.31,8.31,0,0,1-3.5,3.2,3.53,3.53,0,0,1-3.7-.4L20.5,28a0.3,0.3,0,0,0-.4,0l-3.4,1.6a1,1,0,0,0-.7,1,0.91,0.91,0,0,0,.4.8l1.2,1.1a3.25,3.25,0,0,0,3,.6A19.49,19.49,0,0,0,33,21.6a2.43,2.43,0,0,0-1-2.9L31,18a1.08,1.08,0,0,0-.8-0.2,1.38,1.38,0,0,0-1.3.6h0Z'/%3E%3C/g%3E%3C/svg%3E%0A"); }
  .b_header ._client_support p {
    margin: 0;
    letter-spacing: 0.7px;
    text-transform: uppercase; }
  .b_header ._client_support ._color {
    color: #ff6600; }
.b_header ._phone {
  font-size: 24px;
  font-weight: 600;
  color: #232428;
  text-decoration: none;
  margin: 0 0 10px;
  line-height: 1;
  display: inline-block; }

.btn {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 15px 20px;
  transition: all .2s linear;
  font-size: 14px;
  height: auto;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  box-shadow: none;
  border: none;
  border-radius: 4px; }
  .btn:hover, .btn:focus {
    box-shadow: none; }

.btn_orange {
  background-image: linear-gradient(to right, #ff5404 0%, #ff5404 1%, #ff8500 100%);
  color: #fff;
  text-transform: uppercase; }
  .btn_orange:hover, .btn_orange:focus {
    color: #fff; }
  .btn_orange:active {
    color: #fff; }
.flex-item ._logo {
  width:161px;}

</style>
