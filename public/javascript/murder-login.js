const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-message");



async function newLogIn (event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const response = await fetch (`/api/login`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.okay){
        console.log('You have been signed up!')
    } else {
        console.log('You are NOT signed up')
    }
}


loginButton.addEventListener("click", (event) => { 
    console.log("login")
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (user === "user" && password === "web_dev") {
        alert("You are now logged in!");
        location.reload();
    } else {
        alert("You are not logged in!");
        loginErrorMessage.style.opacity =1;
    }
})