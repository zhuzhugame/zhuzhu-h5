<template>
  <div>
    资源加载中...
    <van-progress :percentage="percent" />
    {{ loaded }} / {{ total }}
  </div>
</template>

<script>
import preload from '../provider/preload'

export default {
  data() {
    return {
      percent: 0,
      size: 0,
      loaded: 0,
      total: 0
    }
  },
  async mounted() {
    const queue = preload.getQueue()
    this.loaded = queue._numItemsLoaded
    this.total = queue.total
    queue.on('progress', (event) => {
      this.loaded = queue._numItemsLoaded
      this.percent = Math.floor((this.loaded / this.total) * 100)
    })
    queue.on('error', (event) => {
      console.log(event)
    })
    queue.on('complete', () => {
      this.percent = 100
      setTimeout(() => {
        this.$router.push('/login')
      }, 1000)
    })
  }
}
</script>

<style scoped>
</style>
