// document.addEventListener("DOMContentLoaded", function () {
//     const projectContainer = document.querySelector(".project-container");
//     const slides = document.querySelectorAll(".slide");
//     const nextBtn = document.getElementById("next");
//     const prevBtn = document.getElementById("prev");
//     let currentIndex = 0;
//     const totalSlides = slides.length;
//     let autoSlide;

//     function updateSlide() {
//         projectContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         updateSlide();
//     }

//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//         updateSlide();
//     }

//     function startAutoSlide() {
//         autoSlide = setInterval(nextSlide, 5000);
//     }

//     function resetAutoSlide() {
//         clearInterval(autoSlide);
//         startAutoSlide();
//     }

//     nextBtn.addEventListener("click", function () {
//         nextSlide();
//         resetAutoSlide();
//     });

//     prevBtn.addEventListener("click", function () {
//         prevSlide();
//         resetAutoSlide();
//     });

//     startAutoSlide();
// });

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