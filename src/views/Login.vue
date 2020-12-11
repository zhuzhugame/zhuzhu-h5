<template>
  <div>
    <van-field v-model="text" label="帐号" />
    <van-field v-model="password" type="password" label="密码" />
    <van-button type="primary" @click="goMain">登录</van-button>
    <van-button type="primary" @click="goRegister">注册</van-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    goMain() {
      this.$router.push('/game/main')
    },
    goRegister() {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
</style>
