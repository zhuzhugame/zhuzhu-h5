<template>
  <div>
    <van-sku
      v-model="show"
      disable-stepper-input
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      reset-stepper-on-hide
      :initial-sku="initialSku"
    >
      <template #sku-header-extra>
        <span>{{ equipment.name }}</span>
        <span>{{ equipment.desc }}</span>
      </template>

      <template #sku-messages>
        <van-cell-group title="信息">
          <van-cell clickable title="精炼 Lv" :value="refineLv" />
          <van-cell clickable title="强化 Lv" :value="strongLv" />
        </van-cell-group>
        <van-cell-group title="属性">
          <van-cell clickable title="勇气" :value="equipment.power" />
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

      <template #sku-actions>
        <div class="van-sku-actions">
          <van-button square size="large" type="danger" @click="wearOrUnwear">
            {{ carrying ? '卸下' : '装备' }}
          </van-button>
        </div>
      </template>

      <template #sku-stepper>
        <div></div>
      </template>
    </van-sku>
  </div>
</template>

<script>
import { PigService } from '../service/pig.service'

export default {
  name: 'EquipmentShow',
  props: {},
  methods: {
    open(data) {
      this.show = true
      this.goods.picture = data.equipment.img
      this.sku.price = data.equipment.baseMoney
      this.equipment = data.equipment
      this.goodsId = data.equipment._id
      this.refineLv = data.refineLv
      this.strongLv = data.strongLv
      this.carrying = data.carrying
      this.pigEquipmentId = data.pigEquipmentId
    },
    async wearOrUnwear() {
      this.carrying
        ? await this.unwear(this.pigEquipmentId)
        : await this.wear(this.pigEquipmentId)
      this.$parent.getMyPigEquipments()
      this.show = false
    },
    onPointClicked() {
      this.show = false
    },
    async wear(id) {
      await PigService.wearEquipment(id)
    },
    async unwear(id) {
      await PigService.unwearEquipment(id)
    }
  },
  data() {
    return {
      pigEquipmentId: '',
      carrying: false,
      refineLv: 0,
      strongLv: 0,
      equipment: { name: '' },
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
