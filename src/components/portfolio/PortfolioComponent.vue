<template>
  <!-- Content -->
  <section class="main-container flex-vertical">
    <NavigatorComponent
      :navigations="navigations"
    ></NavigatorComponent>
    <!-- Presentation -->
    <section class="presentation grid scrolling-slide">
      <div class="flex-centered">
        <img class="portrait" src="../../assets/alessandro.png" />
      </div>
      <div class="flex-centered flex-vertical">
        <p class="job-title">Java developer</p>
        <p class="nowrap-text">
          Passionate developer specialized in Java (8, 11, 17) and Spring Framework
          (Boot, Security, Data, Batch, Web).
        </p>
        <p class="nowrap-text">
          Skilled with relational databases (Oracle, MSSQL, MySQL).
        </p>
        <p class="nowrap-text">Skilled with Front-end development (HTML, CSS, Javascript)
          and Front-end frameworks (Angular, Vue).</p>
        <p class="nowrap-text">
          Familiarity with Git, Atlassian tools, Jenkins and many more tools.
        </p>
        <p class="divisor"></p>
        <div class="flex-centered important-text"> What can I do for you? </div>
        <div class="services-offered grid">
          <p class="flex-centered nowrap-text">
            I offer my services as a freelance developer for your projects.
          </p>
          <p class="flex-centered nowrap-text">
            I can develop web applications, desktop applications and more.
          </p>
          <p class="flex-centered nowrap-text">
            I can setup an automated build and deploy pipeline.
          </p>
          <p class="flex-centered nowrap-text">
            I offer my services as a consultant.
          </p>
          <p class="flex-centered nowrap-text">
            Contact me for more information.
          </p>
        </div>
        <div class="button-group">
          <button
            onclick="location.href='mailTo://alessandrorosmarino@gmail.com'"
          >
            Contact Me
          </button>
          <a v-bind:href="pdf.default" download="Alessandro Rosmarino CV.pdf" class="button">
            Download my CV
          </a>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="project-table grid scrolling-slide">
      <PortfolioProject link="https://github.com/alessandrorosmarino/portfolio-applications-fe" is-vue isHtml isCss isJs
                        router-path="" router-title="Alessandro's Portfolio" clickable>
        Single Page Application (This whole project)
      </PortfolioProject>
      <PortfolioProject link="https://github.com/alessandrorosmarino/Wrapper" isJava>
        Dependency Injector
      </PortfolioProject>
      <PortfolioProject link="https://github.com/alessandrorosmarino/task-reminder-be" is-java is-spring
                        router-path="taskReminder" router-title="Task Reminder" clickable>
        Task Reminder
      </PortfolioProject>
      <PortfolioProject link="https://github.com/alessandrorosmarino/Play-Performance"
                        isJava isSpring isMySql isAngular isHtml isCss isJs>
        Play Performance
      </PortfolioProject>
      <div></div> <!-- Empty div to fill the grid -->
      <PortfolioProject link="https://github.com/alessandrorosmarino/portfolio" isHtml isCss isJs>
        Portfolio
      </PortfolioProject>
    </section>

    <!-- Working Experience -->
    <section class="working-experience grid scrolling-slide">
      <WorkingExperience image-src="mobileApp" is-image-on-left title="LMS & Mobile App">
        In this project I worked for a big Italian Automotive company
        developing web pages, backend logic and REST webservices of an
        LMS. I also developed a mobile app that communicates with the LMS
        platform to consume the contents of the platform through the app.
        The application involved Gamification mechanics to enhance
        the experience.
      </WorkingExperience>
      <WorkingExperience image-src="bankingChart" is-image-on-right title="Front-End development">
        In this project I worked for an Italian banking company developing web
        pages in an Angular project while also refactoring some logic to enhance performance.
        I also had to reverse engineer the back-end to document the code.
      </WorkingExperience>
      <WorkingExperience image-src="aggregation" is-image-on-left title="Back-End development">
        In this project I developed the backend of a data aggregation platform
        which collects data from different sources and shows them in multiple
        well organized dashboards.
      </WorkingExperience>
    </section>

    <!-- Tools -->
    <section class="tools grid scrolling-slide">
      <!--div class="flex-centered important-text">My Skills</div-->
      <TechnologyGroup is-all show-category-text is-vertical technology-gap></TechnologyGroup>
    </section>

    <!-- Skills -->
    <section class="skills grid">
      <div></div>
      <ProgressBar progress-percent="162deg">
        Software Development
      </ProgressBar>
      <ProgressBar progress-percent="167.4deg">
        Problem Solving
      </ProgressBar>
      <ProgressBar progress-percent="153deg">
        Quick Learning
      </ProgressBar>
      <ProgressBar progress-percent="162deg">
        Adaptivity
      </ProgressBar>
      <ProgressBar progress-percent="149.4deg">
        Team Working
      </ProgressBar>
      <ProgressBar progress-percent="149.4deg">
        Analysis
      </ProgressBar>
    </section>

    <!-- Education -->
    <section class="education grid scrolling-slide">
      <EducationPath is-first>
        Diploma in Computer Science, Technology and Telecommunications
      </EducationPath>
      <EducationPath>
        Java specialization course
      </EducationPath>
      <EducationPath>
        Bachelor's degree in Information & Communication Technologies
      </EducationPath>
      <EducationPath is-last is-pulsing>
        Continuous formation and self-improvement
      </EducationPath>
    </section>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import ProgressBar from "@/components/portfolio/ProgressBar";
import EducationPath from "@/components/portfolio/EducationPath";
import WorkingExperience from "@/components/portfolio/WorkingExperience";
import PortfolioProject from "@/components/portfolio/PortfolioProject";
import NavigatorComponent from "@/components/portfolio/NavigatorComponent";
import TechnologyGroup from "@/components/portfolio/TechnologyGroup";

const pdf = require("../../assets/AlessandroRosmarinoCV.pdf");
const rotationObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("rotate");
    } else {
      entry.target.classList.remove("rotate");
    }
  }
});

let navigations = [ "Presentation", "Projects", "Work Experience", "Skills", "Education" ];
let fadeInEffects;
let skills;

onMounted(() => {
  updateFadeInEffects();
  updateSkills();
})

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
</script>

<style scoped>

/* Start Main-container */

.main-container {
  align-items: stretch;
  background-color: var(--color-contrast);
}

/* End Main-container */

.presentation {
  height: var(--full-height-heading);
  --grid-n-column: 1fr 2fr;
  --grid-n-row: 1fr;
  color: var(--text-color);
}

.portrait {
  width: 250px;
  height: 250px;
}

.job-title {
  font-size: 3.5em;
  margin-top: var(--divisor-space);
  margin-bottom: var(--divisor-space);
  color: var(--color);
}

.project-table {
  height: var(--full-height-heading);
  --grid-n-column: 1fr 1fr 1fr;
  --grid-n-row: 1fr 1fr;
}

.tools {
  height: calc(var(--half-height) + var(--quarter-height-heading));
  --grid-n-column: 1fr;
  --grid-n-row: 1fr;
}

.skills {
  height: var(--quarter-height);
  --grid-n-column: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
  --grid-n-row: 1fr;
}

.education {
  height: var(--quarter-height);
  --grid-n-column: 1fr 1fr 1fr 1fr;
  --grid-n-row: 1fr;
  color: var(--text-color);
}

.working-experience {
  height: var(--full-height-heading);
  --grid-n-row: 1fr 1fr 1fr;
  --grid-n-column: 1fr;
  color: var(--text-color);
}

.services-offered{
  --grid-n-column: 1fr;
  --grid-n-row: 1fr 1fr 1fr 1fr 1fr;
  color: var(--text-color);
}
</style>
