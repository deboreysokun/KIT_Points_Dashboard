<template>
  <v-card flat>
    <v-container>
      <CardHeader title="Project Wise" details="Point Projection" />
      <div id="chartContainer" style="height: 350px; width: 100%;"></div>
    </v-container>
  </v-card>
</template>
<script>
import { Chart } from "chart.js";

import CardHeader from "./CardHeader";
export default {
  components: {
    CardHeader,
  },
  data: () => ({
    icons: {
      navIcon,
    },
  }),
  methods: {
    renderChart() {
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
          },
        },
        axisY: {
          includeZero: true,
          crosshair: {
            enabled: true,
          },
        },
        toolTip: {
          shared: true,
        },
        legend: {
          cursor: "pointer",
        },
        data: [
          {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "line",
            showInLegend: true,
            name: "Actual Points",
            color: "red",
            markerType: "square",
            dataPoints: [
              { label: "Python Bootcamp", y: 1.47 },
              { label: "B6 Sec A At Coder Training", y: 0 },
              { label: "Plastic Trash 3D printing Phase 2", y: 6.09 },
              { label: "Plastic Trash 3D printing Phase 1", y: 3.58 },
              { label: "A2A Document Translation", y: 0.15 },
            ],
          },
          {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "line",
            showInLegend: true,
            name: "Acquire Points",
            color: "blue",

            markerType: "square",
            dataPoints: [
              { label: "Python Bootcamp", y: 0 },
              { label: "B6 Sec A At Coder Training", y: 0 },
              { label: "Plastic Trash 3D printing Phase 2", y: 0 },
              { label: "Plastic Trash 3D printing Phase 1", y: 0 },
              { label: "A2A Document Translation", y: 0.12 },
            ],
          },
          {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "line",
            showInLegend: true,
            name: "Estimated Points",
            lineDashType: "dash",
            color: "green",
            markerType: "square",
            dataPoints: [
              { label: "Python Bootcamp", y: 1.33 },
              { label: "B6 Sec A At Coder Training", y: 7.04 },
              { label: "Plastic Trash 3D printing Phase 2", y: 0 },
              { label: "Plastic Trash 3D printing Phase 1", y: 0 },
              { label: "A2A Document Translation", y: 0 },
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
