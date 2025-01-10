// jQuery functionality for interactive design

$(document).ready(function() {
    // Highlight active section button
    $('.toggle-section').on('click', function() {
        $('.toggle-section').removeClass('active');
        $(this).addClass('active');
    });

    // Smooth scrolling to sections (if applicable)
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    // Add hover effect to profile image
    $('.profile-image img').hover(
        function() {
            $(this).css({
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease'
            });
        },
        function() {
            $(this).css({
                transform: 'scale(1)'
            });
        }
    );

    // Dynamic background color change on scroll
    $(window).on('scroll', function() {
        const scrollPosition = $(this).scrollTop();

        if (scrollPosition > 50) {
            $('body').css('background', 'linear-gradient(135deg, #2a5298, #1e3c72)');
        } else {
            $('body').css('background', 'linear-gradient(135deg, #1e3c72, #2a5298)');
        }
    });
});
