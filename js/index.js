// Функция для установки задержки
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', async () => {
    // Получаем ссылки на элементы DOM
    const reviewForm = document.getElementById('reviewForm'); // Форма для добавления рецензии
    const reviewsList = document.getElementById('reviewsList'); // Блок для отображения рецензий
    const filterRating = document.getElementById('filterRating'); // Выпадающий список для фильтрации по оценке

    // Функция для добавления рецензии в LocalStorage
    const addReview = async (review) => {
        return new Promise((resolve) => {
            const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

            reviews.push(review);
            localStorage.setItem('reviews', JSON.stringify(reviews));

            resolve();
        });
    }

    // Функция для загрузки и отображения рецензий
    const loadReviews = async () => {
        return new Promise((resolve) => {
            const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
            const selectedRating = parseInt(filterRating.value);

            const filteredReviews = selectedRating === 0
                ? reviews
                : reviews.filter(review => review.rating == selectedRating);
            displayReviews(filteredReviews);

            resolve();
        });
    }

    // Функция для отображения рецензий в блоке reviewsList
    const displayReviews = (reviews) => {
        reviewsList.innerHTML = '';

        reviews.forEach((review, index) => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <h3>${review.title} - ${review.artist}</h3>
                <p><strong>Оценка:</strong> ${review.rating}/5</p>
                <p><strong>Отзыв:</strong> ${review.review}</p>
            `;
            reviewsList.prepend(reviewElement);
        });
    }

    // Загружаем рецензии при загрузке страницы
    await loadReviews();

    // Добавляем обработчик события отправки формы
    reviewForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        // Получаем значения из форм
        const title = document.getElementById('title').value;
        const artist = document.getElementById('artist').value;
        const review = document.getElementById('review').value;
        const rating = document.getElementById('rating').value;

        const newReview = {
            title,
            artist,
            review,
            rating
        };

        if (sessionStorage.getItem('auth') !== null) {
            // Добавляем новую рецензию в LocalStorage
            await addReview(newReview);

            reviewForm.reset();

            await delay(3000);
            await loadReviews();
        } else {
            alert("Для начала войдите на сайт!");
        }
    });

    // Добавляем обработчик изменения фильтра
    filterRating.addEventListener('change', async () => {
        await loadReviews();
    });
});