<template>
  <div class="border">
    <div class="label" v-if="level > 0">+{{ level }}</div>
    <van-image class="image" :src="src" />
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'Equipment',
  props: {
    src: String,
    level: Number
  },
  mounted() {
    anime({
      targets: ['.border'],
      easing: 'linear',
      scale: 1.05,
      duration: 1200,
      direction: 'alternate',
      loop: true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border {
  position: relative;
  margin: 16px;
  border: 2px solid;
  border-radius: 25px;
}

.image {
  height: 90%;
  width: 90%;
  top: 5%;
  left: 5%;
}

.label {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 10;
  font-weight: bolder;
}
</style>
