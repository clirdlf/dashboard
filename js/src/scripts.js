//= require ../../node_modules/owl.carousel/dist/owl.carousel.js

$(function() {
    'use strict';

    function scrollToTop() {
        // verticalOffset = typeof(verticalOffset) !== 'undefined' ? verticalOffset : 0;
        var element = $('body');
        var offset = element.offset();
        var offsetTop = offset.top;
        $('html, body').animate({
            scrollTop: offsetTop
        }, 500, 'linear');
    }

    $(document).on('scroll', function() {

        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });

    $('.scroll-top-wrapper').on('click', scrollToTop);

    /*------- Smooth Scroll -------*/
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    var owl = $('.owl-carousel');
    var timeout = 3000;
    owl.owlCarousel({
        autoplayTimeout: timeout, //Set AutoPlay to 3 seconds
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        autoplay: true,
        items: 1,
        // responsive: {
        //     0: { items: 1 },
        //     600: { items: 1 },
        //     1000: { items: 1 }
        // }
    });

    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [timeout]);
    });

    $('.stop').on('click', function() {
        owl.trigger('play.owl.autoplay');
    });

});
