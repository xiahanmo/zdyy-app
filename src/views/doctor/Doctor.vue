<template>
  <div>
    <tab-bar></tab-bar>
    <nav-bar></nav-bar>
    <doctor-list :list="recommendList"></doctor-list>
  </div>
</template>
<script>
import NavBar from './components/Header'
import TabBar from '../components/TabBar'
import DoctorList from './components/List'
import Axios from 'axios'
export default {
  name: 'Doctor',
  components: {
    TabBar,
    NavBar,
    DoctorList
  },
  data () {
    return {
      recommendList: []
    }
  },
  methods: {
    doctorAjaxData () {
      Axios.get('/api/doctor.json')
        .then(this.doctorAjaxDataSuccess)
        .catch(this.doctorAjaxDataError)
    },
    doctorAjaxDataSuccess (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        console.log(data.recommendList)
        this.recommendList = data.recommendList
      }
    },
    doctorAjaxDataError (error) {
      console.log(error)
    }
  },
  mounted () {
    this.doctorAjaxData()
  }
}
</script>
<style lang="stylus" scoped>

</style>
