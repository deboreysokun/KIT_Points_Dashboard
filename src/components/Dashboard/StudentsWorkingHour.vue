<template>
  <v-card class="mt-3">
    <v-container>
      <v-card-title>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        Students working Hour
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        hide-default-footer
      ></v-data-table>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Semester",
          align: "start",
          sortable: false,
          value: "semester",
        },
        {
          text: "Report Session",
          align: "start",
          sortable: false,
          value: "session",
        },
        {
          text: "Average Hour",
          align: "start",
          sortable: false,
          value: "hour",
        },
      ],
      desserts: [
        {
          semester: "Semester 2",
          session: "164",
          hour: "220",
        },
        {
          semester: "Semester 3",
          session: "230",
          hour: "440",
        },
        {
          semester: "Semester 4",
          session: "92",
          hour: "440",
        },
        {
          semester: "Semester 5",
          session: "0",
          hour: "660",
        },
        {
          semester: " Total",
          session: "486",
          hour: "1760",
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
