<template>
  <ul class="list">
    <li class="item"
    v-for="(item,index) of letters"
    :key="index"
    :ref="item"
    :data-id='index'
    @click="handleLetterClick"
    @touchstart.prevent="handleLetterStart"
    @touchmove="handleLetterMove"
    @touchend="handleLetterEnd"
    >{{item}}</li>
  </ul>
</template>>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  mounted () {
    // console.log(this.cities)
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleLetterStart (e) {
      this.touchStatus = true
    },
    handleLetterMove (e) {
      // console.log(e.touches[0].target.innerText)
      // this.$emit('change', e.target.innerText)
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (this.touchStatus) {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }
      }, 16)
    },
    handleLetterEnd (e) {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
.list
  position absolute
  right 0
  top 1.58rem
  bottom 0
  width 50px
  display flex
  flex-direction column
  justify-content center
  align-items center
  .item
    color $bgColor
    padding 5px 10px
</style>
