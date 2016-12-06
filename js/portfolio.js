$(document).ready(function() {

    $(".arcUp").arctext({radius: 400});

    $(".arcDown").arctext({radius: 800, dir: -1});

    $('.trick').hover(function() {
        $(this).addClass('animated bounce')
    }, function() {
        $(this).removeClass('animated bounce')
    });
});
