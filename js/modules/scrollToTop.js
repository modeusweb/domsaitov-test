/**
 * Инициализирует кнопку "наверх", которая появляется при прокрутке страницы вниз.
 */
export function initScrollToTopButton() {
  const toTopButton = document.querySelector('.to-top');

  // Обработчик прокрутки страницы
  const handleScroll = () => {
    toTopButton.classList.toggle('to-top--hidden', window.scrollY <= 100);
  };

  // Прокрутка страницы наверх при клике на кнопку
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);
  toTopButton.addEventListener('click', scrollToTop);
}
