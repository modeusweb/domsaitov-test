export function burgerNav() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--opened');
    nav.classList.toggle('header__nav--opened');
  });

  // click outside
  document.addEventListener('click', (event) => {
    if (
      !event.target.closest('.header') &&
      nav.classList.contains('header__nav--opened')
    ) {
      burger.classList.remove('header__burger--opened');
      nav.classList.remove('header__nav--opened');
    }
  });
}
