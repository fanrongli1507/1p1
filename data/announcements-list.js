/*
export let announcements = JSON.parse(localStorage.getItem('announcements'))

if (!announcements) {
  announcements = [
  {
    "name": "announcment one",
    "content": "read your iemb",
    "date-created": new Date("2025-1-10"),
    "deadline": new Date("2025-2-10"),
  },
  {
    "name": "announcment one",
    "content": "read your iemb",
    "date-created": new Date("2025-1-10"),
    "deadline": new Date("2025-2-10"),
  },
  {
    "name": "announcment one",
    "content": "read your iemb",
    "date-created": new Date("2025-1-10"),
    "deadline": new Date("2025-2-10"),
  }]
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('announcements', JSON.stringify(announcements))
}
*/
export async function fetchAnnouncements() {
  try {
    const response = await fetch("https://onep1-announcements.onrender.com/announcements");
    const announcements = await response.json();
    return announcements;
  } catch (error) {
    console.error("Error fetching announcements:", error);
    return [];
  }
}
