// views
const baseView = document.getElementById('baseView');
const signupForm = document.getElementById('signupForm');

// sign up DOM extraction
const signup = document.getElementById('signup');
const signupSubmit = document.getElementById('signupSubmit');
// const login = document.getElementById('login');

// sign up
signup.addEventListener('click', () => {
    baseView.classList.toggle('visually-hidden');
    signupForm.classList.toggle('visually-hidden');
});

// empty field check
const emptyFieldCheck = (inputElement, inputElementError, errorTextName) => {
    if (!inputElement.value) {
        inputElementError.innerText = `${errorTextName} can not be blank`;
        setTimeout(() => inputElementError.innerText = '', 3000);
    }
};

const valueLengthCheck = (inputElement, inputElementError, minLength, errorTextName) => {
    if (inputElement.value.length < minLength) {
        inputElementError.innerText = `${errorTextName} should be at least ${minLength} characters long`;
        setTimeout(() => inputElementError.innerText = '', 3000);
    }
};

const validateEmail = (email) => {
    re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

const generalValidation = (inputValue, inputElementError, errorText) => {
    if (!inputValue) {
        inputElementError.innerText = errorText;
        setTimeout(() => inputElementError.innerText = '', 3000);
    }
}

signupSubmit.addEventListener('click', (e) => {
    // input DOM extraction
    const regFirstName = document.getElementById('registerFirstName');
    const regLastName = document.getElementById('registerLastName');
    const regEmailAddress = document.getElementById('registerEmailAddress');
    const regPassword = document.getElementById('registerPassword');
    const regTerms = document.getElementById('registerTerms');

    // input errors
    const regFirstNameError = document.getElementById('registerFirstNameError');
    const registerFirstNameLengthError = document.getElementById('registerFirstNameLengthError');
    const regLastNameError = document.getElementById('registerLastNameError');
    const registerLastNameLengthError = document.getElementById('registerLastNameLengthError');
    const regEmailAddressError = document.getElementById('registerEmailAddressError');
    const registerEmailAddressLengthError = document.getElementById('registerEmailAddressLengthError');
    const registerEmailAddressContentError = document.getElementById('registerEmailAddressContentError');
    const regPasswordError = document.getElementById('registerPasswordError');
    const regPasswordLengthError = document.getElementById('registerPasswordLengthError');
    const regTermsError = document.getElementById('registerTermsError');

    // form field validations
    emptyFieldCheck(regFirstName, regFirstNameError, 'First name');
    emptyFieldCheck(regLastName, regLastNameError, 'Last name');
    emptyFieldCheck(regEmailAddress, regEmailAddressError, 'Email address');
    emptyFieldCheck(regPassword, regPasswordError, 'Password');

    generalValidation(regTerms.checked, regTermsError, 'Terms should not be blank');

    valueLengthCheck(regFirstName, registerFirstNameLengthError, 3, 'First name');
    valueLengthCheck(regLastName, registerLastNameLengthError, 3, 'Last name');
    valueLengthCheck(regEmailAddress, registerEmailAddressLengthError, 6, 'Email address');
    valueLengthCheck(regPassword, regPasswordLengthError, 6, 'Password');

    generalValidation(
        validateEmail(regEmailAddress.value), registerEmailAddressContentError,
        'Email address should be in valid format');

    e.preventDefault();
    const user = {
        'firstName': regFirstName.value,
        'lastName': regLastName.value,
        'email': regEmailAddress.value,
        'password': regPassword.value,
        'terms': regTerms.checked
    };
    console.log(user);
});