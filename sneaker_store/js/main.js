

new Swiper('.main__swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        navigation: true,
    },




});
// слайдер 2=============================================================================

new Swiper('.sellers__swiper', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,

    navigation: {
        nextEl: '.sellers__next',
        prevEl: '.sellers__prev',
    },
    breakpoints: {

        310: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        601: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1051: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
    }
});

