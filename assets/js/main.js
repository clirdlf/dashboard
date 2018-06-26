/*
 * Cocoon -  Portfolio html  Template
 * Build Date: december 2017
 * Author: colorlib
 * Copyright (C) 2018 colorlib
 */
/* ------------------------------------- */
/*  TABLE OF CONTENTS
/* ------------------------------------- */
/*   PRE LOADING                         */
/*   SIDEBAR Menu                        */
/*   Portfolio Masonry                   */
/*   portfolio-filter                    */

/* ==============================================
/*  PRE LOADING
/* =============================================== */
'use strict';
$(window).load(function() {
    $('.loader').delay(500).fadeOut('slow');
});

$(document).ready(function() {

    /* ==============================================
      Sidebar show and hide
       =============================================== */
    $(".menu-btn").on('click',function(){
        $("body").toggleClass("sidebar_closed");
    });



});
