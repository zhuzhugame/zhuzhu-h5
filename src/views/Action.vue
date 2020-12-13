<template>
  <div class="body">
    <van-grid :column-num="2" square>
      <van-grid-item v-for="scene in scenes" :key="scene.name">
        <Scene :src="scene.image" :opened="scene.opened" :to="scene.to" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Scene from '@/components/Scene.vue'

export default {
  name: 'Action',
  components: {
    Scene
  },
  data() {
    return {
      scenes: [
        {
          name: '战斗',
          opened: true,
          image: require('../assets/ui/战斗.jpg'),
          to: '/fight'
        },
        {
          name: '沙滩',
          opened: false,
          image: require('../assets/ui/沙滩.jpg'),
          to: '/fight'
        },
        {
          name: '食堂',
          opened: false,
          image: require('../assets/ui/食堂.jpg'),
          to: '/fight'
        },
        {
          name: '温泉',
          opened: false,
          image: require('../assets/ui/温泉.jpg'),
          to: '/fight'
        },
        {
          name: '野宿',
          opened: false,
          image: require('../assets/ui/野宿.jpg'),
          to: '/fight'
        },
        {
          name: '游乐场',
          opened: false,
          image: require('../assets/ui/游乐场.jpg'),
          to: '/fight'
        },
        {
          name: '占位1',
          opened: false,
          image: require('../assets/ui/温泉.jpg'),
          to: '/fight'
        },
        {
          name: '占位2',
          opened: false,
          image: require('../assets/ui/野宿.jpg'),
          to: '/fight'
        }
      ]
    }
  },
  methods: {
    goFight() {
      this.$router.push('/fight')
    }
  }
}
</script>

<style scoped>
.body {
  margin-bottom: 54px;
}
</style>
