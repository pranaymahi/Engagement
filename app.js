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

// Dropdown toggle
document.querySelector('.dropbtn').addEventListener('click', function () {
  document.getElementById('events-content').classList.toggle('show');
});

// Close dropdown if clicked outside
window.addEventListener('click', function(e) {
  if (!e.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown-content').forEach(drop => {
      drop.classList.remove('show');
    });
  }
});
