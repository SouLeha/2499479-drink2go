const swiper = new Swiper('.promo__slider', { // Используем ваш класс
  // Базовые параметры
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 500,

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Добавляем возможность кликать на пагинацию
  },

  // Навигация
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});

export { swiper };
