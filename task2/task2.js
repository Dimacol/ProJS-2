// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
    {
    product: "Apple iPhone 13",
    reviews: [
    {
    id: "1",
    text: "Отличный телефон! Батарея держится долго.",
    },
    {
    id: "2",
    text: "Камера супер, фото выглядят просто потрясающе.",
    },
    ],
    },
    {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
    {
    id: "3",
    text: "Интересный дизайн, но дорогой.",
    },
    ],
    },
    {
    product: "Sony PlayStation 5",
    reviews: [
    {
    id: "4",
    text: "Люблю играть на PS5, графика на высоте.",
    },
    ],
    },
    ];
    
    // Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.
    
    const reviewsDiv = document.querySelector('.reviewsDiv');
    const reviewInput = document.querySelector('.reviewInput');
    const button = document.querySelector('.button');
    
    initialData.forEach(element => {
        element.reviews.forEach(rev => {
            let review = document.createElement('div');
            review.innerHTML = `${rev.text}`;
            reviewsDiv.append(review);
        })
    });
    
    button.addEventListener('click', () => {
        try {
            if(reviewInput.value.length < 50 || reviewInput.value.length > 500) {
                reviewInput.value = '';
                throw new Error('Длина отзыва не подходит');
            }
            else {
                let review = document.createElement('div');
                review.innerHTML = reviewInput.value;
                reviewsDiv.append(review);
            }
        } catch (error) {
            alert(error.message);
        }
    })