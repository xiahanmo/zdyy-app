<template>
  <div class="navbar">
    <van-nav-bar
      title="标题111"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {
    }
  },
  methods: {
    onClickLeft () {
    },
    onClickRight () {
      this.$router.push('/city')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~@styles/varibles.styl";
.van-nav-bar
  background: $bgColor;
  color: #ffffff;
</style>
