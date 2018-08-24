<template>
<div class="amap-page-container">
    <el-amap vid="amapDemo" :plugin="plugin" class="amap-demo">
      <!-- <el-amap-ellipse v-for="ellipse in ellipses" :key="ellipse" :events="ellipse.events" :center="ellipse.center" :radius="ellipse.radius"></el-amap-ellipse> -->
    </el-amap>
</div>
</template>
  <style>
    .amap-page-container {
      width: 100%;
      height:500px;
    }
  </style>
<script>
export default {
  name: 'Map',
  data () {
    let self = this
    return {
      positions: {
        lng: '',
        lat: '',
        address: '',
        loaded: false
      },
      center: [121.59996, 31.197646],
      plugin: [{
        pName: 'Geolocation',
        events: {
          init (o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              console.log(result) //  能获取定位的所有信息
              if (result && result.position) {
                self.str = result.formattedAddress
                self.positions.address = self.str.substring(self.str.indexOf('市') + 1)
                self.positions.lng = result.position.lng
                self.positions.lat = result.position.lat
                self.positions.loaded = true
                self.$nextTick()
                // 把获取的数据提交到 store 的数据中，以便其他单文件组件使用
                // self.$store.commit('POSITION', self.positions)
                // console.log(self.positions)
                // sessionStorage.setItem('id', JSON.stringify(self.positions))
                console.log(result.addressComponent.province)
                let province = result.addressComponent.province
                let city = province.substring(0, province.length - 1)
                console.log(city)
                if (city) {
                  self.$store.commit('POSITION', city)
                }
              }
            })
          }
        }
      }]
    }
  }
}
</script>
