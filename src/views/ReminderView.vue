<template>
  <ReminderForm class="scrolling-slide"></ReminderForm>
  <ReminderList class="scrolling-slide"></ReminderList>
</template>

<script setup>
import ReminderForm from "@/components/taskReminder/ReminderForm";
import ReminderList from "@/components/taskReminder/ReminderList";

import { onMounted } from "vue";
onMounted(() => {
  import("../js/util.js");
});
</script>

<style scoped></style>
