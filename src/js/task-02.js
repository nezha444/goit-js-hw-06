const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients')

const arr = ingredients.map(el=>{

  const ingredientItem = document.createElement('li')
  ingredientItem.textContent = el

  ingredientItem.classList.add('item')

  return ingredientItem
})
ingredientsList.append(...arr)
