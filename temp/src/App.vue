<template>
  <v-app>
    <DataLoader />
    <DataReader />
    <DatasetReader1 />
  </v-app>
</template>

<script>
import DataLoader from './components/DataLoader.vue';
import DataReader from './components/TestCode.vue';
import DatasetReader1 from './components/DatasetReader1.vue';
export default {
  name: 'App',

  components: {
    DataLoader,
    DataReader,
    DatasetReader1
  },

  data: () => ({
    //
  })
};
</script>
