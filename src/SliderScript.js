const swiper = new Swiper(".slider .swiper-container", {
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.slider .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".slider .swiper-button-next",
    prevEl: ".slider .swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  grabCursor: true,
  speed: 300,
  clickable: true,
  autoplay: false,
  effect: 'slide'
});