import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCityCommit', city)
    },
    lngAndlat (ctx, obj) {
      console.log(obj)
      ctx.commit('lngAndlat', obj)
    }
  },
  mutations,
  getters: {
    doubleCity () {
      console.log()
    }
  }

})
