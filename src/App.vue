<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/reminders">Task Reminders</router-link>
  </nav>
  <router-view />
</template>

<style>
@import "./css/common.css";
</style>
