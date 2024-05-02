const swiper = new Swiper('.swiper', {
    speed: 800,
    spaceBetween: 10,
    slidesPerView: 1.2,
    breakpoints: {
        640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
    },
});

const prev = document
    .querySelector('.button-prev')
    .addEventListener('click', () => {
        swiper.slidePrev();
    });

const next = document
    .querySelector('.button-next')
    .addEventListener('click', () => {
        swiper.slideNext();
    });