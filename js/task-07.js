const currValue = document.querySelector("#font-size-control");
const currText = document.querySelector("#text");



// currValue.addEventListener("input", (event) =>{
//     // console.log(event.currentTarget.value);
//     // console.log(typeof(Number(event.currentTarget.value)));
//     currText.style.fontSize = event.currentTarget.value + "px";
// })

currText.style.fontSize = currValue.value + "px";

currValue.addEventListener("input", (event) => currText.style.fontSize = event.currentTarget.value + "px")

