

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
    slidesPerView: 5,
    spaceBetween: 15,
    loop: true,

    navigation: {
        nextEl: 'sellers__next',
        prevEl: 'sellers__prev',
    },
});

