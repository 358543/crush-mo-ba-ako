const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const buttonContainer = document.getElementById("button-container");
const messageDiv = document.getElementById("message");

// Move the "No" button randomly on hover
noBtn.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

// Show message and hide buttons when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  messageDiv.classList.remove("hidden"); // Show the message
  buttonContainer.classList.add("hidden"); // Hide the button container
});
