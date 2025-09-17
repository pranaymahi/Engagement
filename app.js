// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date("November 15, 2025 00:00:00").getTime();

    const now = new Date().getTime();
    const timeRemaining = weddingDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left`;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "It's our wedding day!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Handle RSVP form submission
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;
    const dietary = document.getElementById('dietary').value;

    // Here we simulate saving the RSVP (in a real-world app, you might send it to a server or email)
    const feedback = `
        <p>Thank you for your RSVP, ${name}!</p>
        <p>We are excited that you will be ${attending === "yes" ? "attending" : "not attending"}.</p>
        ${dietary ? `<p>Dietary Restrictions: ${dietary}</p>` : ""}
    `;
    document.getElementById('rsvp-feedback').innerHTML = feedback;

    // Clear the form after submission
    document.getElementById('rsvp-form').reset();
});
