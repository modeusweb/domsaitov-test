export function initWeightSlider() {
  new Swiper('.weight__slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 32,
    watchSlidesProgress: true,
    navigation: {
      prevEl: '.weight__slider-nav.swiper-button-prev',
      nextEl: '.weight__slider-nav.swiper-button-next',
    },
    pagination: {
      el: '.weight__slider-pagination.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 'auto', spaceBetween: 8 },
      768: { slidesPerView: 2, spaceBetween: 16 },
      992: { slidesPerView: 2, spaceBetween: 20 },
      1400: { slidesPerView: 2, spaceBetween: 32 },
    },
  });
}
