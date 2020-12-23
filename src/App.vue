<template>
  <v-app>
  <Navbar/>
    <v-content class="grey lighten-5">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
 
</template>

<script>
import Navbar from '@/components/Navbar';
import Chart from 'chart.js';

export default {
  name: 'App',
  components: {
  Navbar,

  
  },
  data: () => ({
    //
  }),
};
</script>