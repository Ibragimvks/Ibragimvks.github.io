// Установите конечную дату и время
const countdownDate = new Date("2024-07-27T10:00:00").getTime();

// Массив сообщений
const messages = [
    "Ты моя звезда!",
    "Ты делаешь меня счастливым!",
    "Я люблю тебя больше всего на свете!",
    "Ты – моё вдохновение!",
    "Ты самая красивая!",
    "Каждая секунда с тобой – это счастье!",
    "Не могу дождаться твоего возвращения!",
    "Ты так сильно мне нужна!",
    "Скоро мы будем вместе!",
    "Ты – лучшая часть моей жизни!",
    "Скоро ты будешь дома!",
    "Я скучаю по тебе каждый день!",
    "Мир не тот без тебя рядом!",
    "Ты приносишь в мою жизнь свет!",
    "Я считаю дни до твоего возвращения!"
];

// Функция для смены сообщений
let messageIndex = 0;
const changeMessage = () => {
    document.getElementById("message").innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
};
setInterval(changeMessage, 5000); // смена сообщения каждые 5 секунд

// Обновляйте таймер каждую секунду
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "Время вышло!";
    }
}, 1000);

// Функции для слайд-шоу
let currentSlide = 0;
const slides = document.querySelectorAll('#background-slideshow img');
const totalSlides = slides.length;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
};

const prevSlide = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
};

// Автоматическая смена слайдов каждые 5 секунд
setInterval(nextSlide, 5000);

// Обработка свайпов
let touchStartX = 0;
let touchEndX = 0;

const handleGesture = () => {
    if (touchEndX < touchStartX) nextSlide();
    if (touchEndX > touchStartX) prevSlide();
};

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});
