document.addEventListener('DOMContentLoaded', function() {
    function scrollNav(){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            document.querySelector('.main-nav-wrapper').classList.add('scrolled');
        }
        else{
            document.querySelector('.main-nav-wrapper').classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', scrollNav);
});