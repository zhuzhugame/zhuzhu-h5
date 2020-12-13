<template>
  <div>
    真的要把我要送去屠宰场嘛?
    <van-image :src="image" />
    <van-button type="primary">杀!</van-button>
    <van-button type="info">刀下留猪</van-button>
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
