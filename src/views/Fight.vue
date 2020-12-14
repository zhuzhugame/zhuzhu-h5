<template>
  <div>
    <van-tabbar style="height: 24%; top: 0px">
      <div class="grid-container1">
        <div class="yourPig">
          <van-image width="100%" height="100%" :src="uiZhuzhu" />
        </div>
        <div class="yourState">
          <van-progress
            style="margin-top: 10px"
            color="#ee0a24"
            :percentage="enemyPigHpPer"
            stroke-width="8"
          />
          <van-row>
            <van-col span="4"
              ><van-icon name="fire-o" color="#ee0a24" size="26"
            /></van-col>
          </van-row>
        </div>
      </div>
    </van-tabbar>
    <van-tabbar style="height: 24%; bottom: 0px">
      <div class="grid-container2">
        <div class="myPig">
          <van-image width="100%" height="100%" :src="uiZhuzhu" />
        </div>
        <div class="myState">
          <van-row style="height: 26px">
            <van-col offset="20" span="4"
              ><van-icon name="fire-o" color="#ee0a24" size="26"
            /></van-col>
          </van-row>
          <van-progress
            style="margin-bottom: 20px"
            color="#ee0a24"
            percentage="85"
            stroke-width="8"
          />
        </div>
        <div class="myMenu">
          <van-row>
            <van-col span="12"
              ><van-button @click="attack" plain type="info" block
                >攻</van-button
              ></van-col
            >
            <van-col span="12"
              ><van-button plain type="info" block>守</van-button></van-col
            >
          </van-row>
          <van-row>
            <van-col span="12"
              ><van-button plain type="info" block>绝</van-button></van-col
            >
            <van-col span="12"
              ><van-button plain type="info" block>溜</van-button></van-col
            >
          </van-row>
        </div>
      </div>
    </van-tabbar>
  </div>
</template>

<script>
import { FightService } from '../service/fight.service'
import { Audio } from '../audio/audio'

export default {
  data() {
    return {
      enemyPigHpPer: 100,
      audio玉满堂: new Audio([require('../assets/audio/玉满堂.mp3')]),
      uiZhuzhu: require('../assets/ui/main_zhuzhu.gif')
    }
  },
  async created() {
    const stat = await this.getStat()
    if (stat === null) {
      console.log('新战斗')
      await this.start()
    } else {
      console.log('旧战斗')
    }
    this.audio玉满堂.play()
  },
  beforeDestroy() {
    this.audio玉满堂.stop()
  },
  methods: {
    async getStat() {
      return FightService.getStat()
    },
    async start() {
      return FightService.start()
    },
    async save(newProcess) {
      return FightService.save(newProcess)
    },
    async attack() {
      await this.save({ type: 'attack', damage: 11 })
      this.enemyPigHpPer -= 5
      // 播放动画
    }
  }
}
</script>

<style scoped>
.grid-container2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'myPig myPig myState myState myState'
    'myPig myPig myMenu myMenu myMenu';
}

.grid-container1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'yourState yourState yourState yourPig yourPig'
    'empty1 empty1 empty1 yourPig yourPig';
}

.myPig {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: myPig;
}

.yourPig {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: yourPig;
}

.myState {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: myState;
}

.myMenu {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: myMenu;
}

.yourState {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: yourState;
}

.empty2 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: empty2;
}

.empty1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: empty1;
}
</style>
