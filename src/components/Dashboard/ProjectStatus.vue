<template>
  <v-row>
    <v-col v-for="(item, index) in items" :key="index" cols="12" md="4">
      <ProjectStatusCard
        :title1="item.title1"
        :title2="item.title2"
        :title3="item.title3"
        :content1="item.content1"
        :content1Color="item.content1Color"
        :content2="item.content2"
        :content2Color="item.content2Color"
        :content3="item.content3"
        :content3Color="item.content3Color"
      />
    </v-col>
  </v-row>
</template>
<script>
import ProjectStatusCard from "./ProjectStatusCard";
export default {
  components: {
    ProjectStatusCard,
  },
  data: () => ({
    items: [
      {
        title1: "Ongoing",
        title2: "Estimate",
        title3: "Actual",
        content1: "3",
        content1Color:"grey--text",
        content2: "8.37",
        content2Color:"green--text",
        content3: "7.56",
        content3Color:"red--text",
      },
      {
        title1: "Completed",

        title2: "Estimate",
        title3: "Actual",
        content1: "1",
        content1Color:"green--text",
        content2: "0",
        content2Color:"green--text",
        content3: "3.58",
        content3Color:"red--text",
      },
      {
        title1: "Approved",
        title2: "Actual",
        title3: "Acquired",
        content1: "1",
        content1Color:"blue--text",
        content2: "0.15",
        content2Color:"red--text",
        content3: "0.12",
        content3Color:"blue--text",
      },
    ],
  }),
};
</script>
