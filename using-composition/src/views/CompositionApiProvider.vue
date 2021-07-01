<template>
  <CompositionInject />
</template>

<script>

import { provide } from 'vue';
import CompositionInject from './CompositionInject.vue';

export default {
  name: "CompositionApiProvide",
  components: {
    CompositionInject
  },
  methods: {},
  data() {
  },
  setup() {
    provide('title', 'Vue.js project')
    provide('subT', 'sub')
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
