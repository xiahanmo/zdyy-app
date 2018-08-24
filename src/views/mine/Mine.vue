<template>
  <div class="mine">
    <tab-bar></tab-bar>
    <mine-admin></mine-admin>
    <mine-list></mine-list>
  </div>
</template>
<script>
import MineAdmin from './components/Admin'
import TabBar from '../components/TabBar'
import MineList from './components/List'
export default {
  name: 'Mine',
  components: {
    MineAdmin,
    MineList,
    TabBar
  },
  data () {
    return {
      recommendList: []
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>

</style>
