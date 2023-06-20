<template>
  <div v-bind:class="'working-experience-' + (isImageOnLeft?'left':'') + (isImageOnRight?'right':'') + ' grid'">
    <div v-if="isImageOnLeft" class="flex-centered">
      <img
        class="working-experience-image"
        v-bind:src="imageSrc"
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
        v-bind:src="imageSrc"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  isImageOnLeft: Boolean,
  isImageOnRight: Boolean,
  imageSrc: String,
});
</script>

<style scoped>

.working-experience-left {
  --grid-n-row: 1fr;
  --grid-n-column: 1fr 3fr;
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