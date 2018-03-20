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


    $('.owl-carousel').owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],

        // CSS Styles
        baseClass: "owl-carousel",
        theme: "owl-theme"
    });

});
