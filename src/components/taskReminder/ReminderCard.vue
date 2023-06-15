<template>
  <div class="flex-vertical card">
    <div class="flex close">
      <div class="flex-vertical">
        <span>{{ reminder.reminderTime.substring(0, 5) }}</span>
        <span v-bind:class="getSuccessOrDangerClass(reminder.done)">
          {{ reminder.done ? "C" : "Not c" }}ompleted
        </span>
        <span v-if="reminder.recurring">Rescheduled Every Week</span>
      </div>
      <form>
        <button formmethod="dialog">x</button>
      </form>
    </div>

    <GroupButton
      class="days"
      :items="weekdays"
      property-to-emit="day"
      value-property-name="day"
      key-property-name="day"
      text-property-name="placeholder"
      button-group-position="end"
      :calculate-state-function="getSuccessOrDanger"
      calculate-state-property="scheduled"
      @clickEmission="toggleDay"
    ></GroupButton>

    <div class="flex description">
      {{ reminder.reminderText }}
    </div>
    <div class="buttons button-group-end">
      <button class="button-success" @click="toggleDone(reminder)">
        Toggle Done
      </button>
      <button class="button-danger" @click="remove(reminder.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { deleteReminder, updateReminder } from "@/js/reminderService";
import GroupButton from "@/components/GroupButton";

let props = defineProps({
  reminder: Object,
});

let emits = defineEmits(["updateData"]);

let weekdays = [
  { day: "monday", scheduled: ref(false), placeholder: "Mo" },
  { day: "tuesday", scheduled: ref(false), placeholder: "Tu" },
  { day: "wednesday", scheduled: ref(false), placeholder: "We" },
  { day: "thursday", scheduled: ref(false), placeholder: "Th" },
  { day: "friday", scheduled: ref(false), placeholder: "Fr" },
  { day: "saturday", scheduled: ref(false), placeholder: "Sa" },
  { day: "sunday", scheduled: ref(false), placeholder: "Su" },
];

setWeekdays(props.reminder);

function remove(id) {
  deleteReminder(
    id,
    () => {
      emits("updateData");
    },
    () => null
  );
}

function toggleDone(reminder) {
  const json = {
    reminderText: reminder.reminderText,
    creationDate: reminder.creationDate,
    reminderTime: reminder.reminderTime,
    recurring: reminder.recurring,
    reminderWeekday: reminder.reminderWeekday.join(","),
    done: !reminder.done,
  };
  updateReminder(
    reminder.id,
    () => {
      emits("updateData");
    },
    () => null,
    json
  );
}

function toggleDay(day) {
  let reminder = props.reminder;
  let found = reminder.reminderWeekday.find((weekday) => weekday === day);
  if (found !== undefined) {
    reminder.reminderWeekday = reminder.reminderWeekday.filter(
      (weekday) => weekday !== day
    );
  } else {
    reminder.reminderWeekday.push(day);
  }
  const json = {
    reminderText: reminder.reminderText,
    creationDate: reminder.creationDate,
    reminderTime: reminder.reminderTime,
    recurring: reminder.recurring,
    reminderWeekday: reminder.reminderWeekday.join(","),
    done: reminder.done,
  };
  updateReminder(
    reminder.id,
    () => {
      emits("updateData");
      setWeekdays(reminder);
    },
    () => null,
    json
  );
}

function setWeekdays(reminder) {
  weekdays.forEach((weekday) => {
    weekday.scheduled.value = false;
  });
  reminder.reminderWeekday.forEach((day) => {
    for (const weekday of weekdays) {
      if (weekday.day === day) {
        weekday.scheduled.value = true;
      }
    }
  });
}

function getSuccessOrDangerClass(control) {
  return (control ? "success" : "danger") + "-color";
}
function getSuccessOrDanger(control) {
  return control ? "success" : "danger";
}
</script>

<style scoped>
.card {
  width: 250px;
  height: 400px;
  align-items: center;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  border-radius: 20px;
  color: var(--text-color);
}

.card > div {
  width: 100%;
}

.close {
  justify-content: space-between;
  flex: 0 0 3em;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px;
  color: var(--text-color-contrast);
}

.days {
  flex: 0 0 2em;
  background-color: var(--primary-color-contrast);
}

.buttons {
  flex: 0 0 2em;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px;
}

.description {
  flex: 1 1 auto;
  justify-content: center;
  padding: 5px;
  background-color: var(--primary-color-contrast);
}
</style>
