<template>
  <div class="technology-group grid">
    <div></div>
    
    <!-- Backend -->
    <div v-if="backendTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered"> Backend Related Technical Skills </div>
      <div class="grid backend-technologies">
        <div></div> <!-- Empty div to center the images -->
        <img v-if="performCheck(isJava)" alt="Java" class="technology" src="../../assets/technologies/java.png" />
        <img v-if="performCheck(isSpring)" alt="Spring" class="technology" src="../../assets/technologies/spring.svg" />
        <img v-if="performCheck(isMaven)" alt="Maven" class="technology" src="../../assets/technologies/maven.svg" />
        <img v-if="performCheck(isGradle)" alt="Gradle" class="technology" src="../../assets/technologies/gradle.svg" />
        <img v-if="performCheck(isAws)" alt="AWS" class="technology" src="../../assets/technologies/aws.png" />
        <img v-if="performCheck(isJunit)" alt="Junit" class="technology" src="../../assets/technologies/junit.png" />
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>

    <div v-if="separated" class="separator"></div> <!-- Divisor -->

    <!-- Database -->
    <div v-if="databaseTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered"> Database Related Technical Skills </div>
      <div class="grid database-technologies">
        <div></div> <!-- Empty div to center the images -->
        <img v-if="performCheck(isMySql)" alt="MySQL" class="technology" src="../../assets/technologies/mySQL.png" />
        <img v-if="performCheck(isOracleDb)" alt="Oracle DB" class="technology" src="../../assets/technologies/oracleDB.png" />
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>

    <div v-if="separated" class="separator"></div> <!-- Divisor -->

    <!-- Frontend -->
    <div v-if="frontendTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered"> Frontend Related Technical Skills </div>
      <div class="grid frontend-technologies">
        <div></div> <!-- Empty div to center the images -->
        <img v-if="performCheck(isVue)" alt="Vue" class="technology" src="../../assets/technologies/vue.png" />
        <img v-if="performCheck(isAngular)" alt="Angular" class="technology" src="../../assets/technologies/angular.png" />
        <img v-if="performCheck(isHtml)" alt="HTML5" class="technology" src="../../assets/technologies/html.png" />
        <img v-if="performCheck(isCss)" alt="CSS3" class="technology" src="../../assets/technologies/css.png" />
        <img v-if="performCheck(isJs)" alt="JS" class="technology" src="../../assets/technologies/js.png" />
        <img v-if="performCheck(isBootstrap)" alt="Bootstrap" class="technology" src="../../assets/technologies/bootstrap.png" />
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>

    <div v-if="separated" class="separator"></div> <!-- Divisor -->

    <!-- Tools -->
    <div v-if="toolsTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered"> Tools Related Technical Skills </div>
      <div class="grid tools-technologies">
        <div></div> <!-- Empty div to center the images -->
        <img v-if="performCheck(isGit)" alt="Git" class="technology" src="../../assets/technologies/git.png" />
        <img v-if="performCheck(isGithub)" alt="Github" class="technology" src="../../assets/technologies/github.svg" />
        <img v-if="performCheck(isJenkins)" alt="Jenkins" class="technology" src="../../assets/technologies/jenkins.png" />
        <img v-if="performCheck(isJira)" alt="Jira" class="technology" src="../../assets/technologies/jira.svg" />
        <img v-if="performCheck(isBitbucket)" alt="Bitbucket" class="technology" src="../../assets/technologies/bitbucket.svg" />
        <img v-if="performCheck(isConfluence)" alt="Confluence" class="technology" src="../../assets/technologies/confluence.svg" />
        <img v-if="performCheck(isSourceTree)" alt="SourceTree" class="technology" src="../../assets/technologies/sourcetree.svg" />
        <img v-if="performCheck(isPostman)" alt="Postman" class="technology" src="../../assets/technologies/postman.svg" />
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>

    <div v-if="separated" class="separator"></div> <!-- Divisor -->

    <!-- IDEs -->
    <div v-if="ideTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered"> IDEs Related Technical Skills </div>
      <div class="grid ide-technologies">
        <div></div> <!-- Empty div to center the images -->
        <img v-if="performCheck(isIntelliJ)" alt="IntelliJ" class="technology" src="../../assets/technologies/intelliJ.png" />
        <img v-if="performCheck(isWebstorm)" alt="Webstorm" class="technology" src="../../assets/technologies/webStorm.png" />
        <img v-if="performCheck(isEclipse)" alt="Eclipse" class="technology" src="../../assets/technologies/eclipse.png" />
        <img v-if="performCheck(isVisualStudioCode)" alt="Visual Studio Code" class="technology" src="../../assets/technologies/visualStudioCode.svg" />
        <img v-if="performCheck(isVisualStudio)" alt="Visual Studio" class="technology" src="../../assets/technologies/visualStudio.svg" />
        <img v-if="performCheck(isUnity)" alt="Unity" class="technology" src="../../assets/technologies/unity.png" />
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>

    <div v-if="separated" class="separator"></div> <!-- Divisor -->

    <!-- Servers -->
    <div v-if="serverTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered"> Servers Related Technical Skills </div>
      <div class="grid server-technologies">
        <div></div> <!-- Empty div to center the images -->
        <img v-if="performCheck(isDocker)" alt="Docker" class="technology" src="../../assets/technologies/docker.webp" />
        <img v-if="performCheck(isNodeJs)" alt="NodeJs" class="technology" src="../../assets/technologies/nodeJS.png" />
        <img v-if="performCheck(isNpm)" alt="Npm" class="technology" src="../../assets/technologies/npm.svg" />
        <img v-if="performCheck(isTomcat)" alt="Tomcat" class="technology" src="../../assets/technologies/tomcat.png" />
        <img v-if="performCheck(isJboss)" alt="Jboss" class="technology" src="../../assets/technologies/redHat.png" />
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>
    
    <div></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  separated:Boolean,
  showCategoryText: Boolean,

  isAll: Boolean,
  
  isJava: Boolean,
  isSpring: Boolean,
  isMySql: Boolean,
  isOracleDb: Boolean,
  isAngular: Boolean,
  isHtml: Boolean,
  isCss: Boolean,
  isBootstrap: Boolean,
  isJs: Boolean,
  isVue: Boolean,
  isIntelliJ: Boolean,
  isWebstorm: Boolean,
  isEclipse: Boolean,
  isVisualStudioCode: Boolean,
  isVisualStudio: Boolean,
  isPostman: Boolean,
  isGit: Boolean,
  isGithub: Boolean,
  isJenkins: Boolean,
  isJira: Boolean,
  isBitbucket: Boolean,
  isConfluence: Boolean,
  isSourceTree: Boolean,
  isDocker: Boolean,
  isAws: Boolean,
  isMaven: Boolean,
  isGradle: Boolean,
  isJunit: Boolean,
  isNodeJs: Boolean,
  isNpm: Boolean,
  isTomcat: Boolean,
  isJboss: Boolean,
  isUnity: Boolean,
});

function performCheck(check){
  return props.isAll || check;
}

const backendTechnologies = countBackendTechnologies();
function countBackendTechnologies(){
  let count = 0;
  if(performCheck(props.isJava)) count++;
  if(performCheck(props.isSpring)) count++;
  if(performCheck(props.isMaven)) count++;
  if(performCheck(props.isGradle)) count++;
  if(performCheck(props.isAws)) count++;
  if(performCheck(props.isJunit)) count++;
  return count;
}

const databaseTechnologies = countDatabaseTechnologies();
function countDatabaseTechnologies(){
  let count = 0;
  if(performCheck(props.isMySql)) count++;
  if(performCheck(props.isOracleDb)) count++;
  return count;
}

const frontendTechnologies = countFrontendTechnologies();
function countFrontendTechnologies(){
  let count = 0;
  if(performCheck(props.isAngular)) count++;
  if(performCheck(props.isVue)) count++;
  if(performCheck(props.isHtml)) count++;
  if(performCheck(props.isCss)) count++;
  if(performCheck(props.isBootstrap)) count++;
  if(performCheck(props.isJs)) count++;
  return count;
}

const toolsTechnologies = countToolsTechnologies();
function countToolsTechnologies(){
  let count = 0;
  if(performCheck(props.isGit)) count++;
  if(performCheck(props.isGithub)) count++;
  if(performCheck(props.isJenkins)) count++;
  if(performCheck(props.isJira)) count++;
  if(performCheck(props.isBitbucket)) count++;
  if(performCheck(props.isConfluence)) count++;
  if(performCheck(props.isSourceTree)) count++;
  if(performCheck(props.isPostman)) count++;
  return count;
}

const ideTechnologies = countIdeTechnologies();
function countIdeTechnologies(){
  let count = 0;
  if(performCheck(props.isIntelliJ)) count++;
  if(performCheck(props.isWebstorm)) count++;
  if(performCheck(props.isEclipse)) count++;
  if(performCheck(props.isVisualStudioCode)) count++;
  if(performCheck(props.isVisualStudio)) count++;
  if(performCheck(props.isUnity)) count++;
  return count;
}

const serverTechnologies = countServerTechnologies();
function countServerTechnologies(){
  let count = 0;
  if(performCheck(props.isDocker)) count++;
  if(performCheck(props.isNodeJs)) count++;
  if(performCheck(props.isNpm)) count++;
  if(performCheck(props.isTomcat)) count++;
  if(performCheck(props.isJboss)) count++;
  return count;
}

const numberOfSections = countNumberOfSections() + props.separated ? countNumberOfSections() - 1 : 0;
function countNumberOfSections(){
  let count = 0;
  if(countBackendTechnologies() > 0) count++;
  if(countDatabaseTechnologies() > 0) count++;
  if(countFrontendTechnologies() > 0) count++;
  if(countToolsTechnologies() > 0) count++;
  if(countIdeTechnologies() > 0) count++;
  if(countServerTechnologies() > 0) count++;
  return count;
}

</script>

<style scoped>
.separator{
  border: 1px solid var(--color);
}

.technology-category{
  --grid-n-column: 1fr;
  --grid-n-row: 1em 1fr;
}

.backend-technologies{
  --grid-n-column: 1fr repeat(v-bind(backendTechnologies), var(--technology-icon)) 1fr;
  --grid-n-row: 1fr;
}

.database-technologies{
  --grid-n-column: 1fr repeat(v-bind(databaseTechnologies), var(--technology-icon)) 1fr;
  --grid-n-row: 1fr;
}

.frontend-technologies{
  --grid-n-column: 1fr repeat(v-bind(frontendTechnologies), var(--technology-icon)) 1fr;
  --grid-n-row: 1fr;
}

.tools-technologies{
  --grid-n-column: 1fr repeat(v-bind(toolsTechnologies), var(--technology-icon)) 1fr;
  --grid-n-row: 1fr;
}

.ide-technologies{
  --grid-n-column: 1fr repeat(v-bind(ideTechnologies), var(--technology-icon)) 1fr;
  --grid-n-row: 1fr;
}

.server-technologies{
  --grid-n-column: 1fr repeat(v-bind(serverTechnologies), var(--technology-icon)) 1fr;
  --grid-n-row: 1fr;
}

.technology {
  width: var(--technology-icon);
  height: var(--technology-icon);
}

.technology-group {
  --number-of-sections: v-bind(numberOfSections);
  --grid-n-column: var(--padding-space) repeat(var(--number-of-sections), 1fr) var(--padding-space);
  --grid-n-row: 1fr;
}
</style>