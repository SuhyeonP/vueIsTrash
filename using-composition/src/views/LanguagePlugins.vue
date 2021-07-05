<template>
  <div>
    <h2>{{$translate("ko.hi")}}</h2>
    <h2>{{$translate("en.hi")}}</h2>
    <h2>{{i18n.ko.hi}}</h2>
    <h2>{{i18n.en.hi}}</h2>
  </div>
</template>

<script>
export default {
  name: "LanguagePlugins",
  components: {},
  methods: {},
  inject:['i18n'], // provide 로 전달된 i18n 을 inject 로 사용할 수 있음
  data() {
  },
  setup() {
  },
  created() {
  },
  mounted() {
    console.log(this.i18n)
  },
  unmounted() {
  },
}
</script>

<style scoped>

</style>
