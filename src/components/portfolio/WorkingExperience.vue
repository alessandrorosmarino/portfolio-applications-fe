<template>
  <div v-bind:class="'working-experience' + (isImageOnLeft?'-left':'') + (isImageOnRight?'-right':'') + ' grid'">
    <div v-if="isImageOnLeft" class="flex-centered">
      <img
        class="working-experience-image"
        v-bind:src="src"
      />
    </div>
    <div class="flex-centered flex-vertical">
      <p class="work-title">{{ title }}</p>
      <p>
        <slot></slot>
      </p>
    </div>
    <div v-if="isImageOnRight" class="flex-centered">
      <img
        class="working-experience-image"
        v-bind:src="src"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

let props = defineProps({
  title: String,
  isImageOnLeft: Boolean,
  isImageOnRight: Boolean,
  imageSrc: String,
});

let src = undefined;

if(props.imageSrc !== undefined && props.imageSrc.length > 0 ){
  let imgs=require.context('@/assets/workingImages', false, /\.*$/);
  src = imgs.keys().map(imgs).filter( (text) => text.toString().includes(props.imageSrc) )[0];
}else{
  src = "https://via.placeholder.com/355x200";
}
</script>

<style scoped>

[class*="working-experience"]{
  padding-left: 20px;
  padding-right: 20px;
}

.working-experience-left {
  --grid-n-row: 1fr;
  --grid-n-column: 1fr 3fr;
}

.working-experience{
  --grid-n-row: 1fr;
  --grid-n-column: 1fr;
}

.working-experience-right {
  --grid-n-row: 1fr;
  --grid-n-column: 3fr 1fr;
}

.working-experience-image {
  --height: 200px;
  --width: calc(var(--height) * (16 / 9));
  height: var(--height);
  width: var(--width);
}

.work-title {
  color: var(--color);
  margin-bottom: var(--divisor-space);
  font-size: 1.5em;
}
</style>