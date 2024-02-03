// This script could be used for a menu toggle or other interactive elements

// Wait for the DOM content to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Example: toggling a class for a menu - assuming you have a .menu-toggle element
    const menuToggle = document.querySelector('.menu-toggle'); // Select the menu toggle element
    menuToggle.addEventListener('click', () => { // Add a click event listener
        document.body.classList.toggle('menu-open'); // Toggle a class on the body element
    });
});