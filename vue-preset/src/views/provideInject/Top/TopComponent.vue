<template>
  <Middle />
</template>

<script>
import Middle from './Middle/Middle'

export default {
  name: "TopComponent",
  components: {
    Middle,
  },
  methods: {},
  data() {
    return {
      items: ['A', 'B']
    }
  },
  provide() {
    return {
      itemLength: this.items.length
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