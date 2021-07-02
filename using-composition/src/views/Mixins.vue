<template>

</template>

<script>

import ApiMixin from '../api.js';

export default {
  name: "Mixins",
  mixins: [ApiMixin],
  components: {},
  methods: {},
  data() {
    return {
      userList: []
    }
  },
  setup() {
  },
  created() {
  },
  async mounted() {
    this.userList = await this.$callAPI('https://jsonplaceholder.typicode.com/users','get');
    console.log(this.userList)
  },
  unmounted() {
  },
}
</script>

<style scoped>

</style>
