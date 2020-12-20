<template>
  <div class="body">
    <div v-show="index === 0" id="radar"></div>
    <div v-show="index === 1">
      <van-cell-group title="信息">
        <van-cell title="猪名" :value="pig.name" />
        <van-cell title="猪龄" value="1年2月" />
      </van-cell-group>
      <van-cell-group title="属性">
        <van-cell
          v-for="item in data"
          :key="item.name"
          :title="item.name"
          :value="item.point"
        />
      </van-cell-group>
    </div>
    <div v-show="index === 2">
      <EquipmentShow ref="equipmentShow" />
      <van-grid :column-num="4">
        <van-grid-item
          v-for="pigEquipment in pigEquipments"
          @click="showEquipmentDialog(pigEquipment)"
          :key="pigEquipment._id"
          :text="`${pigEquipment.equipment.name} ${
            pigEquipment.carrying ? '(已装备)' : ''
          }`"
        >
          <template #icon>
            <van-image
              width="40px"
              height="40px"
              :src="pigEquipment.equipment.img"
            />
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <van-tabs type="card" class="nav" v-model="index">
      <van-tab title="体检图" />
      <van-tab title="详细" />
      <van-tab title="包裹" />
      <van-tab title="绝活" />
    </van-tabs>
  </div>
</template>

<script>
import { Radar } from '@antv/g2plot'
import { PigService } from '../service/pig.service'
import { AssetsService } from '../service/assets.service'
import EquipmentShow from '@/components/EquipmentShow.vue'

export default {
  components: {
    EquipmentShow
  },
  name: 'Attr',
  data() {
    return {
      pig: {
        name: '',
        health: 0,
        simple: 0,
        fat: 0,
        clean: 0,
        solid: 0,
        power: 0
      },
      radarPlot: null,
      index: 0,
      pigEquipments: []
    }
  },
  computed: {
    data: function () {
      return [
        { name: '憨厚', point: this.pig.simple },
        { name: '勇敢', point: this.pig.power },
        { name: '卫生', point: this.pig.clean },
        { name: '体重', point: this.pig.fat },
        { name: '健康', point: this.pig.health },
        { name: '结实', point: this.pig.solid }
      ]
    }
  },
  methods: {
    showEquipmentDialog(pigEquipment) {
      this.$refs.equipmentShow.open({
        equipment: pigEquipment.equipment,
        refineLv: pigEquipment.refineLv,
        strongLv: pigEquipment.strongLv,
        carrying: pigEquipment.carrying,
        pigEquipmentId: pigEquipment._id
      })
    },
    async getMyPig() {
      const pig = await PigService.getMy()
      this.pig = pig
      this.radarPlot.changeData(this.data)
    },
    async getMyPigEquipments() {
      const pigEquipments = await PigService.getMyEquipments()
      this.pigEquipments = pigEquipments
      this.pigEquipments.forEach((v) => {
        if (v.equipment != null) {
          Object.assign(v.equipment, {
            img: AssetsService.getById(v.equipment.imgId)
          })
        }
      })
    }
  },
  mounted() {
    const radarPlot = new Radar('radar', {
      data: this.data,
      xField: 'name',
      yField: 'point',
      meta: {
        point: {
          alias: '点',
          min: 0,
          nice: true
        }
      },
      xAxis: {
        tickLine: null
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)'
        }
      },
      area: {}
    })
    this.radarPlot = radarPlot
    radarPlot.render()
    this.getMyPig()
    this.getMyPigEquipments()
  }
}
</script>

<style scoped>
.body {
  position: relative;
  width: 94%;
  max-height: calc(100% - 120px);
  padding: 3%;
  height: 94%;
}
.nav {
  position: absolute;
  bottom: 20px;
  width: 100%;
  left: 0%;
}
</style>
