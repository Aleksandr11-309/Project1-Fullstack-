const inputEmail = document.querySelector('.inputEmail');
const inputName = document.querySelector('.inputName');
const inputPassword = document.querySelector('.inputPassword');
const inputTruePassword = document.querySelector('.inputTruePassword');
const checkbox = document.querySelector('.checkbox');
const createAccountButton = document.querySelector('.create_account_button');

class Person {
    name = '';
    mail = '';
    password = '';

    constructor(name, mail, password){
        this.name = name;
        this.mail = mail;
        this.password = password;
    }
}

createAccountButton.addEventListener('click', () => {
    let equalPassword = (inputPassword.value === inputTruePassword.value);

    if(checkbox.checked === false || 
        inputEmail.value === "" || 
        inputName.value === "" || 
        inputPassword.value === "" || 
        inputTruePassword.value === "" || 
        equalPassword == false) alert("Не выполнены все условия регистрации!");
    else {
        let person = new Person(inputName.value, inputEmail.value, inputPassword.value);
        localStorage.setItem(`${person.mail}`, JSON.stringify(person));
        alert(`Пожалуйста ${person.name}, нажмите войти и выполните вход!`);
    }
});