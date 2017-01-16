/*
  Here are some jquery functions that will be called to animate our index.html
*/
$(document).ready(function() {
    // making a smooth scrolling
    $(".navbar a[href^='#']").on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1200, function() {
            window.location.hash = this.hash;
        });
    });

    // making a typed animation
    $(".typed").typed({stringsElement: $('#typed-strings'), typeSpeed: 70});

    // animate skill bar
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
});
