const inputText = document.querySelector("#validation-input");
inputText.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length !== Number(inputText.getAttribute("data-length"))){
inputText.classList.remove("valid");
inputText.classList.add("invalid");
    } else {
inputText.classList.remove("invalid");
inputText.classList.add("valid");
    }

})