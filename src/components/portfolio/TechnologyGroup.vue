<template>
  <div class="technology-group grid">
    <div></div>
    
    <!-- Backend -->
    <div>
      <img v-if="performCheck(isJava)" alt="Java" class="technology" src="../../assets/technologies/java.png" />
      <img v-if="performCheck(isSpring)" alt="Spring" class="technology" src="../../assets/technologies/spring.svg" />
      <img v-if="performCheck(isMaven)" alt="Maven" class="technology" src="../../assets/technologies/maven.svg" />
      <img v-if="performCheck(isGradle)" alt="Gradle" class="technology" src="../../assets/technologies/gradle.svg" />
      <img v-if="performCheck(isAws)" alt="AWS" class="technology" src="../../assets/technologies/aws.png" />
      <img v-if="performCheck(isJunit)" alt="Junit" class="technology" src="../../assets/technologies/junit.png" />
    </div>

    <div></div> <!-- Divisor -->

    <!-- Database -->
    <div>
      <img v-if="performCheck(isMySql)" alt="MySQL" class="technology" src="../../assets/technologies/mySQL.png" />
      <img v-if="performCheck(isOracleDb)" alt="Oracle DB" class="technology" src="../../assets/technologies/oracleDB.png" />
    </div>

    <div></div> <!-- Divisor -->

    <!-- Frontend -->
    <div>
      <img v-if="performCheck(isVue)" alt="Vue" class="technology" src="../../assets/technologies/vue.png" />
      <img v-if="performCheck(isAngular)" alt="Angular" class="technology" src="../../assets/technologies/angular.png" />
      <img v-if="performCheck(isHtml)" alt="HTML5" class="technology" src="../../assets/technologies/html.png" />
      <img v-if="performCheck(isCss)" alt="CSS3" class="technology" src="../../assets/technologies/css.png" />
      <img v-if="performCheck(isJs)" alt="JS" class="technology" src="../../assets/technologies/js.png" />
      <img v-if="performCheck(isBootstrap)" alt="Bootstrap" class="technology" src="../../assets/technologies/bootstrap.png" />
    </div>

    <div></div> <!-- Divisor -->

    <!-- Tools -->
    <div>
      <img v-if="performCheck(isGit)" alt="Git" class="technology" src="../../assets/technologies/git.png" />
      <img v-if="performCheck(isGithub)" alt="Github" class="technology" src="../../assets/technologies/github.svg" />
      <img v-if="performCheck(isJenkins)" alt="Jenkins" class="technology" src="../../assets/technologies/jenkins.png" />
      <img v-if="performCheck(isJira)" alt="Jira" class="technology" src="../../assets/technologies/jira.svg" />
      <img v-if="performCheck(isBitbucket)" alt="Bitbucket" class="technology" src="../../assets/technologies/bitbucket.svg" />
      <img v-if="performCheck(isConfluence)" alt="Confluence" class="technology" src="../../assets/technologies/confluence.svg" />
      <img v-if="performCheck(isSourceTree)" alt="SourceTree" class="technology" src="../../assets/technologies/sourcetree.svg" />
      <img v-if="performCheck(isPostman)" alt="Postman" class="technology" src="../../assets/technologies/postman.svg" />
    </div>

    <div></div> <!-- Divisor -->

    <!-- IDEs -->
    <div>
      <img v-if="performCheck(isIntelliJ)" alt="IntelliJ" class="technology" src="../../assets/technologies/intelliJ.png" />
      <img v-if="performCheck(isWebstorm)" alt="Webstorm" class="technology" src="../../assets/technologies/webStorm.png" />
      <img v-if="performCheck(isEclipse)" alt="Eclipse" class="technology" src="../../assets/technologies/eclipse.png" />
      <img v-if="performCheck(isVisualStudioCode)" alt="Visual Studio Code" class="technology" src="../../assets/technologies/visualStudioCode.svg" />
      <img v-if="performCheck(isVisualStudio)" alt="Visual Studio" class="technology" src="../../assets/technologies/visualStudio.svg" />
      <img v-if="performCheck(isUnity)" alt="Unity" class="technology" src="../../assets/technologies/unity.png" />
    </div>

    <div></div> <!-- Divisor -->

    <!-- Servers -->
    <div>
      <img v-if="performCheck(isDocker)" alt="Docker" class="technology" src="../../assets/technologies/docker.webp" />
      <img v-if="performCheck(isNodeJs)" alt="NodeJs" class="technology" src="../../assets/technologies/nodeJS.png" />
      <img v-if="performCheck(isNpm)" alt="Npm" class="technology" src="../../assets/technologies/npm.svg" />
      <img v-if="performCheck(isTomcat)" alt="Tomcat" class="technology" src="../../assets/technologies/tomcat.png" />
      <img v-if="performCheck(isJboss)" alt="Jboss" class="technology" src="../../assets/technologies/redHat.png" />
    </div>
    
    <div></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
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

function getTechnologyNumber(){
  let number = 0;
  if(performCheck(props.isJava)) number++;
  if(performCheck(props.isSpring)) number++;
  if(performCheck(props.isMySql)) number++;
  if(performCheck(props.isAngular)) number++;
  if(performCheck(props.isHtml)) number++;
  if(performCheck(props.isCss)) number++;
  if(performCheck(props.isJs)) number++;
  if(performCheck(props.isVue)) number++;
  if(performCheck(props.isIntelliJ)) number++;
  if(performCheck(props.isWebstorm)) number++;
  if(performCheck(props.isEclipse)) number++;
  if(performCheck(props.isVisualStudioCode)) number++;
  if(performCheck(props.isVisualStudio)) number++;
  if(performCheck(props.isPostman)) number++;
  if(performCheck(props.isGit)) number++;
  if(performCheck(props.isGithub)) number++;
  if(performCheck(props.isJenkins)) number++;
  if(performCheck(props.isJira)) number++;
  if(performCheck(props.isBitbucket)) number++;
  if(performCheck(props.isConfluence)) number++;
  if(performCheck(props.isSourceTree)) number++;
  if(performCheck(props.isDocker)) number++;
  if(performCheck(props.isAws)) number++;
  if(performCheck(props.isMaven)) number++;
  if(performCheck(props.isGradle)) number++;
  if(performCheck(props.isJunit)) number++;
  if(performCheck(props.isNodeJs)) number++;
  if(performCheck(props.isNpm)) number++;
  if(performCheck(props.isTomcat)) number++;
  if(performCheck(props.isJboss)) number++;
  if(performCheck(props.isUnity)) number++;
  if(performCheck(props.isOracleDb)) number++;
  if(performCheck(props.isBootstrap)) number++;
  return number;
}

function performCheck(check){
  return props.isAll || check;
}

const technologySections = getTechnologyNumber();
</script>

<style scoped>
.technology {
  width: var(--technology-icon);
  height: var(--technology-icon);
}

.technology-group {
  --number-of-sections: v-bind(technologyNumber);
  --grid-n-column: var(--padding-space) repeat(var(--number-of-sections), 1fr) var(--padding-space);
  --grid-n-row: 1fr;
  grid-gap: 20px;
}
</style>