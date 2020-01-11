jQuery(document).ready(function ($) {
  // Your JavaScript goes here
  $('.hero__container').slick({
    dots: false,

    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    cssEase: 'cubic-bezier(.89,0,.34,.86)'

  });

  $('.cta__slider-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

  });
});
const $ = jQuery;
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 80) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});


jQuery(".hero__container").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  if (Math.abs(nextSlide - currentSlide) == 1) {
    direction = (nextSlide - currentSlide > 0) ? console.log('right') : console.log('left');
  } else {
    direction = (nextSlide - currentSlide > 0) ? console.log('left') : console.log('right');
  }
});