<template>
  <div class="panel-list" ref="ref">
    <div class="content">
      <div class="panel-list-middle border-bottom" v-for="item of list" :key="item.id">
        <img class="panel-list-img" :src="item.imgUrl" alt="">
        <ul class="panel-list-right">
          <li>{{item.title}}</li>
          <li>
            <van-rate
              v-model="value"
              :size="15"
              :count="5"
              color="#EB818F"
              void-color="#EB818F"
            />
            <span>{{item.remark}}条</span>
            <span>¥{{item.price}}/人</span>
          </li>
          <li>
            <span v-for="(items,index) of item.tag" :key="index">{{items}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'DoctorList',
  props: {
    list: Array
  },
  data () {
    return {
      value: 5
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.ref)
  }
}
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
  .panel-list
    background #ffffff
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    overflow hidden
    margin-top 91px
    .panel-list-top
      overflow hidden
      padding 20px
      font-size 32px
      h4
        float left
      .arrow
        float right
    .panel-list-middle
      overflow hidden
      padding 10px 20px
      display flex
      .panel-list-img
        width 150px
        height 150px
        background #000
        margin-right 20px
        float left
      .panel-list-right
        float left
        flex 1
        li
          height 50px
          line-height 50px
        :nth-child(1)
          font-size 32px
        :nth-child(2)
          overflow hidden
          .van-rate
            float left
            display inline
          span
            float left
            margin 0 10px
        :nth-child(3)
          color #999999
          span
            font-size: 18px
            color: #666666
            margin: 0 10px
            border-radius: 8px
            padding: 0 10px
            color: #bbbbbb
            border: 1px solid #cccccc
    .panel-list-bottom
      padding 20px
      font-size 28px
      color #EB818F
      text-align center
</style>
