<template>
  <v-card flat>
    <v-container>
      <v-row>
        <Section
          v-for="(item, index) in items"
          :key="index"
          :title="item.title"
          :points="item.points"
          :titleDetail="item.titleDetail"
          :titleColor="item.titleColor"
          :titleIcon="item.icon"
          :details="item.details"
          :detailsText="item.detailsText"
        />
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import Section from "./Section";
import {mdiStar, mdiFileDocument} from "@mdi/js"
export default {
  components: {
    Section,
  },
  data: () => ({
    items: [
      {
        title: "Total Projects",
        titleColor: "grey--text",
        titleDetail: "",
        points: "5",
        details: "0 ",
        detailsText:"project to approve",
        icon:mdiFileDocument
      },
      {
        title: "Target Points",
        titleColor: "purple--text",
        titleDetail: " Up to current semester",
        points: "58.5",
        details: "170 ",
        detailsText:"Minimum required points",
        icon:mdiStar
      },
      {
        title: "Total Actual Points",
        titleColor: "red--text",
        titleDetail: "Time-based",
        points: "11.29",
        details: "8.37",
        detailsText: "Estimate points",
        icon:mdiStar
      },
      {
        title: "Total Acquired points",
        titleColor: "blue--text",
        titleDetail: "Value-based",
        points: "0.12",
        details: "0.13",
        detailsText: "Propose points",
        icon:mdiStar
      },
    ],
  }),
};
</script>
