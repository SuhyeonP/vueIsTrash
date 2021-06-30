<template>
  <button type="button" @click="childFunc" ref="btn">click</button>
</template>

<script>
export default {
  name: "ButtonPass",
  components: {},
  methods: {
    childFunc () {
      // 부모 컴포넌트에서 자식 컴포넌트의 이벤트 직접발생시키기
      console.log('happen on parent')
    },
  },
  data() {
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