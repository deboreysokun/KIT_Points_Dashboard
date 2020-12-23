<template>
  <div class="d-flex">
    <v-icon size="35">{{ icons.navIcon }}</v-icon>
    <p>
      <span class="display-1 grey--text mr-4 ">{{ title }}</span
      ><span class="title font-weight-light">{{ details }}</span>
    </p>
  </div>
</template>
<script>
import { mdiViewSequential as navIcon } from "@mdi/js";
export default {
  data: () => ({
    icons: {
      navIcon,
    },
  }),
  props: {
    title: String,
    details: String,
  },
};
</script>
