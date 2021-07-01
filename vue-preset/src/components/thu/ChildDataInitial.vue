<template>
 <button type="button" @click="childFunc" ref="btn">자식 컴포넌트 데이터 변경</button>
</template>

<script>
export default {
  name: "ChildDataInitial",
  components: {},
  methods: {
    childFunc() {
      this.msg = 'change msg'
    }
  },
  data() {
    return {
      msg: 'msg',
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