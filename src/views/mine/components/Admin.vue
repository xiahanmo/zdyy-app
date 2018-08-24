<template>
  <div class="mine-admin">
    <div class="mine-admin-content">
      <img src="../images/portrait.png" alt="">
      <p>admin</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MineAdmin',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
@import "~@styles/varibles.styl";
.mine-admin
  width 100%
  background-color #1E82D2
  .mine-admin-content
    padding 40px 0
    img
      display block
      width 140px
      height 140px
      border-radius 50%
      border 5px solid #ffffff
      margin 0 auto
    p
      margin auto
      text-align center
      font-size 32px
      color #ffffff
      font-weight bold
      margin-top 20px
</style>
