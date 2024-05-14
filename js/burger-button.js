document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.main-nav-wrapper');
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});