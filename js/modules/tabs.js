/**
 * Управляет переключением вкладок на странице.
 * Добавляет и удаляет классы активности для кнопок и панелей вкладок.
 * Поддерживает вложенные табы любой глубины и сохраняет активное состояние у вложенных табов при переключении внешних.
 */
export function handleTabs() {
  document.querySelectorAll('.tabs').forEach((tabsContainer) => {
    tabsContainer.addEventListener('click', (event) => {
      const tabsBtn = event.target.closest('.tabs__btn');
      if (!tabsBtn || !tabsContainer.contains(tabsBtn)) return;

      // Останавливаем всплытие, чтобы вложенные табы не влияли на родительские
      event.stopPropagation();

      // Ищем ближайший контейнер, к которому принадлежит нажатая кнопка
      const currentTabsContainer = tabsBtn.closest('.tabs');
      if (!currentTabsContainer) return;

      // Сбрасываем активные состояния кнопок и панелей только внутри текущего уровня
      const tabsBtns = Array.from(currentTabsContainer.querySelectorAll('.tabs__btn'));
      const tabsPanels = Array.from(currentTabsContainer.querySelectorAll('.tabs__panel'));

      tabsBtns.forEach((btn) => {
        if (btn.closest('.tabs') === currentTabsContainer) {
          btn.classList.remove('tabs__btn--active');
        }
      });

      tabsPanels.forEach((panel) => {
        if (panel.closest('.tabs') === currentTabsContainer) {
          panel.classList.remove('tabs__panel--active');
        }
      });

      // Устанавливаем активное состояние для выбранной вкладки
      tabsBtn.classList.add('tabs__btn--active');
      const targetPanel = currentTabsContainer.querySelector(
        `.tabs__panel[data-tab="${tabsBtn.dataset.tab}"]`,
      );
      if (targetPanel) {
        targetPanel.classList.add('tabs__panel--active');
      }
    });
  });
}
