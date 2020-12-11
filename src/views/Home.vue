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
      <van-tab title="铁匠猪">内容 2</van-tab>
      <van-tab title="客服猪">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>
</style>
