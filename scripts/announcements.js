import { fetchAnnouncements } from "../data/announcements-list.js";

async function deleteAnnouncements(announcements) {
  try {
    const response = await fetch("https://onep1-announcements.onrender.com/delete-announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: announcements }),
    });

    const data = await response.json();
    console.log(data);
    alert("Sent successfully.");
    window.location.reload();
  } catch (error) {
    alert("Error")
    console.error("Error:", error);
  }
}

function closeFullscreen() {
  document.querySelector(".js-fullscreen-container").innerHTML = "<div></div>";
}

function showFullscreenAnnouncement(announcementContent, index, announcements) {
  document.querySelector(".js-fullscreen-container").innerHTML = `
    <div class="fullscreen">
      <div class="exit-container">
        <button class="exit">X</button>
      </div>
      <div class="name-display">${announcementContent.name}</div>
      <div class="content">${announcementContent.content}</div>
      <div class="date">
        <p>
          Date created: ${new Date(announcementContent["date-created"]).toLocaleString()}</p>
        <p>
          Deadline: ${new Date(announcementContent["deadline"]).toLocaleString()}
        </p>
        <div class="delete-container">
        <button class="js-delete delete" data-index=${index}>Delete</button>
        </div>
      </div>
    </div>`;

  document.querySelector(".exit").addEventListener("click", closeFullscreen);
  document.querySelector(".js-delete").addEventListener("click", () => {
    announcements.forEach((announcementContent, index) => {
      
    });
    announcements.splice(document.querySelector(".js-delete").getAttribute("data-index"), 1);
    deleteAnnouncements(announcements);
  });
}

async function renderAnnouncements() {
  const announcements = await fetchAnnouncements();
  const container = document.querySelector(".js-announcements");

  const html = announcements
    .map(
      (value, index) => `
      <div class="background announcement-card js-background" data-index="${index}">
        <div class="name">${value.name}</div>
      </div>`
    )
    .join("");

  container.innerHTML = html;

  document.querySelectorAll(".js-background").forEach((announcementItem, index) => {
    announcementItem.addEventListener("click", () => {
      showFullscreenAnnouncement(announcements[index], index, announcements);
    });
  });
}

renderAnnouncements();