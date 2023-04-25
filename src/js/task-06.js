const input = document.querySelector('#validation-input')

const dataLength = input.getAttribute('data-length')

const addColor = () => {
    if(input.value.length === Number(dataLength)){
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}
input.addEventListener('blur', addColor
    //    input.value = input.dataset.length 
    //    ? input.classList.add(valid), input.classList.remove(invalid) 
    //    : input.classList.add(invalid), input.classList.remove(valid)


)