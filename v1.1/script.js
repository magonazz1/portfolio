/* Toggle Menu */
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show"); /* Toggle the 'show' class */
}
/* Dark Mode */
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙'; // Change icon
    localStorage.setItem('dark-mode', isDarkMode); // Save preference
});

// Check for saved preference
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}