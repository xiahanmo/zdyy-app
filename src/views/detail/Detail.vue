<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner :list="gallaryImgs" :sightName="sightName"></detail-banner>
    <detail-info :list="detailinfoList"></detail-info>
    <detail-doctor :list="doctorList"></detail-doctor>
    <detail-goods :list="orderList"></detail-goods>
    <detail-remark></detail-remark>
    <detail-brand></detail-brand>
    <detail-list :list="orderList"></detail-list>
  </div>
</template>
<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailInfo from './components/Detailnfo'
import DetailDoctor from './components/Doctor'
import DetailGoods from './components/Goods'
import DetailRemark from './components/Remark'
import DetailBrand from './components/Brand'
import DetailList from './components/List'

import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailInfo,
    DetailDoctor,
    DetailGoods,
    DetailRemark,
    DetailBrand,
    DetailList
  },
  data () {
    return {
      gallaryImgs: [],
      sightName: '',
      detailinfoList: {},
      doctorList: [],
      orderList: []
    }
  },
  mounted () {
    this.detailAjaxData()
  },
  methods: {
    detailAjaxData () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.detailAjaxDataSuccess)
    },
    detailAjaxDataSuccess (res) {
      let msg = res.data
      console.log(msg.data['' + this.$route.params.id + ''])
      if (msg.ret && msg.data) {
        this.gallaryImgs = msg.data['' + this.$route.params.id + ''].gallaryImgs
        this.sightName = msg.data['' + this.$route.params.id + ''].sightName
        this.detailinfoList = msg.data['' + this.$route.params.id + ''].detail
        this.doctorList = msg.data['' + this.$route.params.id + ''].doctorList
        this.orderList = msg.data['' + this.$route.params.id + ''].orderList
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .detail
    background #eeeeee
</style>
