<template>
  <div>
    <van-image width="100%" height="100%" :src="uiZhuzhu" />
    <van-button type="primary" @click="showWorkbench()">帮忙锤一下</van-button>
    <div v-if="isShowWorkbench" class="workbench">
      <van-swipe
        v-if="isShowWorkbench"
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
          <van-button type="primary" @click="showWorkbench()">锤吧锤吧</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RefineShop',
  props: {},
  data() {
    return {
      isShowWorkbench: false,
      uiZhuzhu: require('../assets/ui/main_zhuzhu.gif')
    }
  },
  methods: {
    showWorkbench() {
      this.isShowWorkbench = !this.isShowWorkbench
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.workbench {
  position: absolute;
  top: calc(50% - 25vw);
  left: 0;
  width: 100%;
  z-index: 10000;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
