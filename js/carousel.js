var swiper = new Swiper(".slide-container", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 2,
  loop: true,
  centeredSlides: true,
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination.estates",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.swiper-navBtn",
    prevEl: ".swiper-button-prev.swiper-navBtn",
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
    },
  },
});

var swiper2 = new Swiper(".article-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination.article",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.article-btn",
    prevEl: ".swiper-button-prev.article-btn",
  },
  autoplay: {
    delay: 3000,
  },
});

var swiper3 = new Swiper(".swiper-listing", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper4 = new Swiper(".listing-card-swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
