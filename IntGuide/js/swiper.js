jQuery(document).ready(function() {
  swiper = new Swiper('.categories-body', {
    loop: true,
    noSwiping: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});