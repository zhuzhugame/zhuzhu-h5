<template>
  <div>
    <van-field v-model="account" label="帐号" />
    <van-field v-model="password" type="password" label="密码" />
    <van-button type="primary" @click="signIn">登录</van-button>
    <van-button type="primary" @click="goRegister">注册</van-button>
  </div>
</template>

<script>
import { AuthService } from '../service/auth.service'

export default {
  name: 'Login',
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    goMain() {
      this.$router.push('/game/main')
    },
    goRegister() {
      this.$router.push('/register')
    },
    async signIn() {
      await AuthService.signIn(this.account, this.password)
      const authUserData = await AuthService.getUser()
      if (authUserData) this.$router.push('/game/main')
    }
  }
}
</script>

<style scoped>
</style>
