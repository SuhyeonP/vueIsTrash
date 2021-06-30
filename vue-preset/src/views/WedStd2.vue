<template>
  <ul>
    <li :key="index" v-for="(element, index) in userList">
     <p>{{element.name}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "WedStd2",
  components: {},
  data() {
    return {
      userList: [],
    }
  },
  setup() {
  },
  created() {
    this.getUser();
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    async getUser() {
      const test = await this.$api('https://8694e36b-4bc7-4a2a-8a91-2dba137bce33.mock.pstmn.io/users', 'get')
      this.userList = await this.$api('https://8694e36b-4bc7-4a2a-8a91-2dba137bce33.mock.pstmn.io/users', 'get')
      console.log(test)
    },
  },
}
</script>

<style scoped>

</style>