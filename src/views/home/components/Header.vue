<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/map" tag="div"><van-icon name="aim" /></router-link>
    </div>
    <div class="header-input">
      <van-icon name="search" />
      输入门诊／医生
      </div>
    <div class="header-right">
      <router-link to="/city">
        <span class="iconfont arrow-font">{{this.city}}</span>
        <!-- <span class="iconfont arrow-icon">&#xe64a;</span> -->
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
@import '~@styles/mixins.styl'
  .header
    height 86px
    line-height 86px
    display flex
    background $bgColor
    color #ffffff
    z-index 10
    position relative
    .header-left
      float left
      width 64px
      text-align center
      .van-icon-aim
        color #ffffff
        font-size 16px
        margin 10px 0 0 5px
      .back-icon
        text-align center
        font-size 40px
    .header-right
      float right
      min-width 124px
      text-align center
      .arrow-font
        color #ffffff
        font-size 30px
      .arrow-icon
        margin-left -4px
        font-size 24px
        color #ffffff
    .header-input
      flex 1
      background #ffffff
      border-radius 10px
      box-sizing border-box
      margin-top 12px
      margin-left 20px
      height 64px
      color #cccccc
      line-height 64px
      padding-left 20px

</style>
