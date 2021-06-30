<template>
  <div>
    <h1>Full Name: {{ fullName }}</h1>
    <button type="button" @click="changeName">change</button>
  </div>
</template>

<script>
export default {
  name: "WedStd",
  components: {},
  data() {
    return {
      firstName: 'first-name',
      lastName: 'last-name',
      fullName: '',
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
    changeName() {
      this.firstName = 'uuuuuuuuu'
    },
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + '' + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + '' + this.lastName;
    }
  },
}
</script>

<style scoped>

</style>