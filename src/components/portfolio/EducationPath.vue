<template>
  <svg display="none">
    <defs>
      <circle
        class="education-circle"
        r="20px"
        cx="50%"
        cy="25%"
        id="education-circle"
      ></circle>
      <circle
        class="education-circle-outer"
        r="30px"
        cx="50%"
        cy="25%"
        id="education-circle-outer"
      ></circle>
      <rect
        class="connecting-line"
        height="2px"
        width="50%"
        id="line-forward"
        x="50%"
        y="25%"
      ></rect>
      <rect
        class="connecting-line"
        height="2px"
        width="50%"
        id="line-backward"
        x="0"
        y="25%"
      ></rect>
      <rect
        class="connecting-line"
        height="2px"
        width="25%"
        id="line-start"
        x="25%"
        y="25%"
      ></rect>
      <rect
        class="connecting-line"
        height="2px"
        width="25%"
        id="line-end"
        x="50%"
        y="25%"
      ></rect>
    </defs>
  </svg>
  <div class="flex-centered education-container">
    <p class="education-text flex-centered">
      <slot></slot>
    </p>
    <svg>
      <use v-if="isPulsing" xlink:href="#education-circle-outer" class="pulse"></use>
      <use v-if="isFirst" xlink:href="#line-start"></use>
      <use v-if="!isFirst" xlink:href="#line-backward"></use>
      <use xlink:href="#education-circle"></use>
      <use v-if="!isLast" xlink:href="#line-forward"></use>
      <use v-if="isLast" xlink:href="#line-end"></use>
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  isFirst: Boolean,
  isLast: Boolean,
  isPulsing: Boolean,
})
</script>

<style scoped>
.education-circle {
  fill: var(--color);
}

.education-circle-outer {
  fill: var(--color-contrast-hover);
}

.education-container {
  position: relative;
}

.education-text {
  font-size: 1em;
  width: 30ch;
  white-space: normal;
  justify-content: start;
  text-align: center;
}

.education-container svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.connecting-line {
  fill: var(--color);
}
</style>