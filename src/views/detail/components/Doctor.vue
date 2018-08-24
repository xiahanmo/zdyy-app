<template>
  <div class="panel-list">
    <!-- <div class="panel-list-top border-bottom">
      <h4>医生资源</h4>
      <van-icon name="arrow" class="arrow"/>
    </div> -->
    <van-cell-group>
      <router-link tag="span" to="/doctor">
        <van-cell title="医生资源" is-link />
      </router-link>
    </van-cell-group>
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
        <li>合众齿科明星医生，主治拔牙</li>
      </ul>
    </div>
    <div class="panel-list-bottom">
      <router-link tag="span" to="/doctor">
        <p>查看全部医生</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailDoctor',
  props: {
    list: Array
  },
  data () {
    return {
      value: 5
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
  .panel-list
    background #ffffff
    margin-top 15px
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
          font-size 26px
          color #999999
    .panel-list-bottom
      padding 20px
      font-size 28px
      color #EB818F
      text-align center
</style>
