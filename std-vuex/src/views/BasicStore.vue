<template>
  <p>count:  {{count}}</p>
  <button type="button" @click="increment">increment</button>
</template>

<script>
export default {
  name: "BasicStore",
  components: {},
  methods: {
    increment () {
      this.$store.commit('increment');
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
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