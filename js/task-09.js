function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//------- Це був перший варіант, за який ви і казали - звертатись напряму до кнопки

const click = document.querySelector(".change-color");
const body = document.body;
const span = document.querySelector(".color");

click.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  // console.log(color);
  body.style.backgroundColor = color;
  span.textContent = color;
})


//-------- Це був другий варіант, через дітей ноду widget ----

// const widget = document.querySelector(".widget");
// widget.lastElementChild.addEventListener("click", (event) => {
//       const color = getRandomHexColor();
//       // console.log(color);
//       document.body.style.backgroundColor = color;
//       widget.firstElementChild.firstElementChild.textContent = color;
//     }
// )