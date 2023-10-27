/*
let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar')
let mainContent = document.querySelector('.main--content')

menu.onclick = function() {
    sidebar.classList.toggle('active')
    mainContent.classList.toggle('active')
}
*/


/* ------ Variables ------ */

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Book Appointment Button inside the header
const bookAppointmentButton = document.querySelector('.book-appointment');

// Popup Forms
const clientPopup = document.getElementById('client-popup');
const adminLoginLink = document.getElementById('admin-login-link');
const adminPopup = document.getElementById('admin-popup');
const loginAsClientLink = document.getElementById('login-as-client-link');
const registerLink = document.getElementById('register-link');
const registerPopup = document.getElementById('register-popup');
const loginLink = document.getElementById('login-link');

// Close buttons of popup forms
const closeClientPopup = document.getElementById('close-popup');
const closeAdminPopup = document.getElementById('close-admin-popup');
const closeRegisterPopup = document.getElementById('close-register-popup');

/* ------ End Variables ------ */

// Function to disable scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScroll() {
    document.body.style.overflow = 'auto';
}

// Function to hide the hamburger menu
function hideHamburgerMenu() {
    navLinks.classList.remove('active');
    enableScroll(); // Enable scrolling
}

// Function to toggle hamburger menu
function toggleHamburgerMenu() {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        disableScroll(); // Disable scrolling
    } else {
        enableScroll(); // Enable scrolling
    }
}

// Open or close navLinks when hamburger is clicked
hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click propagation
    toggleHamburgerMenu();
});

// Close the hamburger menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (navLinks.classList.contains('active') && event.target !== hamburger && !navLinks.contains(event.target)) {
        hideHamburgerMenu();
    }
});

// Scroll to the top when the button is clicked with smooth scrolling
const scrollToTopButton = document.getElementById('scrollToTop');
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ------ Script for Popup Forms (Client Login, Admin Login, and Registration form) ------ */

// Book Appointment Button -> Open Client Login Form
bookAppointmentButton.addEventListener('click', () => {
    clientPopup.style.display = 'block';
    hideHamburgerMenu();
    disableScroll(); // Disable scrolling
});

// "Login as Admin" link -> Open Admin Login Form
adminLoginLink.addEventListener('click', () => {
    // Close the client login popup
    clientPopup.style.display = 'none';
    // Open the admin login popup
    adminPopup.style.display = 'block';
    hideHamburgerMenu();
    disableScroll(); // Disable scrolling
});

// "Login as a Client" link -> Get back to Client Login Form
loginAsClientLink.addEventListener('click', () => {
    // Close the admin login popup
    adminPopup.style.display = 'none';
    // Open the client login popup
    clientPopup.style.display = 'block';
    hideHamburgerMenu();
    disableScroll(); // Disable scrolling
});

// "Register" link -> Open Registration Form
registerLink.addEventListener('click', () => {
    // Close the client login popup
    clientPopup.style.display = 'none';
    // Open the registration form popup
    registerPopup.style.display = 'block';
    hideHamburgerMenu();
    disableScroll(); // Disable scrolling
});

// "Login" link -> Get back to Client Login Form
loginLink.addEventListener('click', () => {
    // Close the Registration Form Popup
    registerPopup.style.display = 'none';
    // Open the Client Login Popup
    clientPopup.style.display = 'block';
    hideHamburgerMenu();
    disableScroll(); // Disable scrolling
});

// Close Button -> Close Client Login Form
closeClientPopup.addEventListener('click', () => {
    clientPopup.style.display = 'none';
    enableScroll(); // Enable scrolling
});

// Close Button -> Close Admin Login Form
closeAdminPopup.addEventListener('click', () => {
    // Close the admin login popup
    adminPopup.style.display = 'none';
    enableScroll(); // Enable scrolling
});

// Close Button -> Close Registration Form
closeRegisterPopup.addEventListener('click', () => {
    // Close the registration form popup
    registerPopup.style.display = 'none';
    enableScroll(); // Enable scrolling
});

/* --------------------------------------------------------------------------------------- */
