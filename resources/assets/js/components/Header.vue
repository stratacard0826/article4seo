<template>
  <div id="header">
    <div class="ui container content">
      <img class="item logo" src="./../../img-tmp/logo.png">
      <w-button><a href="/support">GET IN TOUCH</a></w-button>
      <div class="contact">
        <div class="circ"><img src="./../../img-tmp/phone.png"></div>
        <div class="info">
          <h3>1-888-823-9060</h3>
          <div class="sub"><span class="orange"> 24/7</span> CLIENT SUPPORT</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WButton from './WButton'
export default {
  components: { WButton }
}
</script>
<style lang="sass">
@import './../../sass/_mixins.sass'
@import './../../sass/_variables.sass'
#header
  margin-top: 50px
  height: 110px
  +rel
  .logo
    height: 70px
    +rel
    top: 20px
  #w-button
    float: right
    margin-top: 35px
  .contact
    +v-h-center
    width: 250px
    .info
      +bold
      .sub
        +font(13px)
    .orange
      color: $orange-1
      +bold
    div.circ
      margin: 0 20px
      float: left
      border-radius: 50%
      height: 50px
      width: 50px
      border: 1px solid $orange-1
      img
        +rel
        top: 14px
        left: 7px
        height: 20px
</style>
