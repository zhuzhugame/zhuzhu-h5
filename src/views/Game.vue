<template>
  <div class="app">
    <van-nav-bar fixed placeholder safe-area-inset-top z-index="100">
      <template #right>
        {{ pig.name }}
        <van-icon
          style="margin-left: 8px"
          size="40px"
          @click="goAttr"
          :name="avatarNormal"
        />
      </template>
      <template #left>
        <van-icon name="gem" size="24px" style="margin-right: 4px" />{{
          pig.money.toLocaleString()
        }}
      </template>
    </van-nav-bar>
    <router-view class="routeView" />
    <van-tabbar v-model="tabIndex" fixed route z-index="100">
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
import { PigService } from '../service/pig.service'

export default {
  data() {
    return {
      tabIndex: 0,
      avatarNormal: require('../assets/avatar/normal.png'),
      pig: { name: '', money: 0 }
    }
  },
  created() {
    this.getMyPig()
  },
  methods: {
    goAttr() {
      this.$router.push('/game/attr')
    },
    async getMyPig() {
      const pig = await PigService.getMy()
      this.pig = pig
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

.routeView {
  width: 100%;
}
</style>
