<template>
    <div class="b_main_banner">
        <div class="_bl_banner">
            <div class="_main_banner" id="slider">
                <carousel class="_slider" :autoplayTimeout="5000" :autoplay-hover-pause="false"
                :pagination-active-color="'#000000'" :loop="true" :autoplay="true" :perPage="1">
                    <slide v-for="(img, i) in sliderImages" :key="i"
                       :style="'background-image: url(' + img.url + ')'">

                        <div class="_slide">
                            <div class="container">
                                <div class="_banner_content">
                                    <div class="_title">{{ img.info.title }}</div>
                                    <div class="_text">{{ img.info.text }}</div>
                                    <ul>
                                        <li v-for="(item, i) in img.info.checklist" :key="i">{{ item }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </slide>
                </carousel>
                <offers></offers>
            </div>
        </div>
    </div>
</template>


<script>
import offers from './Offers.vue'
import HeroHelper from './HomeSliderData.js'
const heroHelper = new HeroHelper()
import { Carousel, Slide} from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide,
        offers
    },
    data() {
        return {
          sliderImages: []
        }
    },
    mounted() {
        this.sliderImages = heroHelper.getSliderImages()
    },
}
</script>


<style lang="scss" scoped>
@media (min-width: 967px) {
  .VueCarousel-slide{
    background-position: center;
  }
}
.b_main_banner {
  position: relative; }
  .b_main_banner ._bl_banner {
    position: relative; }
  .b_main_banner ._main_banner ._slide {
    position: relative;
    min-height: 648px; }
  .b_main_banner ._main_banner ._banner {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden; }
    .b_main_banner ._main_banner ._banner img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); }
      @media (max-width: 991px) {
        .b_main_banner ._main_banner ._banner img {
          transform: translate(-42%, -50%); } }
      @media (max-width: 767px) {
        .b_main_banner ._main_banner ._banner img {
          transform: translate(0, -50%);
          left: 0; } }
  .b_main_banner ._banner_content {
    padding: 65px 0 0;
    color: #232428; }
    @media (max-width: 767px) {
      .b_main_banner ._banner_content {
        padding: 30px 0 0;
        text-align: center; } }
    .b_main_banner ._banner_content ._title {
      font-size: 60px;
      font-weight: 300;
      margin: 0 0 35px;
      line-height: 1; }
      @media (max-width: 1199px) {
        .b_main_banner ._banner_content ._title {
          font-size: 50px;
          margin: 0 0 20px; } }
      @media (max-width: 767px) {
        .b_main_banner ._banner_content ._title {
          font-size: 30px; } }
    .b_main_banner ._banner_content ._text {
      font-size: 20px;
      line-height: 1.7;
      max-width: 475px;
      margin: 0 0 55px; }
      @media (max-width: 1199px) {
        .b_main_banner ._banner_content ._text {
          font-size: 18px;
          max-width: 410px; } }
      @media (max-width: 767px) {
        .b_main_banner ._banner_content ._text {
          max-width: none;
          font-size: 16px;
          margin: 0 0 30px; } }
    .b_main_banner ._banner_content ul {
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: left; }
      .b_main_banner ._banner_content ul li {
        position: relative;
        padding: 0 0 0 37px;
        font-size: 20px;
        font-weight: 300; }
        @media (max-width: 1199px) {
          .b_main_banner ._banner_content ul li {
            font-size: 18px; } }
        .b_main_banner ._banner_content ul li:before {
          position: absolute;
          content: '';
          left: 0;
          top: 4px;
          display: block;
          width: 21px;
          height: 19px;
          background-repeat: no-repeat;
          background-position: center;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='21' height='19' viewBox='0 0 21 19'%3E%3Cdefs%3E%3Cpath id='pfesa' d='M413.85 469l-7.56-7.95c-.39-.4-.39-.9 0-1.3l3.73-3.92c.38-.41.85-.41 1.24 0l2.6 2.72 7.86-8.26c.38-.41.85-.41 1.24 0l3.73 3.91c.38.4.38.9 0 1.3zm10.97-14.14l-2.48-2.62-8.49 8.92-3.21-3.38-2.49 2.62 5.7 5.99z'/%3E%3C/defs%3E%3Cg%3E%3Cg transform='translate%28-406 -450%29'%3E%3Cuse fill='%23f60' xlink:href='%23pfesa'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        .b_main_banner ._banner_content ul li + li {
          margin: 10px 0 0; }

  .b_main_banner ._banner_form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0; }
    @media (max-width: 991px) {
      .b_main_banner ._banner_form {
        position: static; } }
    .b_main_banner ._banner_form .container {
      position: relative; }
    .b_main_banner ._banner_form ._form {
      position: absolute;
      bottom: 50px;
      right: 30px;
      width: 100%;
      max-width: 350px;
      box-shadow: 0 3px 55px rgba(131, 153, 167, 0.35);
      background-color: #ffffff;
      padding: 40px 30px;
      text-align: center;
      float: right; }
      @media (max-width: 1199px) {
        .b_main_banner ._banner_form ._form {
          right: 0;
          padding: 20px 15px;
          max-width: 320px; } }
      @media (max-width: 991px) {
        .b_main_banner ._banner_form ._form {
          float: none;
          position: static;
          margin: 30px auto 0;
          max-width: 450px; } }
    .b_main_banner ._banner_form h3 {
      color: #232428;
      font-size: 24px;
      text-transform: uppercase;
      line-height: 1;
      margin: 0 0 35px; }
    .b_main_banner ._banner_form label {
      font-weight: 300;
      font-size: 16px;
      width: 100%;
      margin: 0;
      display: inline-block; }
      .b_main_banner ._banner_form label + label {
        margin: 15px 0 0; }
    .b_main_banner ._banner_form input[type="submit"] {
      width: 160px;
      margin: 30px 0 0;
      font-size: 14px; }
  .b_main_banner .ui.input input {
    width: 100%;
    border: 1px solid #d5dadd;
    transition: all .2s linear;
    color: #8399a6; }
    .b_main_banner .ui.input input:hover {
      border-color: #f95319; }
  .b_main_banner .ui.selection.dropdown {
    width: 100%;
    padding: 0 16px;
    border: 1px solid #d5dadd;
    transition: all .2s linear;
    box-sizing: border-box;
    line-height: normal; }
    .b_main_banner .ui.selection.dropdown:hover {
      border-color: #f95319; }
  .b_main_banner .ui.selection.visible.dropdown > .text:not(.default) {
    font-weight: 300; }
  .b_main_banner .ui.selection.dropdown:focus, .b_main_banner .ui.selection.active.dropdown, .b_main_banner .ui.selection.active.dropdown .menu {
    border-color: #f95319; }
  .b_main_banner .ui.dropdown .menu > .item:hover {
    background: #f95319;
    color: #fff; }
  .b_main_banner .ui.selection.dropdown .menu > .item {
    border: none; }
  .b_main_banner .ui.dropdown .menu .selected.item, .b_main_banner .ui.dropdown.selected {
    border: none;
    font-weight: 300;
    background: #f95319;
    color: #fff; }
  .b_main_banner .ui.dropdown > .text {
    width: 100%;
    overflow: hidden;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    height: auto;
    padding: 10px 0;
    color: #8399a6;
    font-size: 16px;
    font-weight: 300; }
  .b_main_banner .ui.bottom.left.popup {
    padding: 0; }
  @media (max-width: 767px) {
    .b_main_banner .slick-dots {
      bottom: 230px; } }


</style>
