<template>
  <div>
    <div class="grid-container">
      <div class="left1">
        <van-image
          @click="goFight"
          height="100%"
          width="100%"
          :src="uiPvp"
        />口粮争夺战
      </div>
      <div class="right1"></div>
      <div class="left2"></div>
      <div class="right2">
        <van-image
          height="100%"
          width="100%"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />书店
      </div>
      <div class="left3">
        <van-image
          height="100%"
          width="100%"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />食堂
      </div>
      <div class="right3"></div>
      <div class="left4"></div>
      <div class="right4">
        <van-image
          height="100%"
          width="100%"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />澡堂
      </div>
      <div class="left5">
        <van-image
          height="100%"
          width="100%"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />猪窝
      </div>
      <div class="right5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Action',
  data() {
    return {
      uiPvp: require('../assets/ui/pvp.png')
    }
  },
  methods: {
    goFight() {
      this.$router.push('/fight')
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'left1 right1'
    'left2 right2'
    'left3 right3'
    'left4 right4'
    'left5 right5';
}

.left1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: left1;
}

.right1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    '.'
    '.';
  grid-area: right1;
}

.left2 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: left2;
}

.right2 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: right2;
}

.left3 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: left3;
}

.right3 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: right3;
}

.left4 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: left4;
}

.right4 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: right4;
}

.left5 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: left5;
}

.right5 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: right5;
}
</style>
