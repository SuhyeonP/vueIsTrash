<template>

</template>

<script>
export default {
  name: "CallFromParent",
  components: {},
  methods: {
    callFromParent () {
      console.log('call from parent')
      // 액션없이 바로 호출됨
      // 부모에서 바로 호출되는거
    }
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