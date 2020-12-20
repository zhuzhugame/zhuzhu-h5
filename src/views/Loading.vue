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
      total: 0,
      error: 0
    }
  },
  watch: {
    percent(newVal, oldVal) {
      if (newVal >= 100) {
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000)
      }
    },
    watchErrorCount(newVal, oldVa) {
      if (newVal > 0) {
        alert('有异常')
        location.reload()
      }
    }
  },
  computed: {
    percent: function () {
      return Math.floor((this.loaded / this.total) * 100)
    },
    watchErrorCount: function () {
      return this.error
    }
  },
  mounted() {
    const queue = preload.getQueue()
    this.total = queue._numItems
    this.total += 3
    import('../vant')
      .then(() => {
        this.loaded++
      })
      .catch((e) => {
        console.log(e)
        this.error++
      })
    import('../router/loadRoute')
      .then(() => {
        this.loaded++
      })
      .catch((e) => {
        console.log(e)
        this.error++
      })
    import('../components/preload')
      .then(() => {
        this.loaded++
      })
      .catch((e) => {
        console.log(e)
        this.error++
      })
    queue.on('fileload', (event) => {
      this.loaded++
    })
    queue.on('error', (event) => {
      this.error++
      console.log(event)
    })
  }
}
</script>

<style scoped>
</style>
