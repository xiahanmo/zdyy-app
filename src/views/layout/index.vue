<template>
  <div class="layout">
    <router-view/>
    <div class="null-div"></div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/views/components/TabBar'
export default {
  name: 'Layout',
  components: {
    TabBar
  }
}
</script>
<style lang="stylus" scoped>
.null-div
  height 100px
  width 100%
</style>
