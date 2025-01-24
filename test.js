// Элементы DOM
const loginForm = document.getElementById('loginForm');
const profileSection = document.getElementById('profile');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const message = document.getElementById('message');
const welcomeMessage = document.getElementById('welcomeMessage');

// Функция для имитации входа
function login(username, password) {
    // Имитация запроса на сервер
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'user' && password === 'password') {
                resolve({ token: 'fake-jwt-token', username });
            } else {
                reject('Неверные данные');
            }
        }, 1000);
    });
}

// Функция для сохранения токена
function saveToken(token) {
    localStorage.setItem('token', token);
}

// Функция для удаления токена
function removeToken() {
    localStorage.removeItem('token');
}

// Функция для проверки авторизации
function isAuthenticated() {
    return !!localStorage.getItem('token');
}

// Функция для отображения профиля
function showProfile(username) {
    loginForm.style.display = 'none';
    profileSection.style.display = 'block';
    welcomeMessage.textContent = `Привет, ${username}!`;
}

// Функция для скрытия профиля
function hideProfile() {
    loginForm.style.display = 'block';
    profileSection.style.display = 'none';
    message.textContent = '';
}

// Обработчик входа
loginButton.addEventListener('click', async () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
        const { token, username } = await login(username, password);
        saveToken(token);
        showProfile(username);
    } catch (error) {
        message.textContent = error;
    }
});

// Обработчик выхода
logoutButton.addEventListener('click', () => {
    removeToken();
    hideProfile();
});

// Проверка авторизации при загрузке страницы
window.addEventListener('load', () => {
    if (isAuthenticated()) {
        showProfile('user'); // Имя пользователя можно сохранять в токене или LocalStorage
    } else {
        hideProfile();
    }
});