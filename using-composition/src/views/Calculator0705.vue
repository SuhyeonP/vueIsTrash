<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>

<script>

import {reactive} from 'vue';

export default {
  name: "Calculator0705",
  components: {},
  methods: {},
  data() {},
  setup() {
    // reactive를 이용해서 num1, num2, result 를 실시간 변경사항에 대한 반응형 적용

    let state = reactive({
      num1: 0,
      num2: 0,
      result: 0
    });

    function plusNumbers() {
      state.result = parseInt(state.num1) + parseInt(state.num2);
    }

    return {
      // reactive 로 선언된 state 와 plusNumbers 함수를 반환함으로써 기존 data, methods 옵션처럼 사용이 가능해짐

      state,
      plusNumbers
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
