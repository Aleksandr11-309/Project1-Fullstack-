function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function fetchPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     await delay(2000);
//     console.log(data);
// }

// fetchPosts();

document.addEventListener('DOMContentLoaded', async () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');
    const filterRating = document.getElementById('filterRating');

    // Загрузка рецензий из LocalStorage при загрузке страницы
    await loadReviews();

    // Обработчик отправки формы
    reviewForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Получаем данные из формы
        const title = document.getElementById('title').value;
        const artist = document.getElementById('artist').value;
        const review = document.getElementById('review').value;
        const rating = document.getElementById('rating').value;

        // Создаем объект рецензии
        const newReview = {
            title,
            artist,
            review,
            rating
        };

        // Добавляем рецензию
        await addReview(newReview);

        // Очищаем форму
        reviewForm.reset();

        // Обновляем список рецензий
        await delay(5000);
        await loadReviews();
    });

    // Обработчик изменения фильтра
    filterRating.addEventListener('change', async () => {
        await loadReviews();
    });

    // Функция для добавления рецензии
    async function addReview(review) {
        return new Promise((resolve) => {
            // Загружаем существующие рецензии из LocalStorage
            const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

            // Добавляем новую рецензию
            reviews.push(review);

            // Сохраняем обновленный список в LocalStorage
            localStorage.setItem('reviews', JSON.stringify(reviews));

            resolve();
        });
    }

    // Функция для загрузки и отображения рецензий
    async function loadReviews() {
        return new Promise((resolve) => {
            // Загружаем рецензии из LocalStorage
            const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

            // Получаем выбранную оценку для фильтрации
            const selectedRating = parseInt(filterRating.value);

            // Фильтруем рецензии
            const filteredReviews = selectedRating === 0
                ? reviews
                : reviews.filter(review => review.rating == selectedRating);

            // Отображаем отфильтрованные рецензии
            displayReviews(filteredReviews);

            resolve();
        });
    }

    // Функция для отображения рецензий
    function displayReviews(reviews) {
        reviewsList.innerHTML = ''; // Очищаем список

        reviews.forEach((review, index) => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <h3>${review.title} - ${review.artist}</h3>
                <p><strong>Оценка:</strong> ${review.rating}/5</p>
                <p><strong>Отзыв:</strong> ${review.review}</p>
            `;
            reviewsList.appendChild(reviewElement);
        });
    }
});