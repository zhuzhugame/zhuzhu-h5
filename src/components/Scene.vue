<template>
  <div class="border">
    <div class="label" v-if="!opened">暂未开放</div>
    <van-image round class="image" :src="src" @click="goto" />
  </div>
</template>

<script>
export default {
  name: 'Scene',
  props: {
    src: String,
    opened: Boolean,
    to: String
  },
  methods: {
    goto() {
      if (this.opened) {
        this.$router.push(this.to)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border {
  position: relative;
}

.image {
  border-radius: 20%;
}

.label {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 10;
  font-weight: bolder;
  color: red;
}
</style>
