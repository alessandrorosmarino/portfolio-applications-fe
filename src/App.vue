<template>
  <div class="theme-primary">
    <header>
      <div class="mouse-pointer">
        <header-burger>&#9776;</header-burger>
      </div>
      <div>
        <p class="cursor-blink-effect">{{ title }}</p>
      </div>
      <div>
        <img src="./assets/Logo.png" alt="AR" />
      </div>
    </header>
    <nav>
      <ul>
        <li>
          <router-link to="/" v-on:click="title = 'Alessandro\'s Portfolio'"
            >Home</router-link
          >
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/reminders" v-on:click="title = 'Task Reminders'"
            >Task Reminders</router-link
          >
        </li>
      </ul>
    </nav>
    <header-filler></header-filler>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let title = ref("Alessandro's Portfolio");

onMounted(() => {
  import("./js/navigation.js");
});
</script>

<style>
@import "css/stylesheet.css";

header-filler {
  width: 100%;
  height: var(--header-height);
  display: block;
}
</style>
