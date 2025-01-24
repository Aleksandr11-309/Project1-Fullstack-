const form = document.querySelector('.form');
const inputEmail = document.querySelector('.inputEmail');
const inputPassword = document.querySelector('.inputPassword');
const signInButton = document.querySelector('.sign_in_button');
const signUpButton = document.querySelector('.sign_up_button');

signUpButton.addEventListener('click', () => {
    window.location.replace('signup.html');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const person = JSON.parse(localStorage.getItem(`${inputEmail.value}`));
    if(person !== null) {
        if(inputEmail.value === "" || inputPassword.value === "") alert("Заполните поля входа!");
        else if(person.password !== inputPassword.value) alert("Неверный пароль!");
        else {
            sessionStorage.setItem('auth', `${person.name}`);
            window.location.replace('index.html');
        }
    }
    else {
        alert("Зарегистрируйтесь на сайте!")
    }
});
