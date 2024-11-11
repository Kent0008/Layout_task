// Массив для хранения всех дел
let todoList = [];

// Функция для создания DOM-элемента для одного дела
function createTodoItem({ name, done, id }) {
    // Создаём новый элемент списка <li>
    const li = document.createElement('li');
    li.setAttribute('data-id', id); // Присваиваем id элемента для поиска

    // Создаём заголовок <h2> с названием дела
    const h2 = document.createElement('h2');
    h2.textContent = name;

    // Создаём <span> для отображения статуса выполнения дела
    const span = document.createElement('span');
    span.textContent = done ? 'Завершено' : 'Не завершено'; // В зависимости от статуса дела

    // Создаём кнопку для удаления дела
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Удалить';
    // Добавляем обработчик события для удаления дела
    removeButton.addEventListener('click', function() {
        removeTodoItem(id); // Удаляем дело по id
    });

    // Создаём кнопку для изменения статуса дела
    const toggleButton = document.createElement('button');
    toggleButton.textContent = done ? 'Отметить как не завершённое' : 'Отметить как завершённое';
    // Добавляем обработчик события для изменения статуса
    toggleButton.addEventListener('click', function() {
        toggleTodoItem(id); // Меняем статус дела
    });

    // Добавляем все элементы в <li>
    li.appendChild(h2);
    li.appendChild(span);
    li.appendChild(removeButton);
    li.appendChild(toggleButton);

    return li; // Возвращаем готовый элемент списка
}

// Функция для добавления нового дела в список
function addTodoItem(name) {
    // Создаём объект для нового дела с уникальным id
    const newTodo = {
        name: name,
        done: false,
        id: Date.now() // Генерация уникального id с использованием текущего времени
    };
    todoList.push(newTodo); // Добавляем новое дело в массив
    renderTodoList(); // Перерисовываем список дел
    saveTodoList(); // Сохраняем список в localStorage
}

// Функция для удаления дела из списка
function removeTodoItem(id) {
    // Фильтруем массив, удаляя объект с нужным id
    todoList = todoList.filter(todo => todo.id !== id);
    renderTodoList(); // Перерисовываем список дел
    saveTodoList(); // Сохраняем обновлённый список в localStorage
}

// Функция для изменения статуса выполнения дела
function toggleTodoItem(id) {
    // Находим дело по id и меняем его статус на противоположный
    const todo = todoList.find(todo => todo.id === id);
    todo.done = !todo.done;
    renderTodoList(); // Перерисовываем список дел
    saveTodoList(); // Сохраняем изменения в localStorage
}

// Функция для отображения списка дел
function renderTodoList() {
    const todoListElement = document.getElementById('todo-list'); // Находим элемент для списка дел
    todoListElement.innerHTML = ''; // Очищаем список перед рендером

    // Для каждого дела создаём DOM-элемент и добавляем в список
    todoList.forEach(todo => {
        const todoItemElement = createTodoItem(todo);
        todoListElement.appendChild(todoItemElement);
    });
}

// Функция для сохранения списка дел в LocalStorage
function saveTodoList() {
    // Преобразуем массив дел в строку JSON и сохраняем в localStorage
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Функция для загрузки списка дел из LocalStorage
function loadTodoList() {
    // Получаем данные из localStorage по ключу 'todoList'
    const savedTodoList = localStorage.getItem('todoList');
    if (savedTodoList) {
        // Если данные есть, преобразуем их обратно в массив объектов
        todoList = JSON.parse(savedTodoList);
        renderTodoList(); // Отображаем загруженный список дел
    }
}

// Обработчик события для добавления нового дела при отправке формы
document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    const input = document.getElementById('todo-input'); // Получаем значение из поля ввода
    if (input.value) { // Если поле ввода не пустое
        addTodoItem(input.value); // Добавляем новое дело
        input.value = ''; // Очищаем поле ввода
        document.getElementById('todo-submit').disabled = true; // Делаем кнопку неактивной
    }
});

// Обработчик события для активации кнопки добавления, когда в поле ввода есть текст
document.getElementById('todo-input').addEventListener('input', function() {
    const input = document.getElementById('todo-input'); // Получаем значение из поля ввода
    document.getElementById('todo-submit').disabled = !input.value.trim(); // Если поле пустое — кнопка неактивна
});

// Загрузка списка дел при загрузке страницы
loadTodoList();
