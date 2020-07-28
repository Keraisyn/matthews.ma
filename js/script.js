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
    .type("A Programmer")
    .pause(2000)
    .delete(12)
    .pause(500)
    .type("A Musician")
    .pause(2000)
    .delete(10)
    .pause(500)
    .type("A Teacher")
    .pause(2000)
    .delete(9)
    .pause(500)
    .type("A Photographer")
    .pause(2000)
    .delete(14)
    .pause(500)
    .type("An Organizer")
    .pause(2000)
    .delete(12)
    .pause(500)
    .go();

/* Open and close navbar */
function openNav() {
    // document.getElementById("full-nav").style.display = "block";
    document.getElementById("full-nav").style.opacity = "1";
    document.getElementById("full-nav").style.pointerEvents = "auto";
}

function closeNav() {
    document.getElementById("full-nav").style.opacity = "0";
    document.getElementById("full-nav").style.pointerEvents = "none";
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