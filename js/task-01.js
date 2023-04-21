// const numberOfCatergories = document.querySelectorAll('.item');
// console.log(`Number of categories: ${numberOfCatergories.length}`);
// numberOfCatergories.forEach(element => {
//     console.log('')
//     console.log(`Category: ${element.firstElementChild.textContent}`);
//     console.log(`Elements: ${element.lastElementChild.querySelectorAll('li').length}`);
// });

const numberOfCatergories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCatergories.length}`);
numberOfCatergories.forEach(element => {
    console.log('')
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});