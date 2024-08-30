/**
 * Управляет поведением меню-бургера.
 */

export function burgerNav() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__content');

  const toggleMenu = () => {
    burger.classList.toggle('header__burger--opened');
    nav.classList.toggle('header__content--opened');
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest('.header') &&
      nav.classList.contains('header__content--opened')
    ) {
      toggleMenu();
    }
  };

  burger.addEventListener('click', toggleMenu);
  document.addEventListener('click', handleClickOutside);
}
