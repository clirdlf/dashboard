/*
 * Cocoon -  Portfolio html  Template
 * Build Date: december 2017
 * Author: colorlib
 * Copyright (C) 2018 colorlib
 */
/* -------------------------------------  */
/*  TABLE OF CONTENTS
/* -------------------------------------  */
/*   PRE LOADING                          */
/*   SIDEBAR Menu                         */
/*   Portfolio Masonry                    */
/*   portfolio-filter                     */

/* ==============================================
/*  PRE LOADING
  =============================================== */
$(window).load(function() {
    $('.loader').delay(500).fadeOut('slow');
});

$(document).ready(function() {

    'use strict';

    /* ==============================================
      Sidebar show and hide
       ============================================== */
    $(".menu-btn").on('click',function(i){
        $("body").toggleClass("sidebar_closed");
    });

    /* ==============================================
     portfolio-filter
       ============================================== */

    // filter items on button click

    var $grid = $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',

        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.grid-sizer'
        }
    });

    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });
    $('#filtr-container').on( 'click', 'li', function(e) {
        e.preventDefault();
        $('#filtr-container li').removeClass('active');
        $(this).closest('li').addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});
