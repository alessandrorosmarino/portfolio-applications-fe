<template>
  <div class="flex-vertical">
    <a v-on:click="emitRouter()"
      class="flex-vertical flex-centered fade-in-side-lines project"
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
          v-bind:is-vue="isVue"
        ></TechnologyGroup>
      </div>
      <p class="typingEffect nowrap-text goToProject">> Go to project!</p>
    </a>
    <a class="button git-hub" v-bind:href="link" target="_blank">
      Go to GitHub Project!
    </a>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import TechnologyGroup from "@/components/portfolio/TechnologyGroup";

const props = defineProps({
  link: String,
  isJava: Boolean,
  isSpring: Boolean,
  isMySql: Boolean,
  isAngular: Boolean,
  isHtml: Boolean,
  isCss: Boolean,
  isJs: Boolean,
  isVue: Boolean,
  routerPath: String,
});

const emits = defineEmits(["triggerRouter"]);

function emitRouter() {
  emits("triggerRouter", props.routerPath);
}
</script>

<style scoped>

.goToProject {
  --width: 16;
  --chars: 16ch;
}

.project {
  height: 80%;
}

.git-hub {
  height: 20%;
}

</style>