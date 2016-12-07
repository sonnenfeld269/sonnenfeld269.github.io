$(document).ready(function() {

    $(".arcUp").arctext({radius: 600});

    $(".arcDown").arctext({radius: 600, dir: -1});

    $('.trick').hover(function() {
        $(this).addClass('animated bounce')
    }, function() {
        $(this).removeClass('animated bounce')
    });

    $('.nav li').hover(function() {
        $(this).addClass('animated bounce')
    }, function() {
        $(this).removeClass('animated bounce')
    });
});
