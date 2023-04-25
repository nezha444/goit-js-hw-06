// const counter = document.querySelector('#counter')
const btnup = document.querySelector('[data-action="increment"]')
const btndown = document.querySelector('[data-action="decrement"]')

const counterValue = document.querySelector('#value')


let count = 0

btnup.addEventListener('click', ()=>{
    count+=1
    counterValue.textContent = count
})

btndown.addEventListener('click', ()=>{
    count-=1
    counterValue.textContent = count
})