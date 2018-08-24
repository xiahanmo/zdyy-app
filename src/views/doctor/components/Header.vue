<template>
    <div class="header">
      <span class="title">
        附近医生
      </span>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
.header
  height $headerHeight
  line-height $headerHeight
  background $bgColor
  text-align center
  font-size 32px
  position relative
  color #ffffff
  z-index 10
  .back-icon
    position absolute
    top 20px
    left 10px
    width 47px
    height 47px
    display block
    color #ffffff
</style>
