import { initWeightSlider } from './modules/weightSlider.js';
import { handleTabs } from './modules/tabs.js';
import { initScrollToTopButton } from './modules/scrollToTop.js';
import { burgerNav } from './modules/burgerNav.js';

document.addEventListener('DOMContentLoaded', () => {
  initWeightSlider();
  handleTabs();
  initScrollToTopButton();
  burgerNav();
});
