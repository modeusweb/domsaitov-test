export function animateFlags() {
  const flags = document.querySelectorAll('.flag');

  setTimeout(() => {
    flags.forEach((flag, index) => {
      setTimeout(() => {
        flag.classList.add('active');
      }, index * 400); // Задержка в 0.4 секунды между каждой иконкой
    });

    // После того как все флаги появились, добавляем вращение
    setTimeout(() => {
      const flagsContainer = document.querySelector('.hero__visual-flags');
      flagsContainer.classList.add('rotate');
    }, flags.length * 400);
  }, 3000); // Задержка перед началом анимации в 3 секунды
}
