<template>
  <div>
    <div>win numbers</div>
    <div id="result">
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"/>
    </div>
    <div>
      bonus
    </div>
    <lotto-ball v-if="bonus" :number="bonus"/>
    <button v-if="redo" @click="onClickRedo">one more</button>
  </div>
</template>

<script>

import LottoBall from "./LottoBall.vue";

// function getWinNumbers(){
//   console.log(1)
//   const candidate = Array(45).fill().map((element, index)=> index + 1);
//   const shuffle = [];
//   while(candidate.length > 0){
//     shuffle.push(candidate.splice(Math.floor(Math.random() + candidate.length),1)[0])
//   }
//   const bonusNum = shuffle[shuffle.length - 1];
//   const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
//   return [...winNumbers, bonusNum]
// }
//
// const timeouts = [];

export default {
  name: "Std",
  components: {
    LottoBall,
  },
  data() {
    return {
      winNumbers: 0,
      winBalls: [],
      bonus: null,
      redo: false,
      timeouts: []
    }
  },
  methods: {
    getWinNumbers() {
      console.log('getWinNumbers');
      const candidate = Array(45).fill(null).map((v, i) => i + 1);
      const shuffle = [];
      while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
      }
      const bonusNumber = shuffle[shuffle.length - 1];
      const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
      return [...winNumbers, bonusNumber];
    },
    onClickRedo() {
      this.winNumbers = this.getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
      this.showBalls();
    },
    showBalls() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        this.timeouts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }
      this.timeouts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 7000);
    }
  },
  mounted() {
    this.showBalls()
  },
  beforeDestroy() {
    this.timeouts.forEach((t) => {
      clearTimeout(t)
    })
  }
}
</script>

<style scoped>

</style>
