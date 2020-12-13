<template>
  <div>
    名称必须以 猪 结尾，仅能再输入最多4个汉字
    <van-field v-model="name" label="领养猪猪名" />
    <van-field v-model="account" label="帐号" />
    <van-field v-model="password" type="password" label="密码" />
    <van-button type="primary" @click="signUp">注册</van-button>
    <van-button type="primary" @click="goLogin">返回登录</van-button>
  </div>
</template>

<script>
import { AuthService } from '../service/auth.service'

export default {
  name: 'Register',
  data() {
    return {
      account: '',
      password: '',
      name: ''
    }
  },
  methods: {
    goLogin() {
      this.$router.push('/login')
    },
    async signUp() {
      await AuthService.signUp(this.account, this.password, this.name)
      const data = await AuthService.signIn(this.account, this.password)
      if (data) this.$router.push('/game/main')
    }
  }
}
</script>

<style scoped>
</style>
