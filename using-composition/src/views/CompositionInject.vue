<template>
  <h1>{{title}}</h1>
  <h2>{{subT}}</h2>
</template>

<script>

import {inject} from 'vue';

export default {
  name: "CompositionInject",
  components: {},
  methods: {},
  data() {
  },
  setup() {
    const title = inject('title');
    const subT = inject('subT');
    return { title, subT };
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
