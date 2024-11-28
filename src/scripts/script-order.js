// Получаем элементы модального окна
var modal = document.getElementById("orderModal");
var btn = document.getElementById("orderButton");
var span = document.getElementsByClassName("modal__close")[0];

// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на элемент "x"
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его контента
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработка отправки формы
document.getElementById("orderForm").onsubmit = function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    alert("Заказ отправлен!");
    modal.style.display = "none"; // Закрываем модальное окно после отправки
}