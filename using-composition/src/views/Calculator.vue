<template>
  <div>
    <h2>Calculator</h2>
    <h4>without composition</h4>
    <div>
      <input tpye="text" v-model="num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model="num2" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{result}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  components: {},
  methods: {
    plusNumbers() {
      this.result = parseInt(this.num1) + parseInt(this.num2);
    }
  },
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  setup() {
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
