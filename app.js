const flowerImgs = ["assets/rose.png","assets/marigold.png","assets/jasmine.png"];

function createPetal() {
  const petal = document.createElement("img");
  petal.src = flowerImgs[Math.floor(Math.random() * flowerImgs.length)];
  petal.classList.add("petal");

  const size = Math.random() * 25 + 25;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (Math.random() * 5 + 8) + "s";

  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 15000);
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
