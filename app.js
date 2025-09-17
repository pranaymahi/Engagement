const weddingDate = new Date("November 15, 2025 00:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "The big day is here!";
  }
}, 1000);
