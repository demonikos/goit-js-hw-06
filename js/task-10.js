function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];
  const step = Number(controlsAmount.getAttribute("step"));
  for (let i=0; i<amount; i+=step){
    boxes.push(30 + i*10);
  }
  return boxes;
}

// function validator(value, min, max, step){
//   if (value>=min && value<=max){
// createBoxes(value)
// } else alert(`not in interval from min = ${min} to max = ${max}`);
// }


// function createBoxes(amount) {
//   const boxes = []
//   for (let i=0; i<amount; i+=1){
//     boxes.push(30 + i*10);
//   }
//   return boxes;
// }

const destroyBoxes = () => {
  gallery.innerHTML = "";
  controlsAmount.value = "";
}



const controlsAmount = document.querySelector("input");
// const min = controlsAmount.getAttribute("min");
// const max = controlsAmount.getAttribute("max");
// const step = controlsAmount.getAttribute("step");
// const min = document.querySelector("input[attribute=min]");
// const max = document.querySelector("input[max]");
// const step = document.querySelector("input[step]");
const controlCreate = document.querySelector("button[data-create]");
const controlDestroy = document.querySelector("button[data-destroy]");
const gallery = document.querySelector("#boxes");


controlCreate.addEventListener("click", (event) => {
const value = controlsAmount.value;
const min = Number(controlsAmount.getAttribute("min"));
const max = Number(controlsAmount.getAttribute("max"));
// const step = Number(controlsAmount.getAttribute("step"));
// createBoxes(value);
// const newBoxes = createBoxes(value);
let newBoxes = [];
if (value>=min && value<=max) {
  newBoxes = createBoxes(value);
} else {  
  alert (`not in interval from min = ${min} to max = ${max}`);
}

// const newBoxes = validator(value, min, max, step)
controlsAmount.value = "";
// console.log(newBoxes);

console.log (controlsAmount)
console.log (controlsAmount.attributes)
console.log (value)
console.log (typeof(value))
console.log (min)
console.log (typeof(min))
console.log (max)
console.log (typeof(max))


const newGallery = newBoxes.map((box) => `<div style="width:${box}px; height:${box}px; background-color: ${getRandomHexColor()}"></div>`).join("");

gallery.insertAdjacentHTML("afterbegin", newGallery);
}
)

controlDestroy.addEventListener("click", (event) =>{
destroyBoxes();
})
