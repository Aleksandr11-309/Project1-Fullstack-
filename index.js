const leftNavBar = document.querySelector('.left_navbar');

// const adaptiveLeftNavBar = () => {
//     const state = {
        
//     };

//     // Обработчик события mouseenter
//     leftNavBar.addEventListener('mouseenter', () => {
//     document.querySelectorAll('.left_navbar_item').forEach(item => {
//         const span = item.querySelector('.hidden');
        
//         // Проверяем, существует ли элемент с классом .hidden
//         if (span.classList.contains('hidden')) {
//             span.classList.remove('hidden');
//             span.classList.add('block');
//         }
//     });
//     });

//     // Обработчик события mouseleave
//     leftNavBar.addEventListener('mouseleave', () => {
//     document.querySelectorAll('.left_navbar_item').forEach(item => {
//         const span = item.querySelector('.block');
        
//         // Проверяем, существует ли элемент с классом .block
//         if (span.classList.contains('block')) {
//             span.classList.remove('block');
//             span.classList.add('hidden');
//         }
//     });
//     });

//     setWatchers(state);
// };

// const setWatchers = (state) => {
//     watch(state, 'news', () => {
//         render(state.news[0]);
//     });
// };

leftNavBar.addEventListener('mouseenter', () => {
    document.querySelectorAll('.left_navbar_item').forEach((item) => {
        let span = item.querySelector('.hidden');

        span.classList.toggle('hidden');
        span.classList.toggle('block');
    });
});

leftNavBar.addEventListener('mouseleave', () => {
    document.querySelectorAll('.left_navbar_item').forEach((item) => {
        let span = item.querySelector('.block');

        span.classList.toggle('block');
        span.classList.toggle('hidden');
    });
});