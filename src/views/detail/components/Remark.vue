<template>
  <div class="remark-list">
    <van-cell-group>
      <van-cell title="评价（90）" is-link />
    </van-cell-group>
    <ul class="remark-title">
      <li>全部</li>
      <li>很专业(10)</li>
      <li>有图(13)</li>
      <li>差评(1)</li>
    </ul>
    <div class="remark-all" >
      <img class="remark-all-img" src="https://qcommons.qunar.com/headshot/avatar/gVxF2TbJfif3WTMn.png?l&ssl=true" alt="">
      <ul class="remark-all-panel">
        <li>
          <div class="remark-nickname">昵称</div>
          <div class="remark-time">2017-11-10</div>
        </li>
        <li>
          <span>打分</span>
          <van-rate
            v-model="value"
            :size="15"
            :count="5"
            color="#EB818F"
            void-color="#EB818F"
          />
        </li>
        <li>
          <p>经过熟人介绍，来找赵医生拔智齿，技术很好，很专业，价格美丽，已经转介绍给我的一个好朋友，真心给力，医师医德，不愧为主任医师，这么年轻。</p>
        </li>
      </ul>
    </div>
    <div class="panel-list-bottom">
      <p>查看全部评价</p>
    </div>
  </div>

</template>
<script>
export default {
  name: 'DetailRemark',
  data () {
    return {
      value: 5
    }
  }

}
</script>
<style lang="stylus" scoped>
.remark-list
  margin-top 20px
  background #ffffff
  .remark-title
    overflow hidden
    padding 20px
    li
      padding 10px 20px
      float left
      margin 0 10px
      color #EB818F
      border-radius 15px
      background #F9DAE2
  .remark-all
    display flex
    background #ffffff
    padding 20px
    .remark-all-img
      width 80px
      height 80px
      border-radius 50%
      margin-top 20px
      background #000
      float left
    .remark-all-panel
      float left
      flex 1
      padding 20px
      li
        line-height 50px
      :nth-child(1)
        overflow hidden
        .remark-nickname
          float left
          font-size 30px
        .remark-time
          float right
          color #aaaaaa
      :nth-child(2)
        span
          color #AFAFAF
        .van-rate
          display inline
      :nth-child(3)
        p
          line-height 30px
  .panel-list-bottom
    padding 20px
    font-size 28px
    color #EB818F
    text-align center
</style>
