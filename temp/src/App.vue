<template>
  <v-app>
    <DataLoader />
  </v-app>
</template>

<script>
import DataLoader from './components/DataLoader.vue';
export default {
  name: 'App',

  components: {
    DataLoader,
  },

  data: () => ({
    //
  })
};
</script>
