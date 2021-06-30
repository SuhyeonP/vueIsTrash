<template>
  <p>name: {{testObj.name}}</p>
  <p>id: {{testObj.id}}</p>
  <p>{{testNumber}}</p>
</template>

<script>
export default {
  name: "ThuStd3",
  components: {},
  props:{
    testObj:{
      type: Object,
      default:{},
    },
    testNumber:{
      type: Number,
      default: 1,
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
  methods: {},
}
</script>

<style scoped>

</style>