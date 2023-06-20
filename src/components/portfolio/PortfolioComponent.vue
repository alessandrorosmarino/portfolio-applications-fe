<template>
  <!-- Content -->
  <section class="main-container flex-vertical">
    <NavigatorComponent
      :first-method="() => scrollToPage(0,false)"
      :second-method="() => scrollToPage(1,false)"
      :third-method="() => scrollToPage(2,false)"
      :fourth-method="() => scrollToPage(3,false)"
    ></NavigatorComponent>
    <!-- Presentation -->
    <section class="presentation grid scrolling-slide">
      <div class="flex-centered">
        <img class="portrait" src="../../assets/alessandro.png" />
      </div>
      <div class="flex-centered flex-vertical">
        <p class="job-title">Java developer</p>
        <p class="divisor"></p>
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
        <div class="button-group">
          <button
            onclick="location.href='mailTo://alessandrorosmarino@gmail.com'"
          >
            Contact Me
          </button>
          <button v-on:click="scrollToPage(1, false)">My Projects</button>
          <button
            onclick="location.href='../../assets/Alessandro%20Rosmarino%20CV.pdf'"
          >
            Download my CV
          </button>
        </div>
      </div>
    </section>
    <!-- Projects -->
    <section class="project-table grid scrolling-slide">
      <PortfolioProject link="https://github.com/alessandrorosmarino/Play-Performance"
                        isJava
                        isSpring
                        isMySql
                        isAngular
                        isHtml
                        isCss
                        isJs
                        router-path="playPerformance"
                        @triggerRouter=""
      >
        Play Performance
      </PortfolioProject>
      <PortfolioProject link="https://github.com/alessandrorosmarino/Wrapper" isJava
        router-path="wrapper" @triggerRouter="">
        Dependency Injector
      </PortfolioProject>
      <PortfolioProject link="https://github.com/alessandrorosmarino/portfolio" isHtml isCss isJs
        router-path="portfolio" @triggerRouter="">
        Portfolio
      </PortfolioProject>
      <PortfolioProject link="https://github.com/alessandrorosmarino/portfolio-applications-fe" is-vue isHtml isCss isJs
        router-path="" @triggerRouter="emitRouter" clickable>
        Single Page Application (This whole project)
      </PortfolioProject>
      <div></div> <!-- Empty div to fill the grid -->
      <PortfolioProject link="https://github.com/alessandrorosmarino/task-reminder-be" is-java is-spring
        router-path="taskReminder" @triggerRouter="emitRouter" clickable>
        Task Reminder
      </PortfolioProject>
    </section>

    <!-- Working Experience -->
    <section class="working-experience grid scrolling-slide">
      <WorkingExperience image-src="https://via.placeholder.com/355x200" is-image-on-left title="LMS & Mobile App">
        In this project I worked for a big Italian Automotive company
        developing web pages, backend logic and REST webservices of an
        LMS....
      </WorkingExperience>
      <WorkingExperience image-src="https://via.placeholder.com/355x200" is-image-on-right title="Front-End development">
        In this project I worked for a banking company developing web
        pages....
      </WorkingExperience>
      <WorkingExperience image-src="https://via.placeholder.com/355x200" is-image-on-left title="Back-End development">
        In this project I developed web pages, backend logic....
      </WorkingExperience>
    </section>

    <!-- Skills -->
    <section class="skills grid scrolling-slide">
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
    <section class="education grid">
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
import { defineEmits, onMounted } from "vue";
import ProgressBar from "@/components/portfolio/ProgressBar";
import EducationPath from "@/components/portfolio/EducationPath";
import WorkingExperience from "@/components/portfolio/WorkingExperience";
import PortfolioProject from "@/components/portfolio/PortfolioProject";
import NavigatorComponent from "@/components/portfolio/NavigatorComponent";

let scrollToPage;
onMounted(() => {
  import("../../js/util.js").then((module) => {
    scrollToPage = module.scrollToPage;
    module.updateAllEntities();
  });
});


const emits = defineEmits(["triggerRouter"]);

function emitRouter(path) {
  emits("triggerRouter", path);
}
</script>

<style scoped>
.title {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

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
  font-size: 4em;
  color: var(--color);
}

.project-table {
  height: var(--full-height-heading);
  --grid-n-column: 1fr 1fr 1fr;
  --grid-n-row: 1fr 1fr;
}

.skills {
  height: var(--quarter-height);
  --grid-n-column: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
  --grid-n-row: 1fr;
}

.education {
  height: var(--quarter-height-heading);
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
</style>
