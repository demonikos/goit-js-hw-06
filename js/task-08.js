const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) =>{
    event.preventDefault();  

    // if (event.currentTarget.email.value === "" || event.currentTarget.password.value === ""){
    //     alert("Warning, all datas must be input")
    // }

    const {elements : {email, password}} = event.currentTarget;
    if (email.value === "" || password.value === ""){
        alert("Warning, all fields must be filled")
    } else {
        console.log (`login - ${email.value}`);
        console.log (`pass - ${password.value}`);
        loginForm.reset();
    }

    // user.email = loginForm.elements.email.value;
    // user.password = loginForm.elements.password.value;
    // console.log(user);

    // console.log (`login - ${loginForm.email.value}`);
    // console.log (`pass - ${loginForm.password.value}`);
})
