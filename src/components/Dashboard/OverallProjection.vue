<template>
  <v-card>
    <v-container>
      <CardHeader title="Overall Point Projection" />
      <div id="myChart" style="height: 350px;"></div>
    </v-container>
  </v-card>
</template>
<script>
import CardHeader from "./CardHeader";
export default {
  components: {
    CardHeader,
  },
  methods: {
    renderChart() {
      var chart = new CanvasJS.Chart("myChart", {
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
