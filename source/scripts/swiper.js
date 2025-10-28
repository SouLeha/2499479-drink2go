const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 300,

  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
