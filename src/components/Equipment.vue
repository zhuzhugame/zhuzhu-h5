<template>
  <div>
    <van-image height="100%" width="100%" :src="src" />
  </div>
</template>

<script>
export default {
  name: 'Equipment',
  props: {
    msg: String,
    src: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
