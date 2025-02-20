import { fetchAnnouncements } from "../data/announcements-list.js";



async function renderAnnouncements() {

  async function deleteAnnouncements() {
    try {
      const announcement = {content: announcements}
      const response = await fetch("https://onep1-announcements.onrender.com/delete-announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(announcement),
      });
  
      const data = await response.json();
      console.log(data);
      alert('Sent successfully.');
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const announcements = await fetchAnnouncements();

  const html = announcements
    .map((value, index) => {
      const bgClass = index % 2 === 0 ? "black-bg" : "white-bg";
      return `<div class="${bgClass}">
        <div class="name">${value.name}</div>
        <div class="content">${value.content}</div>
        <div class="date-created">Date created: ${new Date(value["date-created"]).toLocaleString()}</div>
        <div class="deadline">Deadline: ${new Date(value["deadline"]).toLocaleString()}</div>
        <button class="js-delete delete" data-index="${index}">Delete</button>
      </div>`;
    }).join("");

  document.querySelector(".js-list").innerHTML = html;

  document.querySelectorAll('.js-delete')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', (event) => {
        announcements.splice(index, 1);
        deleteAnnouncements();
      });
    });
}

renderAnnouncements();
