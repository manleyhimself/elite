$(document).ready(function(){

  function init(){
    initHomeCarousel();
    initStartHomeCarousel();
    // initBindCustomBtns('.fa-chevron-circle-left', '.slick-prev');
    // initBindCustomBtns('.fa-chevron-circle-right', '.slick-next');
  }

  init();

});

function initHomeCarousel(){
   $('.home-carousel').slick({
    fade: true,
    // lazyLoad: 'ondemand',
    // dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear'
  });
}

function initStartHomeCarousel(){
  $('.home-carousel.slick-slider').slickPlay();
}