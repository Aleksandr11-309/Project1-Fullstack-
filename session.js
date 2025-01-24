const topNavbnarButtoSignIn = document.querySelector('.top_navbar_button_sign_in');
const topNavbarButtonSignUp = document.querySelector('.top_navbar_button_sign_up');
const content = document.querySelector('.container');
const session = sessionStorage.getItem('auth');

const checkAuth = () => {
    if (session !== null) {
        console.log(`Ключ существует в sessionStorage.`);
        topNavbnarButtoSignIn.textContent = `${session}`;
        topNavbarButtonSignUp.textContent = "Выйти";
        topNavbarButtonSignUp.addEventListener('click', () => {sessionStorage.clear()});
        content.classList.add('hidden');
    } else {
        console.log(`Ключ отсутствует в sessionStorage.`);
    }
}

checkAuth();

