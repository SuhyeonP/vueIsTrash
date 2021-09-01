<template>
  <v-app>
    <DataLoader />
    <TestCode />
  </v-app>
</template>

<script>
import DataLoader from './components/DataLoader.vue';
import TestCode from './components/TestCode.vue';
export default {
  name: 'App',

  components: {
    DataLoader,
    TestCode,
  },

  data: () => ({
    //
  })
};
</script>
