
//import { announcements } from "../data/announcements-list.js";
import { fetchAnnouncements } from "../data/announcements-list.js";

async function renderAnnouncements() {
  const announcements = await fetchAnnouncements();

  const html = announcements
    .map((value, index) => {
      const bgClass = index % 2 === 0 ? "black-bg" : "white-bg";
      return `<div class="${bgClass}">
        <div>${value.name}</div>
        <div>${value.content}</div>
        <div>${new Date(value["date-created"]).toLocaleString()}</div>
        <div>${new Date(value["deadline"]).toLocaleString()}</div>
      </div>`;
    })
    .join("");

  document.querySelector(".js-list").innerHTML = html;
}

renderAnnouncements();
