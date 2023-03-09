$(document).ready(function(){
  const hamburger = document.querySelector(".header__hamburger");
  const mobilenav = document.querySelector(".mobile");
  const line1 = document.querySelector(".header__line1");
  const line2 = document.querySelector(".header__line2");

  hamburger.addEventListener("click", function(){
    if (mobilenav.classList.contains("mobile__hide")) {
      mobilenav.classList.remove("mobile__hide");
      line1.classList.remove("rotate3");
      line2.classList.remove("rotate4");
      line1.classList.add("rotate1");
      line2.classList.add("rotate2");
    }
    else {
      mobilenav.classList.add("mobile__hide");
      line1.classList.remove("rotate1");
      line2.classList.remove("rotate2");
      line1.classList.add("rotate3");
      line2.classList.add("rotate4");
    }
  })

  $('.slider1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.arrowleft',
    nextArrow: '.arrowright',
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,
    fade: true,
  });

  $('.slider2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    dotsClass: 'aboutus__dots',
    swipe: true,
    fade: true,
  });
});
  