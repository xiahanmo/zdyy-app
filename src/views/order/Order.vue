<template>
  <div class="goods">
    <goods-list :list="orderList"></goods-list>
  </div>
</template>
<script>
import axios from 'axios'
import GoodsList from './components/List'
export default {
  name: 'Goods',
  components: {
    GoodsList
  },
  data () {
    return {
      orderList: []
    }
  },
  mounted () {
    this.orderAjaxData()
  },
  methods: {
    orderAjaxData () {
      axios.get('/api/order.json', {
      }).then(this.detailAjaxDataSuccess)
    },
    orderAjaxDataSuccess (res) {
      let msg = res.data
      console.log(msg.data)
      if (msg.ret && msg.data) {
        this.orderList = msg.data.orderList
      }
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
