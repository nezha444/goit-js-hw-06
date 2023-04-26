// const categories = document.querySelector('#categories').children
// console.log(`Number of categories: ${categories.length}`);

const categories = document.querySelectorAll('#categories .item')
console.log(`Number of categories: ${categories.length}`);



const items = document.querySelectorAll('.item')
items.forEach(el=>{

    const title = el.querySelector('h2').textContent
    const itemList = el.querySelectorAll('ul li').length
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemList}`);    
})




