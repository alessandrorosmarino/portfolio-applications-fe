<template>
  <nav class="navigator">
    <div></div> <!-- empty div for grid -->
    <div v-for="(nav,index) in navigations" :key="nav" class="flex-centered dot" v-on:click="scrollToPage(index,false)">
      {{ nav }}
    </div>
    <div></div> <!-- empty div for grid -->
  </nav>
</template>

<script setup>
import { defineProps, onMounted } from "vue";

let headerHeight;
let props = defineProps({
  navigations: Array,
});
let scrolling = false;
let scrollingList = [];
let scrollingSlides;

onMounted(() => {
  updateScrollingSlides();
  window.addEventListener("wheel", activateScrollingEffect);
  window.addEventListener("wheel", (e) => e.preventDefault(), {
    passive: false,
  });
  headerHeight = getComputedStyle(document.documentElement).getPropertyValue(
    "--header-height"
  );
  headerHeight = headerHeight.substring(0, headerHeight.indexOf("px"));
})

function selected(index){
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("dot-selected");
  });
  document.querySelectorAll(".dot")[index].classList.add("dot-selected");
  scrollingList[index].selected = true;
}

function updateScrollingSlides() {
  let previousSelected = scrollingList.find((e) => e.selected);
  scrollingSlides = document.querySelectorAll(".scrolling-slide");
  scrollingList = [];
  for (const slide of scrollingSlides) {
    let isSelected = false;
    if(previousSelected === undefined || previousSelected?.element === slide){
      isSelected = true;
      previousSelected = { element: slide, selected: isSelected };
    }
    scrollingList.push({ element: slide, selected: isSelected });
  }
}

function activateScrollingEffect(e) {
  if (!scrolling) {
    scrollToNextSection(e.deltaY > 0);
  }
}

function scrollToNextSection(forward) {
  let elementIndexActive = scrollingList.findIndex((e) => e.selected);
  let nextIndex = elementIndexActive + (forward ? 1 : -1);
  scrollToPage(nextIndex, true);
}

function scrollToPage(index, removeListeners) {
  if (!isOutOfBounds(scrollingList, index)) {
    if (removeListeners) {
      window.removeEventListener("wheel", activateScrollingEffect);
      setTimeout(() => {
        scrolling = false;
        window.addEventListener("wheel", activateScrollingEffect);
      }, 1500);
    }
    for (const scrollingElement of scrollingList) {
      scrollingElement.selected = false;
    }
    let elementToScroll = scrollingList[index].element;
    selected(index);
    window.scrollTo(0, elementToScroll.offsetTop - headerHeight);
  }
}

function isOutOfBounds(array, index) {
  return index >= array.length || index < 0;
}
</script>

<style scoped>
.navigator{
  --number-of-navigation: 5;
}
</style>