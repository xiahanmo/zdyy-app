<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import FadeAnimation from '@common/fade/FadeAnimation'
export default {
  name: 'App',
  components: {
    FadeAnimation
  }
}
</script>

<style>

</style>
