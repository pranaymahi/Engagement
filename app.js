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

  countdown.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left`;
}, 1000);

// Modal schedule logic
const scheduleContent = document.getElementById("events-content");
const overlay = document.getElementById("overlay");
const floatingBtn = document.getElementById("floating-btn");

// Open/close toggle
function toggleSchedule() {
  scheduleContent.classList.toggle("show");
  overlay.classList.toggle("show");

  if (scheduleContent.classList.contains("show")) {
    scheduleContent.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// Close modal
function closeSchedule() {
  scheduleContent.classList.remove("show");
  overlay.classList.remove("show");
}

// Event listeners
floatingBtn.addEventListener("click", toggleSchedule);
overlay.addEventListener("click", closeSchedule);
