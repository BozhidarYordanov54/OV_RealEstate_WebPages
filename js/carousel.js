var swiper = new Swiper(".slide-container", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    centeredSlides: true,
    grabCursor: "true",
    fade: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,
        }
    }
})