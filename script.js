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


// //! name
// const title = document.querySelector(".title");
// const highlight = document.querySelector(".highlight");

// window.onload = () => {
//     title.style.opacity = 1;
//     title.style.transform =  "translateY(0)";
    
//     highlight.style.opacity = 1;
//     highlight.style.transform =  "translateY(0)";

// }

// //! About
// document.addEventListener("DOMContentLoaded", function () {
// const aboutContent = document.querySelector(".about-content-container");

// function handleScroll() {
//     const aboutSection = aboutContent.getBoundingClientRect();
//     if (aboutSection.top < window.innerHeight * 0.8) {
//         aboutContent.classList.add("show");
//     }
// }

// window.addEventListener("scroll", handleScroll);
// handleScroll(); 
// });

// //! Education
 