function focusElementForMobile(){
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card) => {
        if(isInViewport(card)){
            card.classList.add('focus');
        }else{
            card.classList.remove('focus');
        }
    });

}

function isInViewport(element, offsetTop = 160, offsetBottom = 80){
    const rect = element.getBoundingClientRect();
    return (
        rect.top + offsetTop >= 0 &&
        rect.left >= 0 &&
        rect.bottom - offsetBottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', focusElementForMobile);