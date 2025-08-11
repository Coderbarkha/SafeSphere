const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  // Toggle dark mode on body
  document.body.classList.toggle('dark-mode');

  // Check if dark mode is now ON
  const isDarkMode = document.body.classList.contains('dark-mode');

  // Change icon accordingly
  if (isDarkMode) {
    themeToggle.classList.remove('bi-moon-stars');
    themeToggle.classList.add('bi-sun');
  } else {
    themeToggle.classList.remove('bi-sun');
    themeToggle.classList.add('bi-moon-stars');
  }
});


// Search Toggle
const searchToggle = document.getElementById('searchToggle');
const searchInput = document.getElementById('searchInput');
searchToggle.addEventListener('click', () => {
  searchInput.classList.toggle('d-none');
  searchInput.focus();
});

// Notification Bell (Demo)
const notificationBell = document.getElementById('notificationBell');
const notificationDot = document.querySelector('.notification-dot');
let hasNotifications = true;
if (hasNotifications) notificationDot.style.display = 'block';
notificationBell.addEventListener('click', () => {
  alert("No new notifications!");
  notificationDot.style.display = 'none';
  hasNotifications = false;
});



// hero js
// Typing Effect
const typedText = document.getElementById("typed-text");
const textArray = ["Ensuring Safety.", "Building Trust.", "Protecting Communities."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = textArray[textIndex];
  if (!isDeleting) {
    typedText.textContent = currentText.slice(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typedText.textContent = currentText.slice(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 150);
}
typeEffect();
