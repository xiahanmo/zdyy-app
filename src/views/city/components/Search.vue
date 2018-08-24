<template>
  <div>
    <div class="header">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="content" ref="search" v-show="keyword">
      <ul>
        <li class="border-bottom" v-for="(items,index) of list" :key="index" @click="handleCityClick(items.name)">{{items.name}}</li>
        <li v-show="hasNOData">没有更多匹配</li>
      </ul>
    </div>

  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNOData () {
      return !this.keyword.length
    }
  },
  methods: {
    handleCityClick (city) {
      console.log(city)
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
      this.keyword = ''
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.name.indexOf(this.keyword) > -1 || value.spell.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
.header
  height $headerHeight
  line-height $headerHeight
  background $bgColor
  text-align center
  color #ffffff
  font-size 28px
  position relative
  padding 0 20px
  margin auto
  z-index 10
  .search-input
    padding 0 10px
    display inline-block
    width 100%
    border-radius 10px
    text-align center
    color #666666
    height 62px
    line-height 62px
    box-sizing border-box
.content
  width 100%
  position absolute
  top 1.68rem
  right 0
  left 0
  bottom 0
  overflow hidden
  background #cccccc
  z-index 1
  li
    padding 20px
    background #ffffff
    color #333333
</style>
