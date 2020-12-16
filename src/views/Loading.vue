<template>
  <div>
    资源加载中...
    {{ percent }}% <br />{{ loaded }} / {{ total }}
  </div>
</template>

<script>
import preload from '../provider/preload'

export default {
  data() {
    return {
      loaded: 0,
      total: 0
    }
  },
  watch: {
    percent(newVal, oldVal) {
      if (newVal === 100) {
        setTimeout(() => {
          this.$router.push('/login')
        }, 600)
      }
    }
  },
  computed: {
    percent: function () {
      return Math.floor((this.loaded / this.total) * 100)
    }
  },
  mounted() {
    const queue = preload.getQueue()
    this.total = queue._numItems
    this.total += 2
    import('../vant').then(() => {
      this.loaded++
    })
    import('../router/loadRoute').then(() => {
      this.loaded++
    })
    queue.on('fileload', (event) => {
      this.loaded++
    })
    queue.on('error', (event) => {
      console.log(event)
    })
  }
}
</script>

<style scoped>
</style>
