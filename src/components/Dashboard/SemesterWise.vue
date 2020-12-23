<template>
  <v-card class="mt-3">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card-title>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            Semester Wise
          </v-card-title>
          <v-card flat>
            <v-data-table
              :headers="headers"
              :items="desserts"
              hide-default-header
              hide-default-footer
            ></v-data-table> </v-card
        ></v-col>
        <v-col cols="12" md="8">
          <div id="myChart2" style="height: 350px;"></div>
        </v-col>
      </v-row>
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
          value: "name",
        },
      ],
      desserts: [
        {
          name: " Semester 2 - Rank C",
        },
        {
          name: " Semester 3 - Rank B",
        },
        {
          name: " Semester 4 - Rank B",
        },
        {
          name: " Semester 5 - Rank B",
        },
      ],
    };
  },
  methods: {
    renderChart() {
      var chart = new CanvasJS.Chart("myChart2", {
        animationEnabled: true,
        legend: {
          cursor: "pointer",
        },
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        axisY: {
          lineColor: "black",
          labelFontColor: "black",
          tickColor: "#4F81BC",
          crosshair: {
            enabled: true,
          },
        },
        axisX: {
          crosshair: {
            enabled: true,
          },
        },
        data: [
          {
            toolTipContent:
              "{x}<br>Estimate: {y}<br>Actual: {y}<br>Propose: {y}",
            type: "column",
            showInLegend: true,
            legendText: "Overall Points",
            dataPoints: [
              { y: 8.37 },
              { y: 11.29 },
              { y: 0.13 },
              { y: 0.12 },
              { y: 58.5 },
            ],
          },
        ],
      });
      chart.render();
    },
  },
  mounted() {
    this.renderChart();
  },
};
</script>
<style>
.headers {
  font-size: 20px;
}
.tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
