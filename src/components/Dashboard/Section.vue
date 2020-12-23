<template>
  <v-col cols="12" sm="12" md="3" id="column">
    <p>
      <span
        ><v-icon size="18" class="mb-1">{{ titleIcon }}</v-icon></span
      ><span class="font-weight-bold">{{ title }}</span
      ><span id="detail">{{ titleDetail }}</span>
    </p>
    <p id="column" :class="'display-1 font-weight-bold ' + titleColor">
      {{ points }}
    </p>
    <p>
      <span class="font-weight-bold green--text font-italic mr-2">{{ details }}</span
      ><span class="font-weight-light" id="detailText">{{ detailsText }}</span>
    </p>
  </v-col>
</template>
<script>
export default {
  props: {
    title: String,
    titleColor: String,
    titleDetail: String,
    titleIcon: Object,
    points: String,
    details: String,
    detailsText: String,
  },
};
</script>
<style>
#detail {
  font-size: 11px;
}
#column {
  line-height: 13px;
}
#detailText {
  font-size: 13px;
}
</style>
