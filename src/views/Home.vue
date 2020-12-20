`<template>
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
      <van-tab title="铁匠猪"><Workbench /></van-tab>
      <van-tab title="猪猪商社">
        <Shop ref="shop" />
        <van-cell-group title="武器猪">
          <van-grid :column-num="3">
            <van-grid-item
              v-for="saleItem in shopSaleList"
              @click="showBuyDialog(saleItem)"
              :key="saleItem._id"
              :text="saleItem.name"
            >
              <template #icon>
                <van-image width="40px" height="40px" :src="saleItem.img" />
              </template>
            </van-grid-item>
          </van-grid> </van-cell-group
      ></van-tab>
      <van-tab title="客服猪">
        <van-button type="primary" block to="/reset_pig">换个新猪猪</van-button>
        <van-button type="primary" block @click="goLogin">换个帐号</van-button>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Workbench from '@/components/Workbench.vue'
import Shop from '@/components/Shop.vue'
import store from '../store'
import { EquipmentService } from '../service/equipment.service'
import { AssetsService } from '../service/assets.service'

export default {
  components: {
    Workbench,
    Shop
  },
  data() {
    return {
      activeKey: 0,
      active: 0,
      image: null,
      shopSaleList: []
    }
  },
  created() {
    this.getShopSaleList()
  },
  methods: {
    goLogin() {
      store.removeAccessToken()
      this.$router.push('/login')
    },
    showBuyDialog(saleItem) {
      this.$refs.shop.open({
        saleItem
      })
    },
    async getShopSaleList() {
      this.shopSaleList = await EquipmentService.findAllSale()
      this.shopSaleList.forEach((v) => {
        Object.assign(v, { img: AssetsService.getById(v.imgId) })
      })
    }
  }
}
</script>

<style scoped>
</style>
