$("#title-text").css("opacity", 0);

$("#title-text").waypoint(function() {
    $("#title-text").addClass("fadeIn");
}, {offset:"50%"});


// $("#about-text").css("opacity", 0);
//
// $("#about-text").waypoint(function() {
//     $("#about-text").addClass("fadeInUp");
// }, {offset:"65%"});
//
//
// $("#about-text-one").css("opacity", 0);
//
// $("#about-text-one").waypoint(function() {
//     $("#about-text-one").addClass("fadeInUp");
// }, {offset:"60%"});
//
//
// $("#about-text-two").css("opacity", 0);
//
// $("#about-text-two").waypoint(function() {
//     $("#about-text-two").addClass("fadeInUp");
// }, {offset:"50%"});

$(".about-text").css("opacity", 0);

$("#about-text").waypoint(function() {
    $(".about-text").addClass("fadeInUp");
}, {offset:"80%"});


$(".projects-text").css("opacity", 0);

$("#projects-text").waypoint(function() {
    $(".projects-text").addClass("fadeInUp");
}, {offset:"80%"});


$("#footer-text").css("opacity", 0);

$("#footer-text").waypoint(function() {
    $("#footer-text").addClass("fadeInUp");
}, {offset:"80%"});

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
