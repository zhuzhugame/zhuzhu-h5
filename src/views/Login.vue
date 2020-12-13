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
import store from '../store'

export default {
  name: 'Login',
  data() {
    return {
      account: '',
      password: ''
    }
  },
  created() {
    if (store.hasAccessToken()) {
      this.$router.push('/game/main')
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
      const data = await AuthService.signIn(this.account, this.password)
      if (data) this.$router.push('/game/main')
    }
  }
}
</script>

<style scoped>
</style>
