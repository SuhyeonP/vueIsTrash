<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: "ChildDataChange",
  components: {},
  methods: {},
  data() {
    return {
      msg: 'from child'
    }
  },
  setup() {
  },
  created() {
  },
  mounted() {
    this.$emit('send-message', this.msg)
    // 자식에서 부모로 데이터 전송 @emit 을 통해 발생
  },
  unmounted() {
  },
}
</script>

<style scoped>

</style>