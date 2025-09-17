// Wedding countdown timer
(function () {
  const countdownEl = document.getElementById('countdown');
  // Set wedding date here
  const weddingDate = new Date('November 15, 2025 00:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      countdownEl.textContent = "🎉 The wedding day has arrived! 🎉";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.textContent = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s until the big day!`;
  }

  // Initial call
  updateCountdown();

  // Update every second
  const timerInterval = setInterval(updateCountdown, 1000);
})();

// Dropdown toggle functionality
(function () {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.getElementById('events-content');

  dropbtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent click from bubbling to window
    dropdownContent.classList.toggle('show');
    // Optional: rotate arrow ▼ ▲
    if (dropdownContent.classList.contains('show')) {
      dropbtn.textContent = "Wedding Events Schedule ▲";
    } else {
      dropbtn.textContent = "Wedding Events Schedule ▼";
    }
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', function () {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
      dropbtn.textContent = "Wedding Events Schedule ▼";
    }
  });
})();
