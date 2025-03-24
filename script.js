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
