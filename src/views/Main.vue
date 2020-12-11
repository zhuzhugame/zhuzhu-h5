<template>
  <div>
    <div class="empty"></div>
    <div class="grid-container">
      <div class="zhuzhu"><Equipment mgs="50" :src="uiZhuzhu" /></div>
      <div class="cap"><Equipment mgs="50" /></div>
      <div class="clothes"><Equipment mgs="50" /></div>
      <div class="shoe"><Equipment mgs="50" /></div>
      <div class="weapon"><Equipment mgs="50" :src="weapon铁剑" /></div>
      <div class="cloak"><Equipment mgs="50" /></div>
    </div>
  </div>
</template>

<script>
import Equipment from '@/components/Equipment.vue'

export default {
  name: 'Main',
  components: {
    Equipment
  },
  data() {
    return {
      uiZhuzhu: require('../assets/ui/main_zhuzhu.gif'),
      weapon铁剑: require('../assets/weapon/铁剑.png')
    }
  }
}
</script>

<style scoped>
.empty {
  height: 50px;
}

.grid-container {
  width: 100%;
  height: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'cap zhuzhu zhuzhu'
    'clothes zhuzhu zhuzhu'
    'shoe weapon cloak';
}

.zhuzhu {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: zhuzhu;
}

.cap {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: cap;
}

.clothes {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: clothes;
}

.shoe {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: shoe;
}

.weapon {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: weapon;
}

.cloak {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: cloak;
}
</style>
