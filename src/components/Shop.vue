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
    >
      <template #sku-header-extra>
        <span>{{ saleItem.name }}</span>
        <span>{{ saleItem.desc }}</span>
      </template>

      <template #sku-messages>
        <van-cell-group title="属性">
          <van-cell clickable title="勇气" :value="saleItem.power" />
        </van-cell-group>
        <van-cell-group title="精炼">
          <van-cell clickable value="精炼+5时, 习得天猪下凡" />
        </van-cell-group>
      </template>

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
            猪境贫寒
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
import { Toast } from 'vant'
import { EquipmentService } from '../service/equipment.service'
export default {
  name: 'Shop',
  props: {},
  methods: {
    open(data) {
      this.show = true
      this.goods.picture = data.saleItem.img
      this.sku.price = data.saleItem.baseMoney
      this.saleItem = data.saleItem
      this.goodsId = data.saleItem._id
    },
    onBuyClicked(sku) {
      EquipmentService.buy(sku.goodsId, sku.selectedNum).then((res) => {
        Toast.setDefaultOptions({ duration: 1000 })
        Toast.success('购买成功')
        this.show = false
      })
    },
    onPointClicked() {
      this.show = false
    }
  },
  data() {
    return {
      saleItem: { name: '' },
      show: false,
      messageConfig: {},
      quota: 0,
      quotaUsed: 0,
      goodsId: '',
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
