const themeToggleButton = document.getElementById('theme-toggle-button');
let currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved or default theme
document.documentElement.setAttribute('data-theme', currentTheme);
updateButtonText(currentTheme);

themeToggleButton.addEventListener('click', () => {
  // Toggle between light and dark themes
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Apply the new theme
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Save the new theme preference
  localStorage.setItem('theme', currentTheme);

  // Update button text
  updateButtonText(currentTheme);
});

function updateButtonText(theme) {
  themeToggleButton.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}
