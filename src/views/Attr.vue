<template>
  <div>
    <div id="c1"></div>
  </div>
</template>

<script>
import { Radar } from '@antv/g2plot'
import { PigService } from '../service/pig.service'

export default {
  name: 'Attr',
  data() {
    return {
      pig: { health: 0, simple: 0, fat: 0, clean: 0, solid: 0, power: 0 },
      radarPlot: null
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
  created() {
    this.getMyPig()
  },
  methods: {
    async getMyPig() {
      const pig = await PigService.getMy()
      this.pig = pig
      this.radarPlot.changeData(this.data)
    }
  },
  mounted() {
    const radarPlot = new Radar('c1', {
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
  }
}
</script>

<style scoped>
</style>
