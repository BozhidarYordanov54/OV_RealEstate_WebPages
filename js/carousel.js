let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
    if (touchEndX < touchStartX) {
        navigateSlide("next");
    }
    if (touchEndX > touchStartX) {
        navigateSlide("prev");
    }
}

function navigateSlide(direction) {
    const offset = direction === "next" ? 1 : -1;
    const carousel = document.querySelector('[data-carousel]');
    const slides = carousel.querySelector('[data-carousel-slide]');
    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if(newIndex < 0) newIndex = slides.children.length - 1;
    if(newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}

const buttons = document.querySelectorAll('[data-carousel-button]');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const direction = button.dataset.carouselButton;
        navigateSlide(direction);
    });
});

const carousel = document.querySelector('[data-carousel]');
carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});