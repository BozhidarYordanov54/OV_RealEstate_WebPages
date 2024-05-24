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

function isInViewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', focusElementForMobile);