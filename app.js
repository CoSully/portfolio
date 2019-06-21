//     langing page section links click smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

//     click and top buttons in sections
$("#click-btn1").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, 1300);
});

$("#click-btn2").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1300);
});

$("#top-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#landing-bg").offset().top
    }, 1500);
});

//    project image card movement on hover 
$(document).ready(function() {
    $('.card').hover(function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
});

// to show contact info when click on icons
$(".icons").click(function() {
    $("#end").slideToggle("slow", function() {
        if ($(this).is(":visible")) {
            $('body').animate({
                scrollTop: $(this).offset().top
            }, 2000)
        }
    });
});


