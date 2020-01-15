AOS.init({
  delay: 200,
  duration: 1000,
  once: true
});
function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function() {
  accessibilityButtons({
    font: {
      nameButtonIncrease: "+A", // Default
      ariaLabelButtonIncrease: "Increase Font", // Default
      nameButtonDecrease: "-A", // Default
      ariaLabelButtonDecrease: "Decrease Font" // Default
    },

    contrast: {
      nameButtonAdd: "Add Contrast", // Default
      ariaLabelButtonAdd: "Add Contrast", // Default
      nameButtonRemove: "Remove Contrast", // Default
      ariaLabelButtonRemove: "Remove Contrast" // Default
    }
  });
});

const $ = jQuery;
jQuery(document).ready(function($) {
  // accessibility  buttons

  // Your JavaScript goes here
  $(".hero__container").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1
    // lazyLoad: "progressive",
    // cssEase: "cubic-bezier(.89,0,.34,.86)"
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

// const magicLine = document.createElement("li");
// magicLine.classList.add("magic__line");
// document.querySelector("#mega-menu-max_mega_menu_1").appendChild(magicLine);

// const menuItems = document.querySelectorAll(
//   "#mega-menu-max_mega_menu_1 .mega-menu-item"
// );

// menuItems.forEach(item => {
//   item.addEventListener("mouseover", e => {
//     let currentItem = item.getBoundingClientRect();
//     const magicLine = document.querySelector(".magic__line");
//     const directions = {
//       width: currentItem.width,
//       left: currentItem.left,
//       top: currentItem.top,
//       correct: currentItem.left - 160
//     };
//     console.log(
//       `To dlugosc${directions.top},    od lewej: ${directions.left},    od lewej - dlugosc ${directions.correct} `
//     );
//     magicLine.style.setProperty("left", `${directions.correct}px`);
//     magicLine.style.setProperty("width", `${directions.width}px`);
//   });
// });
