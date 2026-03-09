
new Swiper('.hero-slider', {
  init: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  spaceBetween: 127,
  slidesPerView: 5,
  slidesPerGroup: 1,
});

new Swiper('.products-slider', {
  init: true,
  autoplay: {
    delay: 4000,
  },
  spaceBetween: 20,
  slidesPerView: 2,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.products-swiper-button-next',
    prevEl: '.products-swiper-button-prev',
  },
});

new Swiper('.projects-slider', {
  init: true,
  autoplay: {
    delay: 4000,
  },
  spaceBetween: 20,
  slidesPerView: 3,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
  },
});
