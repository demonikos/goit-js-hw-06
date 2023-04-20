function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = []
  for (let i=0; i<amount; i+=1){
    boxes.push(30 + i*10);
  }
  return boxes;
}

const destroyBoxes = () => gallery.replaceChildren();
  // const deleteGallery = gallery.childNodes;
  // console.log(deleteGallery);
  // deleteGallery.forEach(element => gallery.element.remove());


const controlsAmount = document.querySelector("input");
const controlCreate = document.querySelector("button[data-create]");
const controlDestroy = document.querySelector("button[data-destroy]");
const gallery = document.querySelector("#boxes");

controlCreate.addEventListener("click", (event) => {
const value = controlsAmount.value;
createBoxes(value);
const newBoxes = createBoxes(value);
controlsAmount.value = "";
// console.log(newBoxes);

// newBoxes.forEach(element => {
//   const newGallery = `<div class="square">${element}</div>`;
//   gallery.insertAdjacentElement("afterbegin", newGallery);
//   gallery.child.width = element+"px";
//   gallery.child.height = element+"px";
//   // gallery.background-color = getRandomHexColor();

// });


  const newGallery = newBoxes.map((box) => `<div style="width:${box}px; height:${box}px; border:1px solid ${getRandomHexColor()}"></div>`).join("");
  // console.log(newGallery);

gallery.insertAdjacentHTML("afterbegin", newGallery);
}
)

controlDestroy.addEventListener("click", (event) =>{
destroyBoxes();
})


// controlDestroy.addEventListener("click", (event) =>{
//   gallery.replaceChildren();
// // const deleteGallery = gallery.childNodes;
// // console.log(deleteGallery);
// // deleteGallery.forEach(element => {
// //   console.log(gallery.firstChild)
// //   gallery.replaceChildren();
// // });
// }
// )



  // console.log(boxes)
