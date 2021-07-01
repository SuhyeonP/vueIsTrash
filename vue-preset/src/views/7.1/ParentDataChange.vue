<template>
  <child-data-change @send-message="fromChild" ref="child_data_change" />
  <input type="text" v-model="valueOfChange" />
  <button type="button" @click="changeChildData">change child data</button>
</template>

<script>
import ChildDataChange from "../../components/thu/ChildDataChange";

export default {
  name: "ParentDataChange",
  components: {
    ChildDataChange
  },
  methods: {
    changeChildData () {
      this.$refs.child_data_change.msg = this.valueOfChange
    },
    fromChild (data) {
      console.log(data)
    }
  },
  data() {
    return {
      valueOfChange: ''
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