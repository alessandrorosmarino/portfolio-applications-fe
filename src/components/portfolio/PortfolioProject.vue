<template>
  <a
    v-bind:href="link"
    target="_blank"
    class="flex-vertical flex-centered fade-in-side-lines"
  >
    <div class="flex-centered flex-vertical">
      <p class="title">
        <slot></slot>
      </p>
      <TechnologyGroup
        v-bind:is-java="isJava"
        v-bind:is-spring="isSpring"
        v-bind:is-my-sql="isMySql"
        v-bind:is-angular="isAngular"
        v-bind:is-html="isHtml"
        v-bind:is-css="isCss"
        v-bind:is-js="isJs"
      ></TechnologyGroup>
    </div>
    <p class="typingEffect nowrap-text goToProject">> Go to project!</p>
  </a>
</template>

<script setup>
import { defineProps } from "vue";
import TechnologyGroup from "@/components/portfolio/TechnologyGroup";

defineProps({
  link: String,
  isJava: Boolean,
  isSpring: Boolean,
  isMySql: Boolean,
  isAngular: Boolean,
  isHtml: Boolean,
  isCss: Boolean,
  isJs: Boolean,
});
</script>

<style scoped>

.goToProject {
  --width: 16;
  --chars: 16ch;
}

</style>