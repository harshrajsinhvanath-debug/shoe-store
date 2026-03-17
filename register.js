localStorage.removeItem("username");
document.getElementById("registerForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const errors = document.querySelectorAll(".error");

    // Clear old errors
    errors.forEach(error => error.innerText = "");

    let isValid = true;

    // Full Name Validation
    if (fullname.value.trim() === "") {
        showError(fullname, "Full Name is required");
        isValid = false;
    }

    // Email Validation
    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, "Enter valid email");
        isValid = false;
    }

    // Password Validation
    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    }

    // Confirm Password
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match");
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem("user", JSON.stringify({
    name: fullname.value.trim(),
    email: email.value.trim()
}));
    
 alert("Registration Successful!");
        window.location.href = "index.html";
    }

});

function showError(input, message) {
    const error = input.nextElementSibling;
    error.innerText = message;
}

function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}