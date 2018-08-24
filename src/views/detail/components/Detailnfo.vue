<template>
    <ul class="detail-info-wrap">
      <li>
        <div class="detail-info-first">
          <van-rate v-model="value" :size="15" :count="5" color="#EB818F" void-color="#EB818F"/>
          <span class="detail-info-remark">{{list.remark}}条评论</span>
        </div>
        <div class="detail-info-second"><span>效果 {{list.result}}</span>|<span>环境 {{list.environ}}</span>|<span>服务 {{list.server}}</span></div>
      </li>
      <li class="detail-center">
        <em>
          <van-icon name="location" />
        </em>
        <em class="border-right">
          <strong class="detail-place">{{list.place}}</strong>
        </em>
        <em>
          <van-icon name="phone" tel="list.tel"/>
        </em>
      </li>
      <li class="detail-last">
        <van-icon name="underway" />{{list.time}}
      </li>
    </ul>
</template>
<script>
export default {
  name: 'DetailInfo',
  props: {
    list: Object
  },
  data () {
    return {
      value: 5
    }
  },
  mounted () {
    console.log(this.list)
  }
}
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
  .detail-info-wrap
    background #ffffff
    .van-icon
      margin-right 10px
    li
      border-bottom 1px solid #eeeeee
      color #999999
      padding 25px 0
      .detail-info-first
        overflow hidden
        display table
        .van-rate
          float left
          display inline
          margin 0 10px
        .detail-info-remark
          float left
          vertical-align middle
          font-size 30px
      .detail-info-second
        padding 20px 0
        span
          margin 0 20px
    .detail-center
      display flex
      padding 25px 20px
      :nth-child(1)
        width 50px
      :nth-child(2)
        flex:1
        .detail-place
          color #999999
          line-height 30px
      :nth-child(3)
        width 100px
        color #82E7E2
        text-align center
    .detail-last
      padding-left 20px
</style>
