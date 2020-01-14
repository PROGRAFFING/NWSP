AOS.init({
  delay: 200,
  duration: 1000,
  once: true
});

const $ = jQuery;
jQuery(document).ready(function($) {
  // Your JavaScript goes here
  $(".hero__container").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    cssEase: "cubic-bezier(.89,0,.34,.86)"
  });

  jQuery(".cta__slider-wrapper").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
  });

  $(window).bind("scroll", function() {
    if ($(window).scrollTop() > 60) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  jQuery(".hero__container").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    if (Math.abs(nextSlide - currentSlide) == 1) {
      direction =
        nextSlide - currentSlide > 0
          ? console.log("right")
          : console.log("left");
    } else {
      direction =
        nextSlide - currentSlide > 0
          ? console.log("left")
          : console.log("right");
    }
  });

  const menu = document.querySelectorAll(
    "#mega-menu-max_mega_menu_1 .mega-has-child"
  );
  const navBg = document.querySelector(".nav-background");

  menu.forEach(item => {
    item.addEventListener("mouseenter", function(e) {
      let item = this.querySelector(".mega-sub-menu");
      let height = item.offsetHeight;

      navBg.style.height = height + 130 + "px";
    });
    item.addEventListener("mouseleave", function(e) {
      navBg.style.height = 0 + "px";
    });
  });
});

$(".kierunki__single").each(function(e) {
  $(this).hover(hoverIn, hoverOut);
});

function hoverIn() {
  $(this)
    .find(".kierunki__bg")
    .css({
      opacity: 1,
      visibility: "visible"
    });
}

function hoverOut() {
  $(this)
    .find(".kierunki__bg")
    .css({
      opacity: 0,
      visibility: "hidden"
    });
}
