function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('[type="number"]')
const buttonCreate = document.querySelector('[data-create]')
const buttonDestroy = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')

let counter = 30

function createBoxes(){
  const inputValue = input.value
  for(let i = 1; i<=inputValue; i+=1){
    boxes.insertAdjacentHTML(
      'beforeend',
      `<div style="width: ${counter}px; height: ${counter}px; background-color: ${getRandomHexColor()}"></div>`
    )
    counter = counter + 10
  }
}

function destroyBoxes(){
  boxes.innerHTML = ''
  counter = 30
}

buttonCreate.addEventListener('click', createBoxes)
buttonDestroy.addEventListener('click', destroyBoxes)