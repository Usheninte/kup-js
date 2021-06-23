// views
const baseView = document.getElementById('baseView');
const signup = document.getElementById('signup');
const login = document.getElementById('login');

// empty field check
const emptyFieldCheck = (inputElement, inputElementError, errorTextName) => {
    if (!inputElement.value) {
        inputElementError.innerText = `${errorTextName} can not be blank`;
        setTimeout(() => inputElementError.innerText = '', 3000);
        return false;
    } else {
        return true;
    }
};

// field value length check
const valueLengthCheck = (inputElement, inputElementError, minLength, errorTextName) => {
    if (inputElement.value.length < minLength) {
        inputElementError.innerText = `${errorTextName} should be at least ${minLength} characters long`;
        setTimeout(() => inputElementError.innerText = '', 3000);
        return false;
    } else {
        return true;
    }
};

// email validity check
const validateEmail = (email) => {
    re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// general validation
const generalValidation = (inputValue, inputElementError, errorText) => {
    if (!inputValue) {
        inputElementError.innerText = errorText;
        setTimeout(() => inputElementError.innerText = '', 3000);
        return false;
    } else {
        return true;
    }
}

// full check of form values
const fullyValidForm = (...args) => {
    let validityBucket = [];

    for (let check of args) {
        validityBucket.push(check);
    }

    // checks that all checks have run successfully
    const finalCheck = validityBucket.every((status) => status === true);
    return finalCheck;
}

// sign up flow
const signupForm = document.getElementById('signupForm');
const signupSubmit = document.getElementById('signupSubmit');

signup.addEventListener('click', () => {
    baseView.classList.toggle('visually-hidden');
    signupForm.classList.toggle('visually-hidden');
});

// behaviour on sign up click
signupSubmit.addEventListener('click', (e) => {
    // input DOM extraction
    const regFirstName = document.getElementById('registerFirstName');
    const regLastName = document.getElementById('registerLastName');
    const regEmailAddress = document.getElementById('registerEmailAddress');
    const regPassword = document.getElementById('registerPassword');
    const regTerms = document.getElementById('registerTerms');

    // input errors DOM extraction
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
    valueLengthCheck(regFirstName, registerFirstNameLengthError, 3, 'First name');
    emptyFieldCheck(regLastName, regLastNameError, 'Last name');
    valueLengthCheck(regLastName, registerLastNameLengthError, 3, 'Last name');
    emptyFieldCheck(regEmailAddress, regEmailAddressError, 'Email address');
    valueLengthCheck(regEmailAddress, registerEmailAddressLengthError, 6, 'Email address');
    generalValidation(
        validateEmail(regEmailAddress.value), registerEmailAddressContentError,
        'Email address should be in valid format');
    emptyFieldCheck(regPassword, regPasswordError, 'Password');
    valueLengthCheck(regPassword, regPasswordLengthError, 6, 'Password');
    generalValidation(regTerms.checked, regTermsError, 'Terms should not be blank');

    const inputValid = fullyValidForm(
        emptyFieldCheck(regFirstName, regFirstNameError, 'First name'),
        valueLengthCheck(regFirstName, registerFirstNameLengthError, 3, 'First name'),
        emptyFieldCheck(regLastName, regLastNameError, 'Last name'),
        valueLengthCheck(regLastName, registerLastNameLengthError, 3, 'Last name'),
        emptyFieldCheck(regEmailAddress, regEmailAddressError, 'Email address'),
        valueLengthCheck(regEmailAddress, registerEmailAddressLengthError, 6, 'Email address'),
        generalValidation(
            validateEmail(regEmailAddress.value), registerEmailAddressContentError,
            'Email address should be in valid format',
        ),
        emptyFieldCheck(regPassword, regPasswordError, 'Password'),
        valueLengthCheck(regPassword, regPasswordLengthError, 6, 'Password'),
        generalValidation(regTerms.checked, regTermsError, 'Terms should not be blank')
    );

    if (inputValid) {
        const user = {
            'firstName': regFirstName.value,
            'lastName': regLastName.value,
            'email': regEmailAddress.value,
            'password': regPassword.value,
            'terms': regTerms.checked,
            'lists': []
        };
        console.log(user);
    }

    e.preventDefault();
});

// log in flow
const loginForm = document.getElementById('loginForm');
const loginSubmit = document.getElementById('loginSubmit');

login.addEventListener('click', () => {
    baseView.classList.toggle('visually-hidden');
    loginForm.classList.toggle('visually-hidden');
});
