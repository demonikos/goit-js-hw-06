const value = document.querySelector("span");
// console.log(value.textContent);
let counterValue = 0;

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');

// const handleClick = () => console.log('Button was cliked!');

// decBtn.addEventListener("click", () => {
// counterValue -=1;
// console.log(counterValue)
// document.querySelector("span").textContent = counterValue;
// });

// incBtn.addEventListener("click", () => {
// counterValue +=1;
// console.log(counterValue)
// document.querySelector("span").textContent = counterValue;
// });


decBtn.addEventListener("click", () => document.querySelector("span").textContent = --counterValue);   
incBtn.addEventListener("click", () => document.querySelector("span").textContent = ++counterValue);