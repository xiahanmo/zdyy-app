<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of list" :key="index">
          <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Gallary',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true, // 监听到dom父元素变化自我刷新swiper，解决宽度计算
        observer: true // 监听到dom变化自我swiper，解决宽度计算
      },
      isShowGallary: false
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  width 100%
  height 100%
  overflow hidden
  background #000000
  position fixed
  z-index 4
  top 0
  right 0
  bottom 0
  left 0
  margin auto
  display flex
  flex-direction column
  justify-content center
  .wrapper
    width 100%
    height 0
    padding-bottom 100%
    img
      width 100%
    .swiper-pagination-fraction
      right 0
      bottom -100px
      color #ffffff
</style>
