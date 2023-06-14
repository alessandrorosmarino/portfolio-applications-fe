<template>
  <svg display="none">
    <defs>
      <path d="M 0 3 L 0 -3 L -30 0 L 0 3" id="triangle"></path>
      <circle
        class="outer-circle"
        r="30px"
        cx="50%"
        cy="100%"
        id="outer-circle"
      ></circle>
      <circle
        class="inner-circle"
        r="20px"
        cx="50%"
        cy="100%"
        id="inner-circle"
      ></circle>
    </defs>
  </svg>
  <div class="progress-bar percent-rotation">
    <svg><use xlink:href="#outer-circle"></use></svg>
    <svg><use xlink:href="#inner-circle"></use></svg>
    <div class="pointer-container flex-centered">
      <svg class="pointer-svg">
        <use class="pointer" xlink:href="#triangle" x="50%" y="50%"></use>
      </svg>
    </div>
    <p class="skill-text title">
      <slot></slot>
    </p>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";

defineProps({
  progressPercent: String,
});

onMounted(() => {
  import("../../js/skillRotation.js");
});
</script>

<style scoped>
.progress-bar {
  position: relative;
  color: var(--color);
}

.progress-bar > svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
}

.outer-circle {
  fill: var(--color);
}

.inner-circle {
  fill: var(--color-contrast);
}

.pointer {
  fill: var(--text-color);
}

.pointer-container {
  --pointer-container-width: 60px;
  --pointer-container-height: 6px;
  position: absolute;
  top: calc(50% - (var(--pointer-container-height) / 2));
  left: calc(50% - (var(--pointer-container-width) / 2));
  width: var(--pointer-container-width);
  height: var(--pointer-container-height);
  transition: transform 1s ease;
}

.pointer-svg {
  width: 100%;
  height: 100%;
}

.skill-text {
  position: absolute;
  width: 100%;
  text-align: center;
  top: calc(50%);
  font-size: 1.2em;
}

.rotate {
  transform: rotateZ(var(--rotation));
}

.percent-rotation {
  --rotation: v-bind(progressPercent);
}
</style>
