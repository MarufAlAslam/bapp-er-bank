// login part
document.getElementById('login-btn').addEventListener('click', function () {
    // getting user input: Email
    const email = getEmail()

    // getting user input: Password
    const password = getPassword()

    if (email === "son@baap.com" && password === "takanai") {
        window.location.href = "bank.html"
    }
    else {
        alert("Enter Correct Credentials")
    }
})
// -----------------------------------------------------------------------------
// declaring functions
function getEmail() {
    const emailField = document.getElementById('email-field')
    const emailString = emailField.value
    return emailString
}

function getPassword() {
    const passwordField = document.getElementById('password-field')
    const passwordString = passwordField.value
    return passwordString
}