// Inline JavaScript for countdown and delayed content display
function displayContent() {
  // Countdown function
  function countdown() {
    const now = new Date();
    const birthday = new Date("2006-01-01"); // Replace with her birthday in YYYY-MM-DD format
    const difference = birthday - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById(
      "countdown"
    ).innerHTML = `Only ${days} days until your special day!`;
  }

  // Call the countdown function
  countdown();

  // Display the content after 12 seconds
  setTimeout(() => {
    document.querySelector(".animated-message").style.opacity = 1;
    document.querySelector(".countdown").style.opacity = 1;
    document.querySelector(".animated-footer").style.opacity = 1;
  }, 12000); // 12 seconds delay
}

// Call the displayContent function
displayContent();
