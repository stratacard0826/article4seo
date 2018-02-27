<template>
  <div class="_video">
    <div class="_video_block">
      <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk&autoplay=1&rel=0&showinfo=0" class="_link_vileo" data-fancybox>
        <img src="/static/img/video_bg.jpg" alt="">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
._video {
  position: relative;
  float: left;
  width: 100%;
  max-width: 470px; }
  @media (max-width: 1199px) {
    ._video {
      max-width: 420px; } }
  @media (max-width: 991px) {
    ._video {
      float: none;
      margin: 0 auto 35px; } }
._video_block {
  position: relative;
  display: inline-block;
  z-index: 1; }
  ._video_block:before {
    position: absolute;
    z-index: -1;
    content: '';
    height: 100%;
    width: 100%;
    top: 25px;
    left: 25px;
    background-image: linear-gradient(to right, #ff5404 0%, #ff5404 1%, #ff8500 100%); }
    @media (max-width: 1199px) {
      ._video_block:before {
        top: 15px;
        left: 15px; } }
  ._video_block img {
    max-width: 100%; }
._link_vileo {
  display: inline-block;
  position: relative; }
  ._link_vileo:hover:before {
    transform: scale(1.2); }
  ._link_vileo:before {
    transition: all .2s linear;
    position: absolute;
    content: '';
    width: 60px;
    height: 60px;
    top: 50%;
    left: 50%;
    margin: -30px 0 0 -30px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='60' height='60' viewBox='0 0 60 60'%3E%3Cdefs%3E%3Cpath id='g98xa' d='M628 1344a30 30 0 1 1 0 60 30 30 0 0 1 0-60z'/%3E%3Cpath id='g98xc' d='M621.99 1364v21l18.02-10.5z'/%3E%3ClinearGradient id='g98xb' x1='598' x2='658' y1='1374' y2='1374' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff5404'/%3E%3Cstop offset='.01' stop-color='%23ff5404'/%3E%3Cstop offset='1' stop-color='%23ff8500'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg%3E%3Cg opacity='.8' transform='translate%28-598 -1344%29'%3E%3Cuse fill='%232ecc71' xlink:href='%23g98xa'/%3E%3Cuse fill='url%28%23g98xb%29' xlink:href='%23g98xa'/%3E%3C/g%3E%3Cg transform='translate%28-598 -1344%29'%3E%3Cuse fill='%23fff' xlink:href='%23g98xc'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
</style>
