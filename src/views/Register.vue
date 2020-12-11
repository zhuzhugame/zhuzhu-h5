<template>
  <div>
    <van-field v-model="text" label="帐号" />
    <van-field v-model="password" type="password" label="密码" />
    <van-button type="primary">注册</van-button>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>
</style>
