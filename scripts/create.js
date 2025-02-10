document.querySelector(".js-submit").addEventListener("click", async () => {
  const name = document.querySelector(".js-name").value;
  const content = document.querySelector(".js-content").value;
  const deadline = `${document.querySelector(".js-deadline").value}T15:59:59`
  ;

  const announcement = {
    "name": name,
    "content": content,
    "date-created": new Date(),
    "deadline": deadline,
  };

  if (!name || !content || !deadline) {
    alert('Please fill up all areas.');
  } else {
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
      alert('Sent successfully.');

      document.querySelector(".js-name").value = '';
      document.querySelector(".js-content").value = '';
      document.querySelector(".js-deadline").value = '';
    } catch (error) {
      console.error("Error:", error);
    }
  }
});
