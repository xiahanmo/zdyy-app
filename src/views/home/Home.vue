<template>
  <div>
    <tab-bar></tab-bar>
    <home-header></home-header>
    <home-list :list="recommendList"></home-list>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import TabBar from '../components/TabBar'
import HomeList from './components/List'
import Axios from 'axios'

export default {
  name: 'Home',
  components: {
    TabBar,
    HomeHeader,
    HomeList
  },
  data () {
    return {
      recommendList: []
    }
  },
  methods: {
    homeAjaxData () {
      Axios.get('/api/index.json')
        .then(this.homeAjaxDataSuccess)
        .catch(this.homeAjaxDataError)
    },
    homeAjaxDataSuccess (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        console.log(data.recommendList)
        this.recommendList = data.recommendList
      }
    },
    homeAjaxDataError (error) {
      console.log(error)
    },
    getCurrentLocation () {
      if (navigator.geolocation) {
        let that = this
        navigator.geolocation.getCurrentPosition(function (position) {
          // 显示地理信息
          // let longitude = position.coords.longitude
          // let latitude = position.coords.latitude
          let lngAndlat = {
            'longitude': position.coords.longitude,
            'latitude': position.coords.latitude
          }
          console.log(lngAndlat.longitude, lngAndlat.latitude)
          // showObject(position.coords, 0)
          that.$store.dispatch('lngAndlat', lngAndlat)
        }, function (err) {
          // 错误处理
          switch (err.code) {
            case 1:
              alert('位置服务被拒绝。')
              break

            case 2:
              alert('暂时获取不到位置信息。')
              break

            case 3:
              alert('获取信息超时。')
              break

            default:
              alert('未知错误。')
              break
          }
        }, {
          enableHighAccuracy: true,
          maximumAge: 100,
          accuracy: 100
        })
      } else {
        alert('你的浏览器不支持使用HTML5来获取地理位置信息')
      }
    }
  },
  mounted () {
    this.homeAjaxData()
    this.getCurrentLocation()
  }
}
</script>
<style lang="stylus" scoped>

</style>
