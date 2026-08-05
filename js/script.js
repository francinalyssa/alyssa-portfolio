// ==========================
// Sticky Navbar
// ==========================

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "12px 0";
        navbar.style.background = "rgba(255,255,255,.92)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.padding = "18px 0";
        navbar.style.background = "rgba(255,255,255,.65)";
        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.05)";

    }

});

// ==========================
// Active Navbar Link
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==========================
// Fade In Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
".project-card,.skill-card,.info-card,.timeline-item,.certificate-card"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// TourEase
const tourCarousel = new bootstrap.Carousel('#tourEaseCarousel', {
    interval: 1000,
    ride: false,
    pause: false
});

const tourElement = document.querySelector('#tourEaseCarousel');

tourElement.addEventListener('mouseenter', () => {
    tourCarousel.cycle();
});

tourElement.addEventListener('mouseleave', () => {
    tourCarousel.pause();
    tourCarousel.to(0);
});


// Internship
const internshipCarousel = new bootstrap.Carousel('#internshipCarousel', {
    interval: 1000,
    ride: false,
    pause: false
});

const internshipElement = document.querySelector('#internshipCarousel');

internshipElement.addEventListener('mouseenter', () => {
    internshipCarousel.cycle();
});

internshipElement.addEventListener('mouseleave', () => {
    internshipCarousel.pause();
    internshipCarousel.to(0);
});

