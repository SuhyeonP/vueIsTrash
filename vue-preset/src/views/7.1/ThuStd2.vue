<template>
  <ThuStd1 title="maybe"/>
  <thu-std3 :test-obj="{name:'test-name', id:'test-id'}" />
  <thu-std3 :test-number="numbering" />
  <button type="button" @click="numbering++">++</button>
  <button type="button" @click="out()">--</button>
</template>

<script>
import ThuStd1 from "../../components/thu/ThuStd1";
import ThuStd3 from "../../components/thu/ThuStd3";

export default {
  name: "ThuStd2",
  components: {
    ThuStd1,
    ThuStd3
  },
  data() {
    return {
      numbering: 32,
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
  methods: {
    out() {
      this.numbering --;
    }
  },
}
</script>

<style scoped>

</style>