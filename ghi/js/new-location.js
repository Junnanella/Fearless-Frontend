// add event listener for when the DOM loads
window.addEventListener("DOMContentLoaded", async () => {
  // declare a variable that will hold the URL for the API
  const url = "http://localhost:8000/api/states/";

  // fetch the URL, use await so that we get a response and not a promise
  const response = await fetch(url);

  if (response.ok) {
    // get the data using json, don't forget to await
    const data = await response.json();

    // Get the select tag element by its id 'state'
    const selectTag = document.querySelector("select#state");

    // For each state in the states property of the data
    for (const state of data.states) {
      // Create an 'option' element
      const option = document.createElement("option");
      // Set the '.value' property of the option element to the
      // state's abbreviation
      option.value = state.abbreviation;
      // Set the '.innerHTML' property of the option element to
      // the state's name
      option.innerHTML = state.name;
      // Append the option element as a child of the select tag
      selectTag.appendChild(option);
    }
  }

  const formTag = document.getElementById("create-location-form");
  formTag.addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(formTag);
    const json = JSON.stringify(Object.fromEntries(formData));
    const locationUrl = "http://localhost:8000/api/locations/";
    const fetchConfig = {
      method: "post",
      body: json,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      formTag.reset();
      const newLocation = await response.json();
    }
  });
});
