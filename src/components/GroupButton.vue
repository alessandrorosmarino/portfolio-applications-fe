<template>
  <div v-bind:class="buildGroupClass()">
    <button
      v-for="item in items"
      :key="item[keyPropertyName]"
      v-bind:value="item[valuePropertyName]"
      v-on:click="emits('clickEmission', item[propertyToEmit])"
      v-bind:class="buildClass(item)"
    >
      <slot></slot>
      {{ textPropertyName !== undefined ? item[textPropertyName] : "" }}
    </button>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

let props = defineProps({
  items: Object,
  valuePropertyName: String,
  keyPropertyName: String,
  propertyToEmit: String,
  buttonState: String,
  calculateStateFunction: Function,
  calculateStateProperty: String,
  isOutline: Boolean,
  buttonGroupPosition: String,
  textPropertyName: String,
});

let emits = defineEmits(["clickEmission"]);

function buildClass(item) {
  let result = "";
  if (props.buttonState !== undefined) {
    return "button-" + props.buttonState + (props.isOutline ? "-outline" : "");
  } else if (props.calculateStateProperty !== undefined) {
    return (
      "button-" +
      props.calculateStateFunction(item[props.calculateStateProperty].value)
    );
  }
  return result;
}

function buildGroupClass() {
  return (
    "button-group" +
    (props.buttonGroupPosition !== undefined
      ? "-" + props.buttonGroupPosition
      : "")
  );
}
</script>

<style scoped></style>
