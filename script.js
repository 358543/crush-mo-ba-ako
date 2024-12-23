const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const messageDiv = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * window.innerWidth - 100);
  const randomY = Math.floor(Math.random() * window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
  messageDiv.classList.remove("hidden");
});
