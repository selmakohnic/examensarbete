"use strict";

var scrollPosition = 0;
var wrapperMenu = document.getElementById("wmenu");
var menuText = document.getElementById("menu-text");
var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

wrapperMenu.addEventListener("click", function () {
    $(".wrapper-menu").toggleClass("close-menu");
    $(".global-nav").toggleClass("hamburger-menu-nav");

    if (!wrapperMenu.classList.contains("close-menu")) {
        menuText.innerHTML = "Meny";
    }
    else {
        menuText.innerHTML = "Stäng";
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

function sidebar() {
    if (windowWidth <= 850) {
        $("#sidebar-info").toggle();
    }
}