export async function fetchDescription() {
  const descriptionElement = document.querySelector('.hero__desc');

  try {
    const response = await fetch('https://baconipsum.com/api/?type=lucky');

    // Проверка на успешный ответ
    if (response.ok) {
      const data = await response.json();
      // Ожидаем, что API возвращает массив строк, выбираем первый элемент
      descriptionElement.textContent = data[0];
    } else {
      // Если статус ответа не ок, обработаем его как ошибку
      console.error('Failed to fetch description:', response.statusText);
      descriptionElement.textContent = 'Failed to load description.';
    }
  } catch (error) {
    // Обработка ошибок сети или других непредвиденных исключений
    console.error('Network error:', error);
    descriptionElement.textContent = 'Failed to load description.';
  }
}
