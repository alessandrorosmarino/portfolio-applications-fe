<template>
  <div class="flex-vertical">
    <div v-on:click="emitRouter(self)"
      class="flex-vertical flex-centered fade-in-side-lines project" v-bind:class="clickable ? 'mouse-pointer' : '' "
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
          is-horizontal
        ></TechnologyGroup>
      </div>
      <p v-if="clickable" class="typingEffect nowrap-text goToProject">> Go to project!</p>
    </div>
    <a class="button git-hub" v-bind:href="link" target="_blank">
      Go to GitHub Project!
    </a>
  </div>
</template>

<script setup>
import {defineEmits, defineProps, getCurrentInstance} from "vue";
import TechnologyGroup from "@/components/portfolio/TechnologyGroup";

let self = getCurrentInstance();

const props = defineProps({
  clickable: Boolean,
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
  routerTitle: String,
});

defineEmits(["triggerRouter"]);

function emitRouter(toRoot) {
  if (props.clickable) {
    while (toRoot){
      toRoot.emit("triggerRouter", props.routerPath, props.routerTitle);
      toRoot = toRoot.parent;
    }
  }
}
</script>

<style scoped>

.goToProject {
  --width: 16;
  --chars: 16ch;
}

.project {
  height: calc(100% - 16px);
}

.git-hub {
  height: 16px;
}

</style>