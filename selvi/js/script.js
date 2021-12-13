"use strict";

window.addEventListener("DOMContentLoaded", () => {
    let loader = document.querySelector(".loader");
    setTimeout(function() {
        loader.style.opacity = "0";
        setTimeout(function() {
            loader.style.display = "none"
        }, 2000)
    }, 3000)

    // btn navbar 
    const toggle = document.getElementById("toggle"),
    mobileMenu = document.getElementById("mobile_menu");

toggle.onclick = function() {
    toggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
}    
})

