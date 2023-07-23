import {
  getEntity,
  saveEntity,
  deleteEntity,
  updateEntity,
  joinPaths,
} from "@/js/httpClient";

let basePath = "reminders";

function saveReminder(responseCallback, dataCallback, json) {
  saveEntity(basePath, responseCallback, dataCallback, json);
}

function getReminders(responseCallback, dataCallback) {
  getEntity(basePath, responseCallback, dataCallback);
}

function getReminder(id, responseCallback, dataCallback) {
  getEntity(joinPaths(basePath, id), responseCallback, dataCallback);
}

function deleteReminder(id, responseCallback, dataCallback) {
  deleteEntity(joinPaths(basePath, id), responseCallback, dataCallback);
}

function updateReminder(id, responseCallback, dataCallback, json) {
  updateEntity(joinPaths(basePath, id), responseCallback, dataCallback, json);
}

export {
  saveReminder,
  getReminder,
  deleteReminder,
  updateReminder,
  getReminders,
};
