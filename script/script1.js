const form = document.querySelector('#form');
const fields = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.error');
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const opts = document.querySelector('#exerciseInput');
const password = document.querySelector('#passwordInput');
const confirmPassword = document.querySelector('#confirmPasswordInput');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateName();
    validateEmail();
    validateWeight();
    validateExercise();
    validatePassword();
    checkPassword();
    event.submit();

});

function setError(i) {
    spans[i].style.display = 'block';
    spans[i].style.color = '#e63636';
}

function removeError(i) {
    spans[i].style.display = 'none';

}

function validateName() {
    if (fields[0].value.length < 3) {
        setError(0);
    }else{
        removeError(0);
    }
}

function validateEmail() {
    if(regexEmail.test(fields[1].value)) {
        removeError(1);
    }else {
        setError(1)
    }
}

function validateWeight() {
    if(fields[2].value < 35 || fields[2].value > 250) {
        setError(2);
    }else{
        removeError(2)
    }
}

function validateExercise() {
    if(opts.options[opts.selectedIndex].value == "") {
        setError(3)
    }else{
        removeError(3)
    }
}

function validatePassword() {
    if (password.value.length < 8) {
        setError(4)
    }else{
        removeError(4)
        checkPassword();
    }
}

function checkPassword() {
    if(password.value === confirmPassword.value && confirmPassword.value.length >= 8) {
        removeError(5)
    }else {
        setError(5)
    }
}