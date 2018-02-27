<template>
    <div class="_bottom_line">
      <div class="_left_side">
        <div class="_content">

          <div class="_special">
            <div class="_title">Special</div>
            <div class="_number">10%</div>
            <div class="_text">discount</div>
          </div>

          <div class="_special_info">
            <p>
              First time users get an intro discount
            </p>
            <a href="#">click to watch video</a>
          </div>

        </div>
      </div>

      <div class="_right_side">
        <div class="_content">

          <div class="_special">
            <div class="_title">Special</div>
            <div class="_number">10%</div>
            <div class="_text">cashback</div>
          </div>

          <div class="_special_info">
            <p>
              Refer friends <br> &amp; earn cash
            </p>
            <a href="#">log in to add a friend</a>
          </div>

        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
 ._bottom_line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0; }
   ._bottom_line ._left_side,  ._bottom_line ._right_side {
    height: 135px; }
    @media (max-width: 767px) {
       ._bottom_line ._left_side,  ._bottom_line ._right_side {
        height: 100px; } }
   ._bottom_line ._left_side {
    background-image: linear-gradient(to right, #ff8500 0%, #ff5404 99%, #ff5404 100%);
    float: left;
    width: 40%;
    opacity: 0.7;
    text-align: right;
    padding-right: 48px; }
    @media (max-width: 1199px) {
       ._bottom_line ._left_side {
        width: 35%; } }
    @media (max-width: 991px) {
       ._bottom_line ._left_side {
        width: 50%; } }
    @media (max-width: 767px) {
       ._bottom_line ._left_side {
        width: 100%;
        text-align: center;
        padding: 0; } }
   ._bottom_line ._right_side {
    background-color: rgba(94, 114, 126, 0.7);
    float: right;
    width: 60%;
    padding-left: 30px; }
    @media (max-width: 1199px) {
       ._bottom_line ._right_side {
        width: 65%; } }
    @media (max-width: 991px) {
       ._bottom_line ._right_side {
        width: 50%; } }
    @media (max-width: 767px) {
       ._bottom_line ._right_side {
        width: 100%;
        text-align: center;
        padding: 0; } }
     ._bottom_line ._right_side ._title {
      color: #8399a6; }
   ._bottom_line ._content {
    text-align: left;
    display: inline-block;
    padding: 25px 0 0;
    color: #ffffff; }
    @media (max-width: 767px) {
       ._bottom_line ._content {
        padding: 10px 0 0; } }
   ._bottom_line ._special {
    display: inline-block;
    vertical-align: top;
    text-align: center; }
    @media (max-width: 767px) {
       ._bottom_line ._special {
        vertical-align: middle; } }
   ._bottom_line ._title {
    background-color: #ffffff;
    border-radius: 4px;
    color: #ff6600;
    padding: 2px 12px;
    display: inline-block;
    margin: 0 0 4px; }
   ._bottom_line ._number {
    font-size: 40px;
    line-height: 1;
    font-weight: 900;
    margin: 0 0 2px; }
    @media (max-width: 767px) {
       ._bottom_line ._number {
        font-size: 30px; } }
   ._bottom_line ._text {
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2.8px; }
   ._bottom_line ._special_info {
    display: inline-block;
    vertical-align: top;
    margin: 0 0 0 20px; }
    @media (max-width: 767px) {
       ._bottom_line ._special_info {
        vertical-align: middle; } }
     ._bottom_line ._special_info p {
      font-size: 20px;
      font-weight: 300;
      margin: 0 0 8px;
      line-height: 30px;
      max-width: 175px; }
      @media (max-width: 767px) {
         ._bottom_line ._special_info p {
          font-size: 17px;
          line-height: 1.3; } }
     ._bottom_line ._special_info a {
      text-decoration: underline;
      text-transform: uppercase;
      color: #ffffff;
      font-size: 14px;
      letter-spacing: 1.4px; }
      @media (max-width: 767px) {
         ._bottom_line ._special_info a {
          letter-spacing: normal; } }
</style>
