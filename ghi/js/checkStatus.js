window.addEventListener("DOMContentLoaded", async () => {
  // Get the cookie out of the cookie store
  const payloadCookie = await cookieStore.get("jwt_access_payload");

  if (payloadCookie) {
    // The cookie value is a JSON-formatted string, so parse it
    // const encodedPayload = JSON.parse(payloadCookie.value);

    // Convert the encoded payload from base64 to normal string
    const decodedPayload = atob(payloadCookie.value);

    // The payload is a JSON-formatted string, so parse it
    const payload = JSON.parse(decodedPayload);
    // Print the payload
    console.log("payload: ", payload);

    // Check if "events.add_conference" is in the permissions.
    if (payload.user.perms.includes("events.add_conference")) {
      // If it is, remove 'd-none' from the link
      const newConferenceTag = document.getElementById("new-conference");
      newConferenceTag.classList.remove("d-none");
    }
    // Check if "events.add_location" is in the permissions.
    if (payload.user.perms.includes("events.add_location")) {
      // If it is, remove 'd-none' from the link
      const newLocationTag = document.getElementById("new-location");
      newLocationTag.classList.remove("d-none");
    }
  }
});
