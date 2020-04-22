"use strict";

var scrollPosition = 0;
var wrapperMenu = document.getElementById("wmenu");
var menuText = document.getElementById("menu-text");
var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

$(document).ready(function () {
    if (windowWidth <= 1000) {
        $(document).scroll(function () {
            scrollPosition = $(this).scrollTop();

            if (scrollPosition > 10) {
                $(".wrapper-header-index").css("background-color", "#F8F8F8");
            }
            else {
                $(".wrapper-header-index").css("background-color", "#F8F8F8");
            }
        });
    }
});

wrapperMenu.addEventListener("click", function () {
    $(".wrapper-menu").toggleClass("close-menu");
    $(".global-nav").toggleClass("hamburger-menu-nav");

    if (!wrapperMenu.classList.contains("close-menu")) {
        menuText.innerHTML = "Meny";
        $(".wrapper-header-index").css("background-color", "#F8F8F8");
    }
    else {
        menuText.innerHTML = "Stäng";
        $(".wrapper-header-index").css("background-color", "#F8F8F8");
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

function sidebar() {
    if (windowWidth <= 850) {
        $("#sidebar-info").toggle();
    }
}