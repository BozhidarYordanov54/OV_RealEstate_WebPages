function checkIfInputHasValue(){
    let input = document.querySelectorAll('.input-text');

    input.forEach((element) => {
        if(element.value.length > 0){
            element.classList.add('has-content');
        }
        else{
            element.classList.remove('has-content');
        }
    });
}

checkIfInputHasValue();

document.addEventListener('input', checkIfInputHasValue);