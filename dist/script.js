const swiper = new Swiper(".swiper-container", {
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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