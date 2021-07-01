<template>
  <button type="button" @click="checkChild">load child data</button>
  <child-data-initial ref="child_data_initial" />
</template>

<script>
import ChildDataInitial from "../../components/thu/ChildDataInitial";

export default {
  name: "ParentDataInitial",
  components: {
    ChildDataInitial
  },
  methods: {
    checkChild() {
      console.log(this.msg)
    }
  },
  computed:{
    msg() {
      return this.$refs.child_data_initial.msg;
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