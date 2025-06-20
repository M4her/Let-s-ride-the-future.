// aos animatiom

AOS.init();
// -----counterPlugin
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// slider part 1
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true
});
