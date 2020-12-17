<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="管家猪">
        <van-cell-group title="包裹">
          <van-grid :column-num="5">
            <van-grid-item
              v-for="value in 7"
              :key="value"
              icon="photo-o"
              text="文字"
            />
          </van-grid>
        </van-cell-group>
      </van-tab>
      <van-tab title="铁匠猪"><RefineShop /></van-tab>
      <van-tab title="商人猪">内容 2</van-tab>
      <van-tab title="客服猪">
        <van-button type="primary" block to="/reset_pig">换个新猪猪</van-button>
        <van-button type="primary" block @click="goLogin">换个帐号</van-button>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import RefineShop from '@/components/RefineShop.vue'
import store from '../store'

export default {
  components: {
    RefineShop
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    goLogin() {
      store.removeAccessToken()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
</style>
