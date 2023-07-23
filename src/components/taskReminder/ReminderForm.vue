<template>
  <div class="reminder-form-container">
    <form class="reminder-form">
      <h1>Reminder Form</h1>
      <div class="input-group">
        <label for="reminderTime">Reminder Time</label>
        <input
          type="time"
          id="reminderTime"
          name="reminderTime"
          v-model="reminderTime"
        />
      </div>
      <div class="input-group">
        <label for="reminderText">Description</label>
        <textarea id="reminderText" name="reminderText" v-model="reminderText" />
      </div>
      <div class="input-group">
        <label for="reminderWeekday">Days of the week</label>
        <select
          v-model="reminderWeekday"
          id="reminderWeekday"
          name="reminderWeekday"
          multiple
        >
          <option value="" disabled>Select Option</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div>
      <div class="input-group">
        <label for="isRecurring">Recurring every week?</label>
        <input
          type="checkbox"
          id="isRecurring"
          name="isRecurring"
          v-model="isRecurring"
        />
      </div>
      <div class="button-group-end">
        <button @click="addReminder">Add</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { saveReminder } from "@/js/services/reminderService";

const reminderText = ref("");
const reminderTime = ref("");
const isRecurring = ref(false);
const reminderWeekday = ref([]);

function addReminder() {
  const json = {
    reminderText: reminderText.value,
    creationDate: new Date(),
    reminderTime: reminderTime.value,
    recurring: isRecurring.value,
    reminderWeekday: reminderWeekday.value.join(","),
    done: false,
  };
  saveReminder(
    (response) => response.json(),
    (data) => console.log(data),
    json
  );
}
</script>

<style scoped>
.reminder-form {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.reminder-form-container {
  height: var(--half-height);
}
</style>
