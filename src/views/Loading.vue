<template>
  <div>
    资源加载中...
    <van-progress :percentage="percent" />
    {{ size }} M
  </div>
</template>

<script>
import preload from '../provider/preload'

export default {
  data() {
    return {
      percent: 0,
      size: 0
    }
  },
  mounted() {
    const queue = preload.getQueue()
    queue.on('progress', (event) => {
      this.percent = Math.floor(event.progress * 100)
    })
    queue.on('fileload', (event) => {
      const { rawResult } = event
      if (rawResult != null) {
        console.log(rawResult.byteLength)
        this.size += (rawResult.byteLength || 0) / 1024 / 1024
      }
    })
    queue.on('error', (event) => {
      console.log(event)
    })
    queue.on('complete', () => {
      this.percent = 100
      setTimeout(() => {
        this.$router.push('/login')
      }, 500)
    })
  }
}
</script>

<style scoped>
</style>
