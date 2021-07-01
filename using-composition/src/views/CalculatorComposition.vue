<template>
  <div>
    <h2>With Calculator</h2>
    <div>
<!--      <input tpye="text" v-model="state.num1" @keyup="plusNumbers" />-->
      <input tpye="text" v-model="state.num1" />
      <span> + </span>
<!--      <input type="text" v-model="state.num2" @keyup="plusNumbers" />-->
      <input type="text" v-model="state.num2" />
      <span> = </span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>

<script>

import { reactive, computed } from 'vue';

export default {
  name: "CalculatorComposition",
  components: {},
  methods: {},
  data() {
  },
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      // result: 0
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    })
    // reactive 를 이용해서 num1, num2, result 를 실시간 변경사항에 대한 반응형 적용

    // function plusNumbers() {
    //   state.result = parseInt(state.num1) + parseInt(state.num2);
    // }

    return {
      // reactive 로 선언된 state 와 plusNumbers 함수를 반환함으로써 기존 data, methods 옵션처럼 사용이 가능해짐

      state,
      // plusNumbers
    }
  },
  created() {
  },
  mounted() {
  },
  unmounted() {
  },
}
</script>

<style scoped>

</style>
