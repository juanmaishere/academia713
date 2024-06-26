


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
// secciones scroll into , scroll smooth en botones

const COUNT = 800;
        const SPEED = 0.07;

        class Star {
            constructor(x = 0, y = 0, z = 0) {
                this.x = x;
                this.y = y;
                this.z = z;
                this.xPrev = x;
                this.yPrev = y;
            }

            update(width, height, speed) {
                this.xPrev = this.x;
                this.yPrev = this.y;
                this.z += speed * 0.0675;
                this.x += this.x * (speed * 0.0225) * this.z;
                this.y += this.y * (speed * 0.0225) * this.z;
                if (this.x > width / 2 || this.x < -width / 2 || this.y > height / 2 || this.y < -height / 2) {
                    this.x = Math.random() * width - width / 2;
                    this.y = Math.random() * height - height / 2;
                    this.xPrev = this.x;
                    this.yPrev = this.y;
                    this.z = 0;
                }
            }

            draw(ctx) {
                ctx.lineWidth = this.z;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.xPrev, this.yPrev);
                ctx.stroke();
            }
        }

        const stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0));
        let rafId = 0;

        const canvas = document.querySelector("#starfield-canvas");
        const ctx = canvas.getContext("2d");

        const container = document.querySelector("#starfield");
        const resizeObserver = new ResizeObserver(setup);
        resizeObserver.observe(container);

        function setup() {
            rafId > 0 && cancelAnimationFrame(rafId);
            
            const { clientWidth: width, clientHeight: height } = container;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);

            for (const star of stars) {
                star.x = Math.random() * width - width / 2;
                star.y = Math.random() * height - height / 2;
                star.z = 0;
            }

            ctx.translate(width / 2, height / 2);
            ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
            ctx.strokeStyle = "white";
            rafId = requestAnimationFrame(frame);
        }

        function frame() {
            const { clientWidth: width, clientHeight: height } = container;

            for (const star of stars) {
                star.update(width, height, SPEED);
                star.draw(ctx);
            }

            ctx.fillRect(-width / 2, -height / 2, width, height);
            rafId = requestAnimationFrame(frame);
        }

        setup();

        ////////////
        