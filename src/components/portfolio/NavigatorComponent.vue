<template>
  <nav class="navigator">
    <div></div> <!-- empty div for grid -->
    <div class="flex-centered dot" v-on:click="firstMethod();selected(0)">Presentation</div>
    <div class="flex-centered dot" v-on:click="secondMethod();selected(1)">Projects</div>
    <div class="flex-centered dot" v-on:click="thirdMethod();selected(2)">Work Experience</div>
    <div class="flex-centered dot" v-on:click="fourthMethod();selected(3)">Skills & Education</div>
    <div></div> <!-- empty div for grid -->
  </nav>
</template>

<script setup>

import { defineProps } from "vue";

defineProps({
  firstMethod: Function,
  secondMethod: Function,
  thirdMethod: Function,
  fourthMethod: Function,
});

function selected(index){
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("dot-selected");
  });
  document.querySelectorAll(".dot")[index].classList.add("dot-selected");
}
</script>

<style scoped>
.navigator{
  --number-of-navigation: 4;
}
</style>