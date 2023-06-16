<template>
  <PortfolioComponent @triggerRouter="emitRouter"></PortfolioComponent>
</template>

<script setup>
import PortfolioComponent from "@/components/portfolio/PortfolioComponent";
import { defineEmits } from "vue";

const emits = defineEmits(["triggerRouter"]);

function emitRouter(path) {
  emits("triggerRouter", path);
}
</script>
