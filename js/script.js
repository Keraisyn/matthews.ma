/* Menu button */
$(".hamburger").click(function() {
    $(".hamburger").toggleClass("hidden");
});

/* ScrollReveal */
ScrollReveal().reveal(".reveal", {
    interval:200,
    distance:"20px",
});

ScrollReveal().reveal(".delay-1000ms", {
    distance:"20px",
    delay:1000,
});

/* Animated typing config */
new TypeIt("#name-text", {
    speed:100,
    startDelay:50,
    lifeLike:true,
    loop:true
})
    .type("Matthews Ma")
    .pause(2000)
    .delete(11)
    .pause(500)
    .type("A Developer")
    .pause(2000)
    .delete(12)
    .pause(500)
    .type("A Musician")
    .pause(2000)
    .delete(10)
    .pause(500)
    .type("A Photographer")
    .pause(2000)
    .delete(14)
    .pause(500)
    .go();

/* Open and close navbar */
function openNav() {
    document.getElementById("full-nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("full-nav").style.width = "0%";
}

/* Animation waypoints */

// $("#title-text").css("opacity", 0);
//
// $("#title-text").waypoint(function() {
//     $("#title-text").addClass("fadeIn");
// }, {offset:"50%"});
//
// $(".about-text").css("opacity", 0);
//
// $("#about-text").waypoint(function() {
//     $(".about-text").addClass("fadeInUp");
// }, {offset:"80%"});
//
//
// $(".projects-text").css("opacity", 0);
//
// $("#projects-text").waypoint(function() {
//     $(".projects-text").addClass("fadeInUp");
// }, {offset:"80%"});
//
//
// $("#footer-text").css("opacity", 0);
//
// $("#footer-text").waypoint(function() {
//     $("#footer-text").addClass("fadeInUp");
// }, {offset:"80%"});