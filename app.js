// Countdown Timer
const countdown = document.getElementById('countdown');
const weddingDate = new Date("Oct 11, 2025 10:30:00 AM").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdown.innerHTML = "🎉 The Engagement Day is Here!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s left`;
}, 1000);

// Petal falling using emojis
const flowers = ["🌸","🌼","💮","🌺","🌻"];

// Function to create a single petal
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (Math.random() * 20 + 20) + "px"; // 20–40px
  petal.style.animationDuration = (Math.random() * 5 + 8) + "s";

  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 15000);
}

// Function to create a burst of petals
function petalBurst(count = 20) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => createPetal(), i * 100);
  }
}

// Initial burst on page load
window.addEventListener("load", () => {
  petalBurst(25);
});

// Continuous gentle petals
setInterval(createPetal, 800);

// Burst when schedule button is clicked
document.getElementById("floating-btn").addEventListener("click", () => {
  petalBurst(40);
});
