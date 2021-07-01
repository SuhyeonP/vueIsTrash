<template>
  <h2>Calculator - toRef</h2>
  <div>
    <input type="text" v-model="num1" />
    <span> + </span>
    <input type="text" v-model="num2" />
    <span> = </span>
    <span>{{result}}</span>
  </div>
</template>

<script>

import { plusCalculator } from "../composition/common";

export default {
  name: "CalculatorToRef",
  components: {},
  methods: {},
  data() {
  },
  setup() {
    let { num1, num2, result } = plusCalculator();

    return {
      num1, num2, result
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
