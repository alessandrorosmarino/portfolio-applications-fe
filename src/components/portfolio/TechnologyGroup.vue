<template>
  <div class="technology-group grid">
    <div></div> <!-- Empty div to center the images -->
    <!-- Backend -->
    <div v-if="backendTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered important-text"> Backend </div>
      <div class="grid backend-technologies">
        <div></div> <!-- Empty div to center the images -->
        <div v-if="performCheck(isJava)" class="flex-centered">
          <img alt="Java" class="technology" src="../../assets/technologies/java.png" />
        </div>
        <div v-if="performCheck(isSpring)" class="flex-centered">
          <img alt="Spring" class="technology" src="../../assets/technologies/spring.svg" />
        </div>
        <div v-if="performCheck(isHibernate)" class="flex-centered">
          <img alt="Hibernate" class="technology" src="../../assets/technologies/hibernate.png" />
        </div>
        <div v-if="performCheck(isMaven)" class="flex-centered">
          <img alt="Maven" class="technology" src="../../assets/technologies/maven.svg" />
        </div>
        <div v-if="performCheck(isGradle)" class="flex-centered">
          <img alt="Gradle" class="technology" src="../../assets/technologies/gradle.svg" />
        </div>
        <div v-if="performCheck(isAws)" class="flex-centered">
          <img alt="AWS" class="technology" src="../../assets/technologies/aws.png" />
        </div>
        <div v-if="performCheck(isJunit)" class="flex-centered">
          <img alt="Junit" class="technology" src="../../assets/technologies/junit.png" />
        </div>
        <div v-if="performCheck(isRest)" class="flex-centered">
          <img alt="REST" class="technology" src="../../assets/technologies/rest.png" />
        </div>
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>

    <div v-if="separated" class="separator"></div> <!-- Divisor -->

    <!-- Database -->
    <div v-if="databaseTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered important-text"> Database </div>
      <div class="grid database-technologies">
        <div></div> <!-- Empty div to center the images -->
        <div v-if="performCheck(isMySql)" class="flex-centered">
          <img alt="MySQL" class="technology" src="../../assets/technologies/mySQL.png" />
        </div>
        <div v-if="performCheck(isOracleDb)" class="flex-centered">
          <img alt="Oracle DB" class="technology" src="../../assets/technologies/oracleDB.png" />
        </div>
        <div v-if="performCheck(isMariaDb)" class="flex-centered">
          <img alt="MariaDB" class="technology" src="../../assets/technologies/mariaDB.svg" />
        </div>
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>

    <div v-if="separated" class="separator"></div> <!-- Divisor -->

    <!-- Frontend -->
    <div v-if="frontendTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered important-text"> Frontend </div>
      <div class="grid frontend-technologies">
        <div></div> <!-- Empty div to center the images -->
        <div v-if="performCheck(isVue)" class="flex-centered">
          <img alt="Vue" class="technology" src="../../assets/technologies/vue.png" />
        </div>
        <div v-if="performCheck(isAngular)" class="flex-centered">
          <img alt="Angular" class="technology" src="../../assets/technologies/angular.png" />
        </div>
        <div v-if="performCheck(isHtml)" class="flex-centered">
          <img alt="HTML5" class="technology" src="../../assets/technologies/html.png" />
        </div>
        <div v-if="performCheck(isCss)" class="flex-centered">
          <img alt="CSS3" class="technology" src="../../assets/technologies/css.png" />
        </div>
        <div v-if="performCheck(isJs)" class="flex-centered">
          <img alt="JS" class="technology" src="../../assets/technologies/js.png" />
        </div>
        <div v-if="performCheck(isBootstrap)" class="flex-centered">
          <img alt="Bootstrap" class="technology" src="../../assets/technologies/bootstrap.png" />
        </div>
        <div v-if="performCheck(isJson)" class="flex-centered">
          <img alt="JSON" class="technology" src="../../assets/technologies/JSON.svg" />
        </div>
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>

    <div v-if="separated" class="separator"></div> <!-- Divisor -->

    <!-- Tools -->
    <div v-if="toolsTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered important-text"> Tools </div>
      <div class="grid tools-technologies">
        <div></div> <!-- Empty div to center the images -->
        <div v-if="performCheck(isGit)" class="flex-centered">
          <img alt="Git" class="technology" src="../../assets/technologies/git.png" />
        </div>
        <div v-if="performCheck(isGithub)" class="flex-centered">
          <img alt="Github" class="technology" src="../../assets/technologies/github.svg" />
        </div>
        <div v-if="performCheck(isJenkins)" class="flex-centered">
          <img alt="Jenkins" class="technology" src="../../assets/technologies/jenkins.png" />
        </div>
        <div v-if="performCheck(isJira)" class="flex-centered">
          <img alt="Jira" class="technology" src="../../assets/technologies/jira.svg" />
        </div>
        <div v-if="performCheck(isBitbucket)" class="flex-centered">
          <img alt="Bitbucket" class="technology" src="../../assets/technologies/bitbucket.svg" />
        </div>
        <div v-if="performCheck(isConfluence)" class="flex-centered">
          <img alt="Confluence" class="technology" src="../../assets/technologies/confluence.svg" />
        </div>
        <div v-if="performCheck(isSourceTree)" class="flex-centered">
          <img alt="SourceTree" class="technology" src="../../assets/technologies/sourcetree.svg" />
        </div>
        <div v-if="performCheck(isPostman)" class="flex-centered">
          <img alt="Postman" class="technology" src="../../assets/technologies/postman.svg" />
        </div>
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>

    <div v-if="separated" class="separator"></div> <!-- Divisor -->

    <!-- IDEs -->
    <div v-if="ideTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered important-text"> IDEs </div>
      <div class="grid ide-technologies">
        <div></div> <!-- Empty div to center the images -->
        <div v-if="performCheck(isIntelliJ)" class="flex-centered">
          <img alt="IntelliJ" class="technology" src="../../assets/technologies/intelliJ.png" />
        </div>
        <div v-if="performCheck(isWebstorm)" class="flex-centered">
          <img alt="Webstorm" class="technology" src="../../assets/technologies/webStorm.png" />
        </div>
        <div v-if="performCheck(isEclipse)" class="flex-centered">
          <img alt="Eclipse" class="technology" src="../../assets/technologies/eclipse.png" />
        </div>
        <div v-if="performCheck(isVisualStudioCode)" class="flex-centered">
          <img alt="Visual Studio Code" class="technology" src="../../assets/technologies/visualStudioCode.svg" />
        </div>
        <div v-if="performCheck(isVisualStudio)" class="flex-centered">
          <img alt="Visual Studio" class="technology" src="../../assets/technologies/visualStudio.svg" />
        </div>
        <div v-if="performCheck(isUnity)" class="flex-centered">
          <img alt="Unity" class="technology" src="../../assets/technologies/unity.png" />
        </div>
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>

    <div v-if="separated" class="separator"></div> <!-- Divisor -->

    <!-- Servers -->
    <div v-if="serverTechnologies > 0" class="grid technology-category">
      <div v-if="showCategoryText" class="flex-centered important-text"> Servers </div>
      <div class="grid server-technologies">
        <div></div> <!-- Empty div to center the images -->
        <div v-if="performCheck(isDocker)" class="flex-centered">
          <img alt="Docker" class="technology" src="../../assets/technologies/docker.webp" />
        </div>
        <div v-if="performCheck(isNodeJs)" class="flex-centered">
          <img alt="NodeJs" class="technology" src="../../assets/technologies/nodeJS.png" />
        </div>
        <div v-if="performCheck(isNpm)" class="flex-centered">
          <img alt="Npm" class="technology" src="../../assets/technologies/npm.svg" />
        </div>
        <div v-if="performCheck(isTomcat)" class="flex-centered">
          <img alt="Tomcat" class="technology" src="../../assets/technologies/tomcat.png" />
        </div>
        <div v-if="performCheck(isJboss)" class="flex-centered">
          <img alt="Jboss" class="technology" src="../../assets/technologies/redHat.png" />
        </div>
        <div></div> <!-- Empty div to center the images -->
      </div>
    </div>
    <div></div> <!-- Empty div to center the images -->
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isVertical: Boolean,
  isHorizontal: Boolean,
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
  isHibernate: Boolean,
  isJson: Boolean,
  isRest: Boolean,
  isMariaDb: Boolean,
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
  if(performCheck(props.isHibernate)) count++;
  if(performCheck(props.isRest)) count++;
  return count;
}

const databaseTechnologies = countDatabaseTechnologies();
function countDatabaseTechnologies(){
  let count = 0;
  if(performCheck(props.isMySql)) count++;
  if(performCheck(props.isOracleDb)) count++;
  if(performCheck(props.isMariaDb)) count++;
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
  if(performCheck(props.isJson)) count++;
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

let sectionGridTemplateColumns = "";
for (let i = 0; i < countNumberOfSections(); i++) {
  if(i!==0 && props.separated){
    sectionGridTemplateColumns += "1px ";
  }
  sectionGridTemplateColumns += "1fr ";
}

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

const technologyCategoryRows = (props.showCategoryText? "1em" : "") + " 1fr";

let technologyGroupColumnTemplate;
let technologyGroupRowTemplate;
if (props.isVertical) {
  technologyGroupColumnTemplate = "1fr";
  technologyGroupRowTemplate = "10px " + sectionGridTemplateColumns + " 10px";
}
if (props.isHorizontal) {
  technologyGroupColumnTemplate = "10px " + sectionGridTemplateColumns + " 10px";
  technologyGroupRowTemplate = "1fr";
}
</script>

<style scoped>
.separator{
  border: 1px solid var(--color);
}

.technology-category{
  --grid-n-column: 1fr;
  --grid-n-row: v-bind(technologyCategoryRows);
}

[class*="technologies"]{
  grid-gap: 30px;
  --grid-n-row: 1fr;
}

.backend-technologies{
  --grid-n-column: 1fr repeat(v-bind(backendTechnologies), var(--technology-icon)) 1fr;
}

.database-technologies{
  --grid-n-column: 1fr repeat(v-bind(databaseTechnologies), var(--technology-icon)) 1fr;
}

.frontend-technologies{
  --grid-n-column: 1fr repeat(v-bind(frontendTechnologies), var(--technology-icon)) 1fr;
}

.tools-technologies{
  --grid-n-column: 1fr repeat(v-bind(toolsTechnologies), var(--technology-icon)) 1fr;
}

.ide-technologies{
  --grid-n-column: 1fr repeat(v-bind(ideTechnologies), var(--technology-icon)) 1fr;
}

.server-technologies{
  --grid-n-column: 1fr repeat(v-bind(serverTechnologies), var(--technology-icon)) 1fr;
}

.technology {
  width: var(--technology-icon);
  height: var(--technology-icon);
}

.technology-group {
  --grid-n-column: v-bind(technologyGroupColumnTemplate);
  --grid-n-row: v-bind(technologyGroupRowTemplate);
  grid-gap: 15px;
}
</style>