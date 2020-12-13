<template>
  <div>
    <div class="empty"></div>
    <div class="grid-container">
      <div class="zhuzhu">
        <van-image width="100%" height="100%" :src="uiZhuzhu" />
      </div>
      <div class="cap">
        <Equipment :src="cap天使王冠" :level="0" />
      </div>
      <div class="clothes">
        <Equipment :src="clothes三角裤" :level="5" />
      </div>
      <div class="shoe"><Equipment :src="shoe皮鞋" :level="10" /></div>
      <div class="weapon">
        <Equipment :src="weapon铁剑" :level="8" />
      </div>
      <div class="cloak">
        <Equipment :src="cloak包裹" :level="0" />
      </div>
    </div>
  </div>
</template>

<script>
import Equipment from '@/components/Equipment.vue'
import { PigService } from '../service/pig.service'

export default {
  name: 'Main',
  components: {
    Equipment
  },
  data() {
    return {
      uiZhuzhu: require('../assets/ui/main_zhuzhu.gif'),
      weapon铁剑: require('../assets/weapon/铁剑.png'),
      cap天使王冠: require('../assets/equipment/cap/天使王冠.png'),
      cloak包裹: require('../assets/equipment/cloak/包裹.png'),
      clothes三角裤: require('../assets/equipment/clothes/三角裤.png'),
      shoe皮鞋: require('../assets/equipment/shoe/皮鞋.png'),

      pig: { name: '', money: 0 }
    }
  },
  created() {
    this.getMyPig()
  },
  methods: {
    async getMyPig() {
      const pig = await PigService.getMy()
      this.pig = pig
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
