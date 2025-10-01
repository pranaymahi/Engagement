// Petal colors
const colors = ["pink", "yellow", "white"];

// Function to create a single petal
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  // Random color
  const color = colors[Math.floor(Math.random() * colors.length)];
  petal.classList.add(color);

  // Random size
  const size = Math.random() * 20 + 20; // 20px - 40px
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;

  // Random position across screen
  petal.style.left = Math.random() * 100 + "vw";

  // Random animation timing
  petal.style.animationDuration = (Math.random() * 5 + 8) + "s"; // 8s - 13s
  petal.style.animationDelay = Math.random() * 3 + "s";

  document.body.appendChild(petal);

  // Remove petal after animation ends
  setTimeout(() => {
    petal.remove();
  }, 15000);
}

// Function to create a burst of petals
function petalBurst(count = 20) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => createPetal(), i * 100); // stagger petals
  }
}

// Initial burst when page loads
window.addEventListener("load", () => {
  petalBurst(25); // 🎉 25 petals burst at start
});

// Keep creating petals gently
setInterval(createPetal, 800); // one petal every 0.8s

// Extra burst when clicking the floating button
document.getElementById("floating-btn").addEventListener("click", () => {
  petalBurst(40); // 💐 Big burst of 40 petals
});
