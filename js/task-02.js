const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
let addList = [];
ingredients.forEach((element) => {
  const ingredient = document.createElement("li");
  ingredient.innerText = element;
  ingredient.classList.add("item");
  addList.push(ingredient);
  }
)
list.append(...addList);