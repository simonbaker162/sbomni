// Preload

document.querySelector("body").classList.remove("preload");

// Sticky navigation

const vh = window.innerHeight;

function checkNav() {
    let scrollPosition = Math.round(window.scrollY);
    if (scrollPosition > vh) {
        document.querySelector("nav").classList.add("sticky");
    } else {
        document.querySelector("nav").classList.remove("sticky");
    }
};

window.addEventListener('scroll', checkNav);

// Link scrolling

$(".js--scroll-to-plans").click(function() {
    $("html, body").animate({scrollTop: $(".js--plans-section").offset().top}, 1000)
});

$(".js--scroll-to-features").click(function() {
    $("html, body").animate({scrollTop: $(".js--features-section").offset().top}, 1000)
});

// Navigation scrolling

$(".js--features").click(function() {
    $("html, body").animate({scrollTop: $(".js--features-section").offset().top}, 1000)
});

$(".js--how").click(function() {
    $("html, body").animate({scrollTop: $(".js--how-section").offset().top}, 1000)
});

$(".js--cities").click(function() {
    $("html, body").animate({scrollTop: $(".js--cities-section").offset().top}, 1000)
});

$(".js--sign-up").click(function() {
    $("html, body").animate({scrollTop: $(".js--plans-section").offset().top}, 1000)
});


