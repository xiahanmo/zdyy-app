<template>
<div class="wrapper" ref="ref">
  <van-cell-group>
    <van-cell title="我的订单" is-link value="查看全部"/>
  </van-cell-group>
</div>
</template>
<script>
// import BScroll from 'better-scroll'
export default {
  name: 'MineList',
  components: {
  },
  props: {
  },
  watch: {
  },
  data () {
    return {
      value: 5
    }
  },
  mounted () {
    // this.scroll = new BScroll(this.$refs.ref)
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>>
  .van-cell
    padding 20px
    .van-cell__title
      span
        font-size 18px
    .van-cell__value
      span
        color #999999
        font-size 14px
</style>
