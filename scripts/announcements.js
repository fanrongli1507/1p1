
//import { announcements } from "../data/announcements-list.js";
import { fetchAnnouncements } from "../data/announcements-list.js";

async function renderAnnouncements() {
  const announcements = await fetchAnnouncements();

  const html = announcements
    .map((value, index) => {
      const bgClass = index % 2 === 0 ? "black-bg" : "white-bg";
      return `<div class="${bgClass}">
        <div class="name">${value.name}</div>
        <div class="content">${value.content}</div>
        <div class="date-created">Date created: ${new Date(value["date-created"]).toLocaleString()}</div>
        <div class="deadline">Deadline: ${new Date(value["deadline"]).toLocaleString()}</div>
      </div>`;
    })
    .join("");

  document.querySelector(".js-list").innerHTML = html;
}

renderAnnouncements();
