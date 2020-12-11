<template>
  <div class="app">
    <van-nav-bar fixed placeholder safe-area-inset-top>
      <template #right>
        <p @click="goAttr">口</p>
      </template>
      <template #left>
        <van-icon size="40px" :name="uiMoney" />333,887
      </template>
    </van-nav-bar>
    <router-view class="center" />
    <van-tabbar v-model="tabIndex" fixed route>
      <van-tabbar-item icon="home-o" replace to="/game/main"
        >猪</van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/game/action"
        >日程</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" replace to="/game/friend"
        >猪圈</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" replace to="/game/home"
        >猪棚</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      uiMoney: require('../assets/ui/money.png')
    }
  },
  methods: {
    goAttr() {
      this.$router.push('/game/attr')
    }
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: fixed;
  overflow: scroll;
}

::-webkit-scrollbar {
  display: none;
}

.center {
  margin-bottom: 52px;
}
</style>
