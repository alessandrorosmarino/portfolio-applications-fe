function urlBuilder(relativeUrl) {
  return "http://" + window.location.hostname + ":8080/" + relativeUrl;
}

function deleteEntity(url, responseFunction, dataFunction) {
  const httpOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  httpCall(url, httpOptions, responseFunction, dataFunction);
}

async function httpCall(url, httpOptions, responseFunction, dataFunction) {
  fetch(urlBuilder(url), httpOptions)
    .then((response) => responseFunction(response))
    .then((data) => dataFunction(data));
}

function updateEntity(url, responseFunction, dataFunction, json) {
  const httpOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  };
  httpCall(url, httpOptions, responseFunction, dataFunction);
}

function saveEntity(url, responseFunction, dataFunction, json) {
  const httpOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  };
  httpCall(url, httpOptions, responseFunction, dataFunction);
}

function getEntity(url, responseFunction, dataFunction) {
  const httpOptions = {
    method: "GET",
  };
  httpCall(url, httpOptions, responseFunction, dataFunction);
}

function joinPaths() {
  let array = [];
  for (const argument of arguments) {
    array.push(argument);
  }
  return array.join("/");
}

export { deleteEntity, updateEntity, saveEntity, getEntity, joinPaths };
