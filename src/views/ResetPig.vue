<template>
  <div>
    大猪蹄子, 不要我了嘛?
    <van-image :src="image" />
    <van-button type="primary">不要!</van-button>
    <van-button type="info">认错留猪</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require('../assets/ui/reset_pig.gif')
    }
  }
}
</script>

<style scoped>
</style>
