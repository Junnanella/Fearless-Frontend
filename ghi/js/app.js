window.addEventListener("DOMContentLoaded", async () => {
  const url = "http://localhost:8000/api/conferences/";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Figure out what to do when the response is bad
      throw new Error("Response not ok");
    } else {
      const data = await response.json();

      const conference = data.conferences[0];
      const conferenceName = document.querySelector(".card-title");
      conferenceName.innerHTML = conference.name;

      const detailUrl = `http://localhost:8000${conference.href}`;
      const detailResponse = await fetch(detailUrl);
      if (detailResponse.ok) {
        const details = await detailResponse.json();

        const description = details.conference;
        const conferenceDescription = document.querySelector(".card-text");
        conferenceDescription.innerHTML = description.description;
      }
    }
  } catch (e) {
    // Figure out what to do if an error is raised
    (error) => console.error("error", error);
  }
});
