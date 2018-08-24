// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VueAMap from 'vue-amap'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
// 解决手机白屏问题，低端浏览器手机不能使用promise
import 'babel-polyfill'
import Vant from 'vant'
import '@/assets/js/rem.js'
// import Vant
import 'vant/lib/vant-css/index.css'
import 'swiper/dist/css/swiper.css'
// 1px border
import '@styles/border.css'
// css reset
import '@styles/reset.css'

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(Vant)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '96ea4b45a14f0d05c1261a35f60382af',
  plugin: ['AMap.Geolocation', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0.11'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
