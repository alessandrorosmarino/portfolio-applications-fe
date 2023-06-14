<template>
  <div class="technology-group grid">
    <div></div>
    <img v-if="isJava" alt="Java" class="technology" src="../../assets/java.png" />
    <img v-if="isSpring" alt="Spring" class="technology" src="../../assets/spring.svg" />
    <img v-if="isMySql" alt="MySQL" class="technology" src="../../assets/mySQL.png" />
    <img v-if="isAngular" alt="Angular" class="technology" src="../../assets/angular.png" />
    <img v-if="isHtml" alt="HTML5" class="technology" src="../../assets/html.png" />
    <img v-if="isCss" alt="CSS3" class="technology" src="../../assets/css.png" />
    <img v-if="isJs" alt="JS" class="technology" src="../../assets/js.png" />
    <div></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isJava: Boolean,
  isSpring: Boolean,
  isMySql: Boolean,
  isAngular: Boolean,
  isHtml: Boolean,
  isCss: Boolean,
  isJs: Boolean,
});

function getTechnologyNumber(){
  let number = 0;
  if(props.isJava) number++;
  if(props.isSpring) number++;
  if(props.isMySql) number++;
  if(props.isAngular) number++;
  if(props.isHtml) number++;
  if(props.isCss) number++;
  if(props.isJs) number++;
  return number;
}

const technologyNumber = getTechnologyNumber();
</script>

<style scoped>
.technology {
  width: var(--technology-icon);
  height: var(--technology-icon);
}

.technology-group {
  --number-of-technologies: v-bind(technologyNumber);
  --grid-n-column: 1fr
  repeat(var(--number-of-technologies), var(--technology-icon)) 1fr;
  --grid-n-row: 1fr;
  grid-gap: 20px;
}
</style>