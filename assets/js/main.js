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

// Function to open a popup with a sliding effect from the top
function openPopup(popup) {
    popup.style.display = 'block';
    hideHamburgerMenu();
    disableScroll();
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
    setTimeout(() => {
        popup.classList.add('bgcolor');
    }, 600);
}

// Function to close a popup with a sliding effect to the top
function closePopup(popup) {
    popup.classList.remove('active');
    enableScroll();
    setTimeout(() => {
        popup.style.display = 'none';
    }, 600);
    popup.classList.remove('bgcolor');
}

// Book Appointment Button -> Open Client Login Form
bookAppointmentButton.addEventListener('click', () => {
    openPopup(clientPopup);
});

// "Login as Admin" link -> Open Admin Login Form
adminLoginLink.addEventListener('click', () => {
    closePopup(clientPopup);
    openPopup(adminPopup);
});

// "Login as a Client" link -> Get back to Client Login Form
loginAsClientLink.addEventListener('click', () => {
    closePopup(adminPopup);
    openPopup(clientPopup);
});

// "Register" link -> Open Registration Form
registerLink.addEventListener('click', () => {
    closePopup(clientPopup);
    openPopup(registerPopup);
});

// "Login" link -> Get back to Client Login Form
loginLink.addEventListener('click', () => {
    closePopup(registerPopup);
    openPopup(clientPopup);
});

// Close Button -> Close Client Login Form
closeClientPopup.addEventListener('click', () => {
    closePopup(clientPopup);
});

// Close Button -> Close Admin Login Form
closeAdminPopup.addEventListener('click', () => {
    closePopup(adminPopup);
});

// Close Button -> Close Registration Form
closeRegisterPopup.addEventListener('click', () => {
    closePopup(registerPopup);
});

/* --------------------------------------------------------------------------------------- */

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let active = 0;
let interval = null;

function reloadSlider() {
  // Hide all items
  items.forEach(item => item.style.display = 'none');

  // Show the active item
  items[active].style.display = 'block';

  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[active].classList.add('active');

  // Clear the previous interval and start a new one
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

function nextSlide() {
  active = (active + 1) % items.length;
  reloadSlider();
}

function prevSlide() {
  active = (active - 1 + items.length) % items.length;
  reloadSlider();
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    active = index;
    reloadSlider();
  });
});

reloadSlider(); // Show the initial slide
