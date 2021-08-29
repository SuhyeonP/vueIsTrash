<template>
  <v-container>
    <TestCode />
    <br />
    <DataLoader />
  </v-container>
</template>

<script>
import TestCode from './components/TestCode.vue';
import DataLoader from './components/DataLoader.vue';
export default {
  name: 'App',

  components: {
    TestCode,
    DataLoader,
  },

  data: () => ({
    //
  }),
};
</script>
