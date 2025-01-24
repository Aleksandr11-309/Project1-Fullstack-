const inputEmail = document.querySelector('.inputEmail');
const inputPassword = document.querySelector('.inputPassword');
const signInButton = document.querySelector('.sign_in_button');

signInButton.addEventListener('click', () => {
    const person = JSON.parse(localStorage.getItem(`${inputEmail.value}`));
    if(inputEmail.value === "" || inputPassword.value === "") alert("Заполните поля входа!");
    else if(person.password !== inputPassword.value) alert("Неверный пароль!");
    else {
        sessionStorage.setItem('auth', `${person.name}`);
        window.location.replace('index.html');
    }
});
