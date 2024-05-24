let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Automatically transition to the next slide every 10 seconds
setInterval(nextSlide, 5000);

// Show the first slide initially
showSlide(currentSlide);


// SIDEBAR opening y closing 
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
});


// secciones scroll into , scroll smooth en botones


document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton");
    var targetDiv = document.getElementById("informacion");

    scrollButton.addEventListener("click", function() {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("reviews");
    var targetDiv = document.getElementById("reviewsdiv");

    scrollButton.addEventListener("click", function() {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton2");
    var targetDiv = document.getElementById("informacion");

    scrollButton.addEventListener("click", function() {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
});