<model-layout>
  <template v-slot:header>
    <h1>title</h1>
  </template>
  <template v-slot:default>
    <p>pop up content1</p>
    <p>pop up content2</p>
  </template>
  <template v-slot:footer>
    <button type="button">close</button>
  </template>
</model-layout>

<script>
export default {
  name: "Modal",
  components: {},
  methods: {},
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