const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) =>{
    event.preventDefault();  
    const {elements : {email, password}} = event.currentTarget;
    if (email.value === "" || password.value === ""){
        alert("Warning, all fields must be filled")
    } else {
        const user = {
            email: email.value,
            password: password.value
        }
        console.log (user);
        loginForm.reset();

        // console.log(`user's mail - ${user.email}, user's password - ${user.password}`);
    }
})
