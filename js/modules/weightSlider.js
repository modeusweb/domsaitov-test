export function initWeightSlider() {
  const weightSlider = new Swiper('.weight__slider', {
    loop: true, // Бесконечная прокрутка
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 32,
  });
}
