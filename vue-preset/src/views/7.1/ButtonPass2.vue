<template>
  <button-pass @send-message="sendMessage" ref="button_pass" />
  <call-from-parent @send-message="sendMessage2" ref="call_from_parent" />
</template>

<script>
import ButtonPass from "../../components/thu/ButtonPass";
import CallFromParent from "../../components/thu/CallFromParent";

export default {
  name: "ButtonPass2",
  components: {
    ButtonPass,
    CallFromParent
  },
  methods: {},
  data() {},
  setup() {
  },
  created() {
  },
  mounted() {
    this.$refs.button_pass.$refs.btn.click();
    this.$refs.call_from_parent.callFromParent();
  },
  unmounted() {
  },
}
</script>

<style scoped>

</style>