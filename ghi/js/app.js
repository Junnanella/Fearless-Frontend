function createCard(
  name,
  description,
  pictureUrl,
  startDate,
  endDate,
  locationName
) {
  return `
    <div class="card border-0 shadow p-3 mb-5 bg-body rounded m-1">
        <img src=${pictureUrl} class="card-img-top">
        <div class="card-body ">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${locationName}</h6>
        <p class="card-text">${description}</p>
        </div>
        <p class="card-footer card-text">${startDate} - ${endDate}</p>
    </div>
    `;
}

window.addEventListener("DOMContentLoaded", async () => {
  const url = "http://localhost:8000/api/conferences/";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Figure out what to do when the response is bad
      throw new Error("Response not ok");
    } else {
      const data = await response.json();

      for (let conference of data.conferences) {
        const detailUrl = `http://localhost:8000${conference.href}`;
        const detailResponse = await fetch(detailUrl);
        if (detailResponse.ok) {
          const details = await detailResponse.json();
          const name = details.conference.name;
          const locationName = details.conference.location.name;
          const description = details.conference.description;
          const pictureUrl = details.conference.location.picture_url;
          const startDate = details.conference.starts;
          const endDate = details.conference.ends;
          const html = createCard(
            name,
            description,
            pictureUrl,
            startDate,
            endDate,
            locationName
          );
          const row = document.querySelector(".row");
          row.innerHTML += html;
        }
      }
    }
  } catch (e) {
    console.error(e);
    // Figure out what to do if an error is raised
    (error) => console.error("error", error);
  }
});
