const button = document.querySelector('.dropdown-btn');

function dropdownMenu(){
    const list = document.querySelector('.dropdown-list');

    list.classList.toggle('show');
}

button.addEventListener('click', dropdownMenu);