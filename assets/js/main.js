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


    
});
