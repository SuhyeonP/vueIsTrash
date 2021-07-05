<template>
  <input type="text" v-model="state.num1" />
  <span> + </span>
  <input type="text" v-model="state.num2" />
  <span> = </span>
  <span>{{state.result}}</span>
</template>

<script>

import { computed, reactive } from 'vue';

export default {
  name: "CalculatorSetup",
  components: {},
  methods: {},
  data() {
  },
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
    })

    return {
      state,
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
