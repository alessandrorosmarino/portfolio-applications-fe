let headerHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--header-height"
);
headerHeight = headerHeight.substring(0, headerHeight.indexOf("px"));
// Script to perform the reverse animation only after hover
let fadeInEffects;

updateFadeInEffects();

function updateFadeInEffects() {
  if(fadeInEffects !== undefined){
    for (const fadeInEffect of fadeInEffects) {
      fadeInEffect.removeEventListener("mouseover", addHoveredClass.bind(null, fadeInEffect));
    }
  }
  fadeInEffects = document.querySelectorAll(".fade-in-side-lines");
  for (let i = 0; i < fadeInEffects.length; i++) {
    fadeInEffects[i].addEventListener("mouseover", addHoveredClass.bind(null, fadeInEffects[i]));
  }
}

function addHoveredClass(element){
  element.classList.add("hovered");
}

/* Start skill appearing effect */

let skills;

const rotationObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("rotate");
    } else {
      entry.target.classList.remove("rotate");
    }
  }
});

updateSkills();

function updateSkills() {
  if(skills !== undefined){
    for (const skill of skills) {
      rotationObserver.unobserve(skill);
    }
  }
  skills = document.querySelectorAll(".pointer-container");
  for (const skill of skills) {
    rotationObserver.observe(skill);
  }
}

/* Start scrolling effect */
let scrolling = false;
let scrollingList = [];
let scrollingSlides;

const sectionObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.intersectionRatio >= 1) {
      scrollingList.find((e) => e.element === entry.target).selected = true;
    }else{
      scrollingList.find((e) => e.element === entry.target).selected = false;
    }
  }
});

updateScrollingSlides();

function updateScrollingSlides() {
  let previousSelected = scrollingList.find((e) => e.selected);
  if(previousSelected !== undefined){
    for (const scrollingElement of scrollingList) {
      sectionObserver.unobserve(scrollingElement.element);
    }
  }
  scrollingSlides = document.querySelectorAll(".scrolling-slide");
  scrollingList = [];
  for (const slide of scrollingSlides) {
    let isSelected = false;
    if(previousSelected === undefined || previousSelected?.element === slide){
      isSelected = true;
      previousSelected = { element: slide, selected: isSelected };
    }
    scrollingList.push({ element: slide, selected: isSelected });
    sectionObserver.observe(slide);
  }
}

window.addEventListener("wheel", activateScrollingEffect);
window.addEventListener("wheel", (e) => e.preventDefault(), {
  passive: false,
});

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
    scrollingList[index].selected = true;
    window.scrollTo(0, elementToScroll.offsetTop - headerHeight);
  }
}

function isOutOfBounds(array, index) {
  return index >= array.length || index < 0;
}

function updateAllEntities() {
  updateFadeInEffects();
  updateSkills();
  updateScrollingSlides();
}

export { scrollToPage, updateAllEntities };