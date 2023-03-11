// DOM ELEMENTS

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
// const errorText = document.getElementById("error-text");

// Validation Functions

// Data validation
function validateData(inputFieldName) {
    switch (inputFieldName) {
        case firstName:
        case lastName:
            validateNameData(inputFieldName);
            inputFieldName.onkeyup = () => {
                validateNameData(inputFieldName);
            };
            break;

        case email:
            validateEmailData(inputFieldName);
            inputFieldName.onkeyup = () => {
                validateEmailData(inputFieldName);
            };
            break;

        case password:
            validateNameData(inputFieldName);
            inputFieldName.onkeyup = () => {
                validateNameData(inputFieldName);
            };
            break;
    }
}

// Name data validation
function validateNameData(inputFieldName) {
    if (!inputFieldName.value.trim()) {
        errorFunction(inputFieldName);
    } else {
        successFunction(inputFieldName);
    }

    let namePattern = /^[A-Za-z]+$/;
    if (!inputFieldName.value.trim().match(namePattern)) {
        errorFunction(inputFieldName);
    } else {
        successFunction(inputFieldName);
    }
}

// Email validation
function validateEmailData(inputFieldName) {
    if (!inputFieldName.value) {
        errorFunction(inputFieldName);
    } else {
        successFunction(inputFieldName);
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!inputFieldName.value.match(emailPattern)) {
        errorFunction(inputFieldName);
    }
}

// Error and Success Functions
function errorFunction(inputFieldName) {
    inputFieldName.classList.add("error");
    //     inputFieldName.style.backgroundImage = "url('images/icon-error.svg')";
    inputFieldName.nextElementSibling.style.display = "block";
    inputFieldName.parentElement.nextElementSibling.innerHTML = `${inputFieldName.placeholder} cannot be empty`;
}

function successFunction(inputFieldName) {
    inputFieldName.classList.remove("error");
    //     inputFieldName.style.backgroundImage = "none";
    inputFieldName.nextElementSibling.style.display = "none";
    inputFieldName.parentElement.nextElementSibling.innerHTML = "";
}

// Form submitting events
form.onsubmit = (e) => {
    e.preventDefault();

    validateData(firstName);
    validateData(lastName);
    validateData(email);
    validateData(password);

    if (
        !firstName.classList.contains("error") &&
        !lastName.classList.contains("error") &&
        !email.classList.contains("error") &&
        !password.classList.contains("error")
    ) {
        window.location.href = "#";
        console.log("form Submitted!!!");
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
    }
};
