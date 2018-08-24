<template>
  <router-link class="list" tag="div" to="/detail/id">
    <img class="list-img" src="https://imgs.qunarzz.com/p/p8/1512/ef/42ee0d6c9910cdf7.png_r_220x220_1747731b.png" alt="">
    <ul class="list-right">
      <li>标题</li>
      <li>
        <van-rate
          v-model="value"
          :size="15"
          :count="5"
          color="#EB818F"
          void-color="#EB818F"
        />
        <span>223条</span>
        <span>¥246/人</span>
      </li>
      <li>
        <span>苏州桥</span><span>齿科</span>
      </li>
      <li>
        <span>烤瓷冠</span><span>烤瓷冠</span>
      </li>
    </ul>
  </router-link>
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
      value: 3
    }
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>
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
        font-size 24px
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
