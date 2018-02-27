<template>
  <div id="w-button"><slot></slot></div>
</template>
<script>
export default {

}
</script>
<style lang="sass">
@import './../../sass/_mixins.sass'
@import './../../sass/_variables.sass'
#w-button
  background: linear-gradient(to right, $orange-2,  $orange-3);
  padding: 15px 25px
  color: white
  +bold
  border-radius: 5px
  +font(12px)
  +hand
  +char-space(3px)
  +os-semi-bold
  +inline-block
  &.sm
    +font(12px)
  &.md
    +font(15px)
  &.lg
    +font(18px)
</style>
