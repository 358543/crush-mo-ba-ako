const buttonContainer = document.getElementById("button-container");
const messageDiv = document.getElementById("message");

// Function to create a new Yes button
function createYesButton() {
  const newYesBtn = document.createElement("button");
  newYesBtn.textContent = "Yes";
  newYesBtn.className = "yes-btn"; // Assign class for styling
  newYesBtn.style.backgroundColor = "#ff6699";
  newYesBtn.style.color = "white";
  newYesBtn.style.padding = "15px 30px";
  newYesBtn.style.fontSize = "1.2rem";
  newYesBtn.style.margin = "10px";
  newYesBtn.style.border = "none";
  newYesBtn.style.borderRadius = "5px";
  newYesBtn.style.cursor = "pointer";

  // Attach event listener to new Yes button
  newYesBtn.addEventListener("click", showMessage);

  buttonContainer.appendChild(newYesBtn);
}

// Function to show the message and hide buttons
function showMessage() {
  messageDiv.classList.remove("hidden");
  buttonContainer.classList.add("hidden");
}

// Move the "No" button randomly on hover without overlapping "Yes" buttons
document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no-btn");

  noBtn.addEventListener("mouseover", () => {
    let randomX, randomY, overlap;
    
    do {
      randomX = Math.floor(Math.random() * (window.innerWidth - 100));
      randomY = Math.floor(Math.random() * (window.innerHeight - 50));
      overlap = checkOverlap(randomX, randomY);
    } while (overlap);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  });

  // Add new "Yes" button when "No" is clicked
  noBtn.addEventListener("click", createYesButton);
});

// Function to check if new "No" button position overlaps with any "Yes" buttons
function checkOverlap(x, y) {
  const yesButtons = document.querySelectorAll(".yes-btn");
  for (let btn of yesButtons) {
    const rect = btn.getBoundingClientRect();
    if (
      x < rect.right &&
      x + 100 > rect.left &&
      y < rect.bottom &&
      y + 50 > rect.top
    ) {
      return true; // Overlapping detected
    }
  }
  return false;
}
