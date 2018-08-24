<template>
  <div class="brand-list">
    <van-cell-group>
      <van-cell title="品牌介绍" is-link />
    </van-cell-group>
    <div class="remark-all" >
      <img class="remark-all-img" src="https://vfile.meituan.net/joymerchant/-6900069877775804111-788351-1512703504459.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" alt="">
      <ul class="remark-all-panel">
        <li>
          佳美口腔
        </li>
        <li>
          专业设备，品牌连锁，一站式服务
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
.brand-list
  margin-top 20px
  .remark-all
    background #ffffff
    overflow hidden
    display flex
    padding 20px
    .remark-all-img
      width 100px
      height 100px
      border-radius 50%
      float left
    .remark-all-panel
      float left
      flex 1
      padding-left 20px
      li
        line-height 50px
      :nth-child(1)
        font-size 30px
</style>
