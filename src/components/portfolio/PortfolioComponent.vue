<template>
  <head>
    <title>Alessandro's Portfolio</title>
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
        <circle
          class="education-circle"
          r="20px"
          cx="50%"
          cy="25%"
          id="education-circle"
        ></circle>
        <circle
          class="education-circle-pulse"
          r="30px"
          cx="50%"
          cy="25%"
          id="education-circle-pulse"
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
  </head>
  <!-- Navigation Bar -->
  <header class="navbar grid header-primary">
    <div class="mouse-pointer">
      <p class="burger">&#9776;</p>
    </div>
    <div>
      <p class="cursor-blink-effect">Alessandro's Portfolio</p>
    </div>
    <div>
      <img class="logo" src="../../assets/Logo.png" />
    </div>
  </header>

  <!-- Hidden Bar -->
  <nav class="nav-primary">
    <ul>
      <li>
        <a class="mouse-pointer" onclick="scrollToPage(0,false)">Know Me</a>
      </li>
      <li>
        <a class="mouse-pointer" onclick="scrollToPage(1,false)">Projects</a>
      </li>
      <li>
        <a class="mouse-pointer" onclick="scrollToPage(2,false)">Experience</a>
      </li>
      <li>
        <a class="mouse-pointer" onclick="scrollToPage(3,false)">My Skills</a>
      </li>
    </ul>
  </nav>

  <!-- Content -->
  <section class="main-container flex-vertical">
    <section class="filler"></section>
    <!-- Presentation -->
    <section class="presentation grid scrolling-slide">
      <div class="flex-centered">
        <img class="portrait" src="../../assets/alessandro.png" />
      </div>
      <div class="flex-centered flex-vertical">
        <p class="job-title">Java developer</p>
        <p class="divisor"></p>
        <p class="nowrap-text">
          Specialized in Java development and able to use the Spring Framework
          (Boot , Security, Data, Batch, Web).
        </p>
        <p class="nowrap-text">
          Skilled with relational database management and interpretation
          (Oracle, MSSQL, MySQL).
        </p>
        <p class="nowrap-text">Familiarity with front-end development.</p>
        <p class="nowrap-text">
          Familiarity with Git , Atlassian tools, and Jenkins.
        </p>
        <p class="divisor"></p>
        <div class="button-group">
          <button
            class="button-primary"
            onclick="location.href='mailTo://alessandrorosmarino@gmail.com'"
          >
            Contact Me
          </button>
          <button class="button-primary" onclick="scrollToPage(1,false)">
            My Projects
          </button>
          <button
            class="button-primary"
            onclick="location.href='../../assets/Alessandro%20Rosmarino%20CV.pdf'"
          >
            Download my CV
          </button>
        </div>
      </div>
    </section>
    <!--
    <section class="slideshow grid tri-column single-row" >
        <div class="previous-button flex centered"><</div>
        <div class="flex vertical-direction">
            <div class="slide-container">
                <div class="slide active white"></div>
                <div class="slide yellow"></div>
                <div class="slide purple"></div>
            </div>
            <div class="slide-dot-container grid penta-column single-row">
                <div></div>
                <div class="flex centered">
                    <svg class="dot-container"><circle class="dot"></circle></svg>
                </div>
                <div class="flex centered">
                    <svg class="dot-container"><circle class="dot"></circle></svg>
                </div>
                <div class="flex centered">
                    <svg class="dot-container"><circle class="dot"></circle></svg>
                </div>
                <div></div>
            </div>
        </div>
        <div class="next-button flex centered">></div>
    </section>
    -->
    <!-- Projects -->
    <section class="project-table grid scrolling-slide">
      <a
        href="https://github.com/alessandrorosmarino/Play-Performance"
        target="_blank"
        class="flex-vertical flex-centered fade-in-side-lines-primary"
      >
        <div class="flex-centered flex-vertical">
          <p class="title">Play Performance</p>
          <div class="playPerformance-technologies technology-group grid">
            <div></div>
            <img class="technology" src="../../assets/java.png" />
            <img class="technology" src="../../assets/spring.svg" />
            <img class="technology" src="../../assets/mySQL.png" />
            <img class="technology" src="../../assets/angular.png" />
            <img class="technology" src="../../assets/html.png" />
            <img class="technology" src="../../assets/css.png" />
            <img class="technology" src="../../assets/js.png" />
            <div></div>
          </div>
        </div>
        <p class="typingEffect nowrap-text goToProject">> Go to project!</p>
      </a>
      <a
        href="https://github.com/alessandrorosmarino/Wrapper"
        target="_blank"
        class="flex-vertical flex-centered fade-in-side-lines-primary"
      >
        <div class="flex-centered flex-vertical">
          <p class="title">Dependency Injector</p>
          <div class="dependencyInjector-technologies technology-group grid">
            <div></div>
            <img class="technology" src="../../assets/java.png" />
            <div></div>
          </div>
        </div>
        <p class="typingEffect nowrap-text goToProject">> Go to project!</p>
      </a>
      <a
        href="https://github.com/alessandrorosmarino/portfolio"
        target="_blank"
        class="flex-vertical flex-centered fade-in-side-lines-primary"
      >
        <div class="flex-centered flex-vertical">
          <p class="title">Portfolio</p>
          <div class="portfolio-technologies technology-group grid">
            <div></div>
            <img class="technology" src="../../assets/html.png" />
            <img class="technology" src="../../assets/css.png" />
            <img class="technology" src="../../assets/js.png" />
            <div></div>
          </div>
        </div>
        <p class="typingEffect nowrap-text goToProject">> Go to project!</p>
      </a>
    </section>

    <!-- Working Experience -->
    <section class="working-experience grid scrolling-slide">
      <div class="working-experience-left grid">
        <div class="flex-centered">
          <img
            class="working-experience-image"
            src="https://via.placeholder.com/355x200"
          />
        </div>
        <div class="flex-centered flex-vertical">
          <p class="work-title">LMS & Mobile App</p>
          <p class="work-description">
            In this project I worked for a big Italian Automotive company
            developing web pages, backend logic and REST webservices of an
            LMS....
          </p>
        </div>
      </div>
      <div class="working-experience-right grid">
        <div class="flex-centered flex-vertical">
          <p class="work-title">Front-End development</p>
          <p class="work-description">
            In this project I worked for a banking company developing web
            pages....
          </p>
        </div>
        <div class="flex-centered">
          <img
            class="working-experience-image"
            src="https://via.placeholder.com/355x200"
          />
        </div>
      </div>
      <div class="working-experience-left grid">
        <div class="flex-centered">
          <img
            class="working-experience-image"
            src="https://via.placeholder.com/355x200"
          />
        </div>
        <div class="flex-centered flex-vertical">
          <p class="work-title">Back-End development</p>
          <p class="work-description">
            In this project I developed web pages, backend logic....
          </p>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="skills grid scrolling-slide">
      <div></div>
      <div class="progress-bar development">
        <svg><use xlink:href="#outer-circle"></use></svg>
        <svg><use xlink:href="#inner-circle"></use></svg>
        <div class="pointer-container flex-centered">
          <svg class="pointer-svg">
            <use class="pointer" xlink:href="#triangle" x="50%" y="50%"></use>
          </svg>
        </div>
        <p class="skill-text title">Software Development</p>
      </div>
      <div class="progress-bar problem-solving">
        <svg><use xlink:href="#outer-circle"></use></svg>
        <svg><use xlink:href="#inner-circle"></use></svg>
        <div class="pointer-container flex-centered">
          <svg class="pointer-svg">
            <use class="pointer" xlink:href="#triangle" x="50%" y="50%"></use>
          </svg>
        </div>
        <p class="skill-text title">Problem Solving</p>
      </div>
      <div class="progress-bar learning">
        <svg><use xlink:href="#outer-circle"></use></svg>
        <svg><use xlink:href="#inner-circle"></use></svg>
        <div class="pointer-container flex-centered">
          <svg class="pointer-svg">
            <use class="pointer" xlink:href="#triangle" x="50%" y="50%"></use>
          </svg>
        </div>
        <p class="skill-text title">Quick Learning</p>
      </div>
      <div class="progress-bar adaptivity">
        <svg><use xlink:href="#outer-circle"></use></svg>
        <svg><use xlink:href="#inner-circle"></use></svg>
        <div class="pointer-container flex-centered">
          <svg class="pointer-svg">
            <use class="pointer" xlink:href="#triangle" x="50%" y="50%"></use>
          </svg>
        </div>
        <p class="skill-text title">Adaptivity</p>
      </div>
      <div class="progress-bar team">
        <svg><use xlink:href="#outer-circle"></use></svg>
        <svg><use xlink:href="#inner-circle"></use></svg>
        <div class="pointer-container flex-centered">
          <svg class="pointer-svg">
            <use class="pointer" xlink:href="#triangle" x="50%" y="50%"></use>
          </svg>
        </div>
        <p class="skill-text title">Team Working</p>
      </div>
      <div class="progress-bar analysis">
        <svg><use xlink:href="#outer-circle"></use></svg>
        <svg><use xlink:href="#inner-circle"></use></svg>
        <div class="pointer-container flex-centered">
          <svg class="pointer-svg">
            <use class="pointer" xlink:href="#triangle" x="50%" y="50%"></use>
          </svg>
        </div>
        <p class="skill-text title">Analysis</p>
      </div>
      <div></div>
    </section>

    <!-- Education -->
    <section class="education grid">
      <div class="flex-centered education-container">
        <p class="education-text flex-centered">
          Diploma in Computer Science, Technology and Telecommunications
        </p>
        <svg>
          <use xlink:href="#line-start"></use>
          <use xlink:href="#education-circle"></use>
          <use xlink:href="#line-forward"></use>
        </svg>
      </div>
      <div class="flex-centered education-container">
        <p class="education-text flex-centered">Java specialization course</p>
        <svg>
          <use xlink:href="#line-backward"></use>
          <use xlink:href="#education-circle"></use>
          <use xlink:href="#line-forward"></use>
        </svg>
      </div>
      <div class="flex-centered education-container">
        <p class="education-text flex-centered">
          Bachelor's degree in Information & Communication Technologies
        </p>
        <svg>
          <use xlink:href="#line-backward"></use>
          <use xlink:href="#education-circle"></use>
          <use xlink:href="#line-forward"></use>
        </svg>
      </div>
      <div class="flex-centered education-container">
        <p class="education-text flex-centered">
          Continuous formation and self-improvement
        </p>
        <svg>
          <use xlink:href="#education-circle-pulse"></use>
          <use xlink:href="#line-backward"></use>
          <use xlink:href="#education-circle"></use>
          <use xlink:href="#line-end"></use>
        </svg>
      </div>
    </section>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let headerHeight = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--heading-height");
  headerHeight = headerHeight.substring(0, headerHeight.indexOf("px"));

  // Script to toggle the hidden bar
  var burger = document.querySelector(".burger");
  var sidebar = document.querySelector("nav");

  burger.addEventListener("click", function () {
    sidebar.classList.toggle("show-nav");
  });

  // Script to perform the reverse animation only after hover
  const fadeInEffects = document.querySelectorAll(
    "[class*='fade-in-side-lines']"
  );
  for (let i = 0; i < fadeInEffects.length; i++) {
    console.log("adding event listeners to:" + fadeInEffects[i]);
    fadeInEffects[i].addEventListener("mouseover", () => {
      fadeInEffects[i].classList.add("hovered");
    });
  }

  /*
    //Script for the slideshow behaviour
    var prev = document.querySelector(".previous-button");
    var next = document.querySelector(".next-button");
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    
    prev.addEventListener("click", () =>{
        nextSlide(false);
    })
    
    next.addEventListener("click", () =>{
        nextSlide(true);
    })
    
    function nextSlide(direction){
        var found = false;
        var check = direction ? slides.length-1 : 0;
        var index = direction ? -1 : slides.length;
    
        for (let i = 0; i < slides.length && !found; i++) {
            if(slides[i].classList.contains("active")){
                if(i === check){
                    i = index;
                }
                selectSlide(direction?++i:--i);
            }
        }
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () =>{
            selectSlide(i);
        })
    }
    
    function selectSlide(index){
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        slides[index].classList.add("active");
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("dot-selected");
        }
        dots[index].classList.add("dot-selected");
    }
    */

  /* Start skill appearing effect */

  var skills = document.querySelectorAll(".pointer-container");

  const rotationObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("rotate");
      } else {
        entry.target.classList.remove("rotate");
      }
    }
  });
  for (const skill of skills) {
    rotationObserver.observe(skill);
  }

  /* Start scrolling effect */
  let scrolling = false;
  var scrollingList = [];
  var scrollingSlides = document.querySelectorAll(".scrolling-slide");

  for (const slide of scrollingSlides) {
    scrollingList.push({ element: slide, selected: false });
  }

  const sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.intersectionRatio >= 1) {
        scrollingList.find((e) => e.element === entry.target).selected = true;
      }
    }
  });

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      for (let scrollingListElement of scrollingList) {
        sectionObserver.observe(scrollingListElement.element);
      }
    },
    false
  );

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
});
</script>

<style scoped>
@import "../../css/stylesheet.css";

*:link {
  color: var(--text-color);
  text-decoration-line: none;
}

*:visited {
  color: var(--text-color);
  text-decoration-line: none;
}

.title {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

/* Start Main-container */

.main-container {
  align-items: stretch;
  background-color: var(--background-color);
}

.filler {
  flex: 1 0 var(--heading-height);
}

/* End Main-container */

.navbar {
  --grid-n-column: 1fr 1fr 1fr;
  --grid-n-row: 1fr;
}

.presentation {
  height: var(--section-full-height-heading);
  --grid-n-column: 1fr 1fr;
  --grid-n-row: 1fr;
  color: var(--text-color);
}

.portrait {
  width: 250px;
  height: 250px;
}

.job-title {
  font-size: 4em;
  color: var(--effect-color);
}
.project-table {
  height: var(--section-full-height-heading);
  --grid-n-column: 1fr 1fr 1fr;
  --grid-n-row: 1fr;
}

.goToProject {
  --width: 16;
  --chars: 16ch;
}

.technology {
  width: var(--technology-icon);
  height: var(--technology-icon);
}

.dependencyInjector-technologies {
  --number-of-technologies: 1;
}

.portfolio-technologies {
  --number-of-technologies: 3;
}

.playPerformance-technologies {
  --number-of-technologies: 7;
}

.technology-group {
  --grid-n-column: 1fr
    repeat(var(--number-of-technologies), var(--technology-icon)) 1fr;
  --grid-n-row: 1fr;
  grid-gap: 20px;
}

.skills {
  height: var(--section-quarter-height);
  --grid-n-column: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
  --grid-n-row: 1fr;
}

.progress-bar {
  position: relative;
  color: var(--text-color);
}

.progress-bar > svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
}

.outer-circle {
  fill: var(--text-color);
}

.inner-circle {
  fill: var(--background-color);
}

.pointer {
  fill: var(--effect-color);
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

.development {
  --rotation: 162deg;
}

.problem-solving {
  --rotation: 167.4deg;
}

.learning {
  --rotation: 153deg;
}

.adaptivity {
  --rotation: 162deg;
}

.team {
  --rotation: 149.4deg;
}

.analysis {
  --rotation: 149.4deg;
}
.education {
  height: var(--section-quarter-height-heading);
  --grid-n-column: 1fr 1fr 1fr 1fr;
  --grid-n-row: 1fr;
  color: var(--text-color);
}

.education-circle {
  fill: var(--text-color);
}

.education-circle-pulse {
  fill: var(--background-color-light);
}

[class*="pulse"] {
  animation: pulse 1s infinite alternate;
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
  fill: var(--text-color);
}

.working-experience {
  height: var(--section-full-height-heading);
  --grid-n-row: 1fr 1fr 1fr;
  --grid-n-column: 1fr;
  color: var(--text-color);
}

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
  color: var(--effect-color);
  margin-bottom: var(--divisor-space);
}

.work-description {
  font-size: 1.2em;
}
</style>