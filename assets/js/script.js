
// Hide and Show Password Functionality
document.getElementById("password-icon").onclick = () => {
    const passInput = document.getElementById("password-input");
    
    if (passInput.getAttribute("type") === "password") {
        passInput.setAttribute("type", "text");
    }
    else {
        passInput.setAttribute("type", "password");
    }
}


// login functionality
document.getElementById("login-btn").onclick = (event) => {
    event.preventDefault();

    const validEmail = "admin@user.com";
    const validPassword = "123456";

    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password-input").value;
    let userName = document.getElementById("fullname").value;

    if(userName && userEmail === validEmail && userPassword === validPassword) {
        sessionStorage.setItem("username", userName);
        window.location.href = "home.html";
    }
    else {
        // Toastify Plugin
        Toastify({
            text: "Invalid Email or Password!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "rgb(238, 66, 66)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

}


