document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.burger');
    const hamburger = document.querySelector('.hamb');
    var menu = document.querySelector('.main-nav-wrapper');
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});