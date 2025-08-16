const themeToggle = document.getElementById('themeToggle');

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.classList.remove('bi-moon-stars');
    themeToggle.classList.add('bi-sun');
  }
});

// Toggle on click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  if (isDarkMode) {
    themeToggle.classList.remove('bi-moon-stars');
    themeToggle.classList.add('bi-sun');
  } else {
    themeToggle.classList.remove('bi-sun');
    themeToggle.classList.add('bi-moon-stars');
  }
});
