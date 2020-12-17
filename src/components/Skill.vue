<template>
  <div>
    <img :src="image魔法双击" class="circle po1" />
    <img :src="image魔法双击" class="circle po2" />
    <img :src="image魔法双击" class="circle po3" />
    <img :src="image魔法双击" class="circle2 po4" />
    <img :src="image魔法双击" class="circle2 po5" />
    <img :src="image魔法双击" class="circle2 po6" />
    <div class="numb">-3347</div>
  </div>
</template>

<script>
import { Audio } from '../audio/audio'
import anime from 'animejs'

export default {
  name: 'Skill',
  props: {},
  data() {
    return {
      image魔法双击: require('../assets/skill/魔法双击.png'),
      enemyPigHpPer: 100,
      audio玉满堂: new Audio([require('../assets/audio/玉满堂.mp3')]),
      uiZhuzhu: require('../assets/ui/main_zhuzhu.gif'),
      audioSkill魔法双击: new Audio([
        require('../assets/audio/skill/魔法双击.wav')
      ])
    }
  },
  methods: {
    play() {
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
</style>
