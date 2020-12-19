<template>
  <div>
    <van-sku
      v-model="show"
      stepper-title="数量"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      show-add-cart-btn
      reset-stepper-on-hide
      :initial-sku="initialSku"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    >
      <!-- 自定义 sku-header-price -->
      <template #sku-header-price="props">
        <div class="van-sku__goods-price">
          <span class="van-sku__price-symbol">猪币</span
          ><span class="van-sku__price-num">{{ props.price }}</span>
        </div>
      </template>

      <!-- 自定义 sku actions -->
      <template #sku-actions="props">
        <div class="van-sku-actions">
          <van-button
            square
            size="large"
            type="warning"
            @click="onPointClicked"
          >
            便宜点不
          </van-button>
          <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
          <van-button
            square
            size="large"
            type="danger"
            @click="props.skuEventBus.$emit('sku:buy')"
          >
            买买买!
          </van-button>
        </div>
      </template>
    </van-sku>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  props: {},
  methods: {
    open(data) {
      this.show = true
      this.goods.picture = data.image
    },
    onBuyClicked() {
      console.log('onBuyClicked')
    },
    onAddCartClicked() {
      console.log('onAddCartClicked')
    },
    onPointClicked() {
      console.log('onPointClicked')
    }
  },
  data() {
    return {
      show: false,
      messageConfig: {},
      quota: 0,
      quotaUsed: 0,
      goodsId: '2222',
      initialSku: {
        selectedNum: 1
      },
      sku: {
        tree: [],
        list: [],
        price: '300',
        stock_num: 10000,
        collection_id: 2261,
        none_sku: true,
        hide_stock: true
      },
      goods: {
        picture: null
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
