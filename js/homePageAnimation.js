function homePageAnimation() {
    let siteWelcome = document.querySelector('.site-welcome');
    let searchForm = document.querySelector('.search-form');
    let slideContainer = document.querySelector('.slide-container');
    let serviceList = document.querySelector('.service-list');
    let articleSwiper = document.querySelector('.article-swiper');

    const animateElement = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'all 0.6s';
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)'; // End position
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const options = {
        threshold: 0.3 // Adjusted comment: Trigger when 80% of the element is in view
    };

    const observer = new IntersectionObserver(animateElement, options);

    // Set the initial styles for animation start
    [
        siteWelcome, 
        searchForm, 
        slideContainer, 
        serviceList,
        articleSwiper
    ].forEach(el => {
        if (el) {
            el.style.opacity = 0.2;
            el.style.transform = 'translateY(100px)'; // Start from a different position
            observer.observe(el); // Start observing
        }
    });
}

document.addEventListener('DOMContentLoaded', homePageAnimation);