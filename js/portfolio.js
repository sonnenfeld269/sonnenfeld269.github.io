/*
  Here are some jquery functions that will be called to animate our index.html
*/
$(document).ready(function() {

    $(".arcUp").arctext({radius: 600});

    $(".arcDown").arctext({radius: 600, dir: -1});

    $('.trick').hover(function() {
        $(this).addClass('animated bounce')
    }, function() {
        $(this).removeClass('animated bounce')
    });

    // making a smooth scrolling
    $(".navbar ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1200, function() {
            window.location.hash = this.hash;
        });
    });
});
