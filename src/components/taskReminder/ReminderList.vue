<template>
  <table class="table-primary">
    <caption>
      Reminders
    </caption>
    <thead>
      <tr>
        <th>Time</th>
        <th>Text</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="reminder in reminders" :key="reminder.id">
        <td>{{ reminder.reminderTime }}</td>
        <td>{{ reminder.reminderText }}</td>
        <td><button v-on:click="openDialog(reminder.id)">Details</button></td>
        <dialog v-bind:id="'reminder' + reminder.id">
          <ReminderCard :reminder="reminder" @updateData="getAllReminders" />
        </dialog>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from "vue";
import ReminderCard from "@/components/taskReminder/ReminderCard";
import { getReminders } from "@/js/reminderService";

const reminders = ref([]);

getAllReminders();

function getAllReminders() {
  getReminders(
    (response) => response.json(),
    (data) => {
      reminders.value = data;
      return data;
    }
  );
}

function openDialog(id) {
  const dialog = document.getElementById("reminder" + id);
  dialog.showModal();
}
</script>

<style scoped>
dialog {
  border-radius: 30px;
  border: 0;
}
</style>
