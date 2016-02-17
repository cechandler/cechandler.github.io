// MUSIC MIXITUP
$(function(){
  $('.mixitup-music').mixItUp({
      animation: {
        effects: 'fade scale',
      },
  layout: {
    display: 'block',
  },
  selectors: {
    target: '.work',
    filter: '.filter-work',
  }
  });
});

// PERFORMANCES MIXITUP
$(function(){
  $('.mixitup-event').mixItUp({
      animation: {
      	effects: 'fade scale',
      },
  layout: {
  	display: 'block',
  },
  load: {
  	filter: '.upcoming',
  },
  selectors: {
  	target: '.performance',
  	filter: '.filter-event',
  }
  });
});

// FANCYBOX
// $(document).ready(function() {
// 	$(".fancybox").fancybox();
// });
