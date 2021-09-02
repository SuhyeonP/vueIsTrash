<template>
  <v-app>
    <DataLoader />
    <DataReader />
  </v-app>
</template>

<script>
import DataLoader from './components/DataLoader.vue';
import DataReader from './components/TestCode.vue';
export default {
  name: 'App',

  components: {
    DataLoader,
    DataReader,
  },

  data: () => ({
    //
  })
};
</script>
