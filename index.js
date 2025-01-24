const leftNavBar = document.querySelector('.left_navbar');

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