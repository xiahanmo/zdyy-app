<template>
<div class="wrapper" ref="ref">
  <div class="content">
    <router-link class="list border-bottom" tag="div" :to="'/detail/'+item.id" v-for="item in list" :key="item.id">
      <img class="list-img" :src="item.imgUrl" alt="">
      <ul class="list-right">
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
          <span>{{item.place}}</span><span>齿科</span>
        </li>
        <li>
          <span v-for="(items,index) of item.tag" :key="index">{{items}}</span>
        </li>
      </ul>
    </router-link>
  </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  components: {
  },
  props: {
    list: Array
  },
  watch: {

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
.wrapper
  position absolute
  top 0
  left 0
  bottom 0
  right 0
  overflow hidden
  margin-top 86px
  .list
    width: 100%
    display:flex
    padding: 10px
    box-sizing: border-box
    .list-img
      width: 200px
      height: 200px
      margin: 0 10px
    .list-right
      flex: 1
      padding-left: 20px
      li
        line-height 50px
      :nth-child(1)
        font-size 32px
      :nth-child(2)
        overflow: hidden
        .van-rate
          float: left
          display inline-block
        span
          color: #666666
          float: left
          margin: 0 10px
      :nth-child(3)
        span
          font-size: 16px
          color: #666666
          margin: 0 10px
      :nth-child(4)
        span
          font-size: 18px
          color: #666666
          margin: 0 10px
          border-radius: 8px
          padding: 0 10px
          color: #bbbbbb
          border: 1px solid #cccccc

</style>
