<template>
  <table>
    <caption>Missions</caption>
    <thead>
    <tr>
      <th>idMission</th>
      <th>missionName</th>
      <th>missionDescription</th>
      <th>missionPoints</th>
      <th>missionLevel</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="mission in missions" :key="mission.idMission">
      <td>{{mission.idMission}}</td>
      <td>{{mission.missionName}}</td>
      <td>{{mission.missionDescription}}</td>
      <td>{{mission.missionPoints}}</td>
      <td>{{mission.missionLevel}}</td>
    </tr>
    </tbody>
  </table>
  <div class="button-group">
    <button v-on:click="addTestMission">Add Test Mission</button>
  </div>
</template>

<script setup>

import {getMissions, saveMission} from "@/js/services/missionService";
import {ref} from "vue";

let missions = ref([]);

getMissions(
    (response) => response.json(),
    (data) => {
        missions.value = data;
    }
);

function addTestMission() {
    const json = {
        missionName: "Test Mission",
        missionDescription: "Test Mission Description",
        missionPoints: 10,
        missionLevel: 1,
    };
    console.log(json);
    saveMission((response) => response.json(),
        (data) => console.log(data),
        json
    );
}

</script>

<style scoped>

</style>