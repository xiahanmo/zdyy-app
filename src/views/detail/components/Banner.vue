<template>
  <div class="banner" >
    <div class="bannerImg-wrapper" @click="handleBannerClick">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of list" :key="index">
          <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <ul>
      <li>{{sightName}}</li>
      <li><van-icon name="photo" class="banner-icon"/>{{listNum}}</li>
    </ul>
    <fade-animation>
      <common-gallary v-show="isShowGallary" :list='this.list' @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from '@common/gallary/Gallary'
import FadeAnimation from '@common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    list: Array,
    sightName: String
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      },
      isShowGallary: false
    }
  },
  computed: {
    listNum () {
      return this.list.length
    }
  },
  methods: {
    handleBannerClick () {
      this.isShowGallary = true
    },
    handleGallaryClose () {
      this.isShowGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  .bannerImg-wrapper
    width 100%
    height 0
    padding-bottom 50%
    overflow hidden
    img
      width 100%
    .swiper-pagination-fraction
      right 0
      bottom 100px
      width 64px
      z-index 2
      color #ffffff
  ul
    display flex
    height 70px
    line-height 70px
    background linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
    overflow hidden
    position absolute
    left 0
    right 0
    bottom 0
    z-index 1
    li
      color #ffffff
      font-size 30px
      .banner-icon
        margin 20px 20px 0 0
      &:nth-child(1)
        flex 1
        float left
        padding-left 20px
        vertical-align middle
      &:nth-child(2)
        width 108px
        float right

</style>
