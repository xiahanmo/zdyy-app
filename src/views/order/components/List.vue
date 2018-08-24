<template>
  <div class="list">
    <div class="panel-list-middle border-bottom" v-for="item of list" :key="item.id">
      <img class="panel-list-img" :src="item.urlImg" alt="">
      <ul class="panel-list-right">
        <li><span>[{{item.category}}]</span>{{item.title}}</li>
        <li>
          <div class="order-info">
            <span>¥{{item.price}}</span>
            <del>¥{{item.orderprice}}</del>
            <em>已售{{item.soldNum}}</em>
          </div>
          <div class="order-btn">预约</div>
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
  .goods-list
    background #ffffff
    margin-top 15px
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
          span
            color #EB818F
            margin-right 10px
        :nth-child(2)
          font-size 26px
          color #999999
          overflow hidden
          display flex
          .order-info
            flex 1
            overflow hidden
            span
              float left
              color #EB818F
              font-size 32px
            em
              float left
              font-size 26px
            del
              float left
              font-size 26px
              margin 0 20px
              text-decoration line-through
          .order-btn
            width 60px
            height 30px
            padding 10px 20px
            line-height 30px
            border-radius 5px
            text-align center
            background #69B8F7
            color #ffffff
    .panel-list-bottom
      padding 20px
      font-size 28px
      color #EB818F
      text-align center
</style>
