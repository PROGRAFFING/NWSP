jQuery(document).ready(function ($) {
  // Your JavaScript goes here
  $('.hero__container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

  });
  $('.cta__slider-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

  });
});