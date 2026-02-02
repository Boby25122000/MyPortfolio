//! Nav Bar  ---Header---
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".mobile-nav-icon i");
    const mobileNavContainer = document.querySelector(".mobile-nav-container");
    const closeIcon = document.querySelector(".bi-backspace-reverse");
    const mobileNav = document.querySelector(".mobile-nav");
    
    // Function to open the mobile nav
    menuIcon.addEventListener("click", function () {
        mobileNavContainer.style.display = "flex";
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    });
    
    // Function to close the mobile nav
    closeIcon.addEventListener("click", function () {
        mobileNavContainer.style.display = "none";
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    });
    
    // Close the menu when a link is clicked
    document.querySelectorAll(".mobile-nav-container a").forEach(link => {
        link.addEventListener("click", function () {
            mobileNavContainer.style.display = "none";
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        });
    });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

//! Title
document.addEventListener("DOMContentLoaded", function() {
    let text = "Developer";
    let index = 0;
    let span = document.querySelector(".highlight");
    
    function typeEffect() {
        if (index < text.length) {
            span.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 200); 
        }
    }

    typeEffect();
});

//! Experience
const cards = document.querySelectorAll('.experience-card');

    cards.forEach(card => {

        // Card click → open details
        card.addEventListener('click', () => {

            // Close all other cards except the clicked one
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });

            // Toggle the clicked card
            card.classList.toggle('active');
        });

        // Cross button → close current card
        const closeBtn = card.querySelector('.exp-close');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent parent click
            card.classList.remove('active');
        });
    });