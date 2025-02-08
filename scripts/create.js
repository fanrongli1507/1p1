

document.querySelector(".js-submit").addEventListener("click", async () => {
  const name = document.querySelector(".js-name").value;
  const content = document.querySelector(".js-content").value;
  const deadline = document.querySelector(".js-deadline").value;

  const announcement = {
    "name": name,
    "content": content,
    "date-created": new Date(),
    "deadline": deadline,
  };

  try {
    const response = await fetch("https://onep1-announcements.onrender.com/announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(announcement),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
});
