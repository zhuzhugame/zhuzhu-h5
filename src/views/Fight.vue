<template>
  <div>
    <img :src="aaa" class="circle po1" />
    <img :src="aaa" class="circle po2" />
    <img :src="aaa" class="circle po3" />
    <img :src="aaa" class="circle2 po4" />
    <img :src="aaa" class="circle2 po5" />
    <img :src="aaa" class="circle2 po6" />
    <div class="numb">-3347</div>

    <van-button @click="attack" plain type="info" style="top: 300px"
      >攻</van-button
    >
    <!-- <van-tabbar style="height: 24%; top: 0px">
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
    </van-tabbar> -->
  </div>
</template>

<script>
import { FightService } from '../service/fight.service'
import { Audio } from '../audio/audio'
import anime from 'animejs'

export default {
  data() {
    return {
      aaa: require('../assets/skill/魔法双击.png'),
      enemyPigHpPer: 100,
      audio玉满堂: new Audio([require('../assets/audio/玉满堂.mp3')]),
      uiZhuzhu: require('../assets/ui/main_zhuzhu.gif'),
      audioSkill魔法双击: new Audio([
        require('../assets/audio/skill/魔法双击.wav')
      ])
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
    // this.audio玉满堂.play()
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
      anime({
        targets: '.circle',
        keyframes: [
          {
            opacity: 1,
            delay: anime.stagger(20)
          },
          { opacity: 0, delay: anime.stagger(10, { start: 100 }) }
        ],
        loop: false
      })
      anime({
        targets: '.circle2',
        keyframes: [
          {
            opacity: 1,
            delay: anime.stagger(20, { start: 100 })
          },
          { opacity: 0, delay: anime.stagger(10, { start: 50 }) }
        ],
        loop: false
      })
      anime({
        targets: '.numb',
        keyframes: [
          {
            translateX: 120,
            scale: 2,
            opacity: 1
          },
          { opacity: 0, delay: 300 },
          { translateX: -120, delay: 300 }
        ],
        loop: false
      })
      this.audioSkill魔法双击.play()
    }
  }
}
</script>

<style scoped>
.numb {
  top: 100px;
  left: 0px;
  opacity: 0;
  position: absolute;
}
.circle {
  opacity: 0;
  height: 80px;
  width: 80px;
}
.circle2 {
  opacity: 0;
  height: 80px;
  width: 80px;
}

.po1 {
  position: absolute;
  top: 0px;
  z-index: 20;
}

.po2 {
  position: absolute;
  top: 30px;
  z-index: 30;
}

.po3 {
  position: absolute;
  top: 50px;
  z-index: 40;
}

.po4 {
  position: absolute;
  top: 0px;
  transform: rotate(90deg);
  -ms-transform: rotate(90deg); /* IE 9 */
  -moz-transform: rotate(90deg); /* Firefox */
  -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
  -o-transform: rotate(90deg); /* Opera */
  z-index: 50;
}

.po5 {
  position: absolute;
  top: 30px;
  transform: rotate(90deg);
  -ms-transform: rotate(90deg); /* IE 9 */
  -moz-transform: rotate(90deg); /* Firefox */
  -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
  -o-transform: rotate(90deg); /* Opera */
  z-index: 60;
}

.po6 {
  position: absolute;
  top: 50px;
  transform: rotate(90deg);
  -ms-transform: rotate(90deg); /* IE 9 */
  -moz-transform: rotate(90deg); /* Firefox */
  -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
  -o-transform: rotate(90deg); /* Opera */
  z-index: 70;
}

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
