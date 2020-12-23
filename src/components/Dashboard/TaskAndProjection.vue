<template>
  <v-row>
    <v-col cols="12" md="6">
      <OverallProjection />
    </v-col>
    <v-col cols="12" md="6">
      <OngoingTasks />
    </v-col>
  </v-row>
</template>
<script>
import OngoingTasks from "./OngoingTasks";
import OverallProjection from "./OverallProjection";
export default {
  components: {
    OngoingTasks,
    OverallProjection,
  },
};
</script>
