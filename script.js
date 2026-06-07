// script.js

// MOBILE MENU
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

// TYPING EFFECT
var typed = new Typed(".typing", {
    strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Web Designer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// AOS ANIMATION
AOS.init({
    duration: 1000,
    once: true
});