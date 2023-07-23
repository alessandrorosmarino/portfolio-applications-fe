import {
    getEntity,
    saveEntity,
    deleteEntity,
    updateEntity,
    joinPaths,
} from "@/js/httpClient";

let basePath = "missions";

function saveMission(responseCallback, dataCallback, json) {
    saveEntity(basePath, responseCallback, dataCallback, json);
}

function getMissions(responseCallback, dataCallback) {
    getEntity(basePath, responseCallback, dataCallback);
}

function getMission(id, responseCallback, dataCallback) {
    getEntity(joinPaths(basePath, id), responseCallback, dataCallback);
}

function deleteMission(id, responseCallback, dataCallback) {
    deleteEntity(joinPaths(basePath, id), responseCallback, dataCallback);
}

function updateMission(id, responseCallback, dataCallback, json) {
    updateEntity(joinPaths(basePath, id), responseCallback, dataCallback, json);
}

export {
    saveMission,
    getMission,
    deleteMission,
    updateMission,
    getMissions,
};
