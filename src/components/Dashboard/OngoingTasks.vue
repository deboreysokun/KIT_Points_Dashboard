<template>
  <v-card>
    <v-container>
      <CardHeader title="Ongoing Tasks" />
      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-default-footer
      ></v-data-table>
    </v-container>
  </v-card>
</template>

<script>
import CardHeader from "./CardHeader";
export default {
  components: { CardHeader },
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        {
          text: "Actual Hour",
          align: "start",
          value: "Actualhour",
        },
        {
          text: "Start Date",
          align: "start",
          value: "startdate",
        },
        {
          text: "End Date",
          align: "start",
          value: "enddate",
        },
      ],
      desserts: [
        {
          name: " Printing the targeted products",
          Actualhour: "10.00",
          startdate: "2020-02-13",
          enddate: "2020-02-29",
        },
      ],
    };
  },
};
</script>
<style>
.headers {
  font-size: 20px;
}
</style>
