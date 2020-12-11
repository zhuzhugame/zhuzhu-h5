<template>
  <div>
    <div id="c1"></div>
  </div>
</template>

<script>
import { Radar } from '@antv/g2plot'
export default {
  name: 'Attr',
  mounted() {
    const data = [
      { name: '憨厚', star: 100 },
      { name: '勇敢', star: 72 },
      { name: '卫生', star: 33 },
      { name: '体重', star: 207 },
      { name: '健康', star: 200 },
      { name: '结实', star: 80 }
    ]
    const radarPlot = new Radar('c1', {
      data: data.map((d) => ({ ...d, star: Math.log(d.star) })),
      xField: 'name',
      yField: 'star',
      meta: {
        star: {
          alias: 'star 数量',
          min: 0,
          nice: true,
          formatter: (v) => Number(v).toFixed(2)
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
      // 开启辅助点
      point: {
        size: 2
      },
      area: {}
    })
    radarPlot.render()
  }
}
</script>

<style scoped>
</style>
