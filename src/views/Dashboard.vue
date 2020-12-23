<template>
  <div>
    <PointsDefinition />
    <ProjectStatus />
    <Chart />
    <!-- <TableData /> -->
    <TaskAndProjection />
    <SemesterWise />
    <StudentsWorkingHour />
  </div>
</template>
<script>
import PointsDefinition from "../components/Dashboard/PointsDefinition";
import ProjectStatus from "../components/Dashboard/ProjectStatus";
import Chart from "../components/Dashboard/Chart";
import StudentsWorkingHour from "../components/Dashboard/StudentsWorkingHour";
import TaskAndProjection from "../components/Dashboard/TaskAndProjection";

import SemesterWise from "../components/Dashboard/SemesterWise";

export default {
  components: {
    PointsDefinition,
    ProjectStatus,
    Chart,
    StudentsWorkingHour,
    TaskAndProjection,
    SemesterWise,
    // TableData,
  },
};
</script>
