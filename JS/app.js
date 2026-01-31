document.addEventListener("DOMContentLoaded", () => {

    // Sticky navbar shrink on scroll
    const stickyTopBar = document.querySelector(".sticky-top-bar");
    if (stickyTopBar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                stickyTopBar.classList.add("scrolled");
            } else {
                stickyTopBar.classList.remove("scrolled");
            }
        });
    }

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navRight  = document.querySelector('.nav-right');

    if (hamburger && navRight) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navRight.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-right a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navRight.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navRight.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navRight.classList.remove('active');
            }
        });
    }

    // Contact form feedback (fake submission)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            document.getElementById("contactMessage").textContent = "Thank you! Your message has been sent.";
            contactForm.reset();
        });
    }

});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Optional: close menu when clicking a link
document.querySelectorAll('.nav-right a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});


