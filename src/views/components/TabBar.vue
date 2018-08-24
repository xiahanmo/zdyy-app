<template>
  <div class="tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop"  to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="wap-home" to="/doctor">医生</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  data () {
    return {
      active: 0,
      icon: {
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
