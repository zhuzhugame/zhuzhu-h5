<template>
  <div id="app">
    <van-nav-bar>
      <template #right>
        <p @click="goAttr">口</p>
      </template>
      <template #left> 猪币 333,887 </template>
    </van-nav-bar>
    <router-view />
    <van-tabbar v-model="tabIndex">
      <van-tabbar-item icon="home-o" to="/">猪</van-tabbar-item>
      <van-tabbar-item icon="search" to="/action">日程</van-tabbar-item>
      <van-tabbar-item icon="friends-o">猪圈</van-tabbar-item>
      <van-tabbar-item icon="setting-o">猪棚</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    goAttr() {
      this.$router.push("/attr")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: fixed;
  background-image: url('assets/bg/main.png');
}
</style>
