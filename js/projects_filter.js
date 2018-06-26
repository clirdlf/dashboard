$(document).ready(function() {
  'use strict';

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
