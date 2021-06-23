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

signupSubmit.addEventListener('click', (e) => {
    // input DOM extraction
    const regFirstName = document.getElementById('registerFirstName');
    const regLastName = document.getElementById('registerLastName');
    const regEmailAddress = document.getElementById('registerEmailAddress');
    const regPassword = document.getElementById('registerPassword');
    const regTerms = document.getElementById('registerTerms');

    // input errors
    const regFirstNameError = document.getElementById('registerFirstNameError');
    const regLastNameError = document.getElementById('registerLastNameError');
    const regEmailAddressError = document.getElementById('registerEmailAddressError');
    const regPasswordError = document.getElementById('registerPasswordError');
    const regTermsError = document.getElementById('registerTermsError');

    if (!regFirstName.value) {
        regFirstNameError.innerText = 'First name can not be blank';
        regFirstName.parentElement.appendChild(regFirstNameError);
        setTimeout(() => regFirstNameError.innerText = '', 3000);
    }

    if (!regLastName.value) {
        regLastNameError.innerText = 'Last name can not be blank';
        regLastName.parentElement.appendChild(regLastNameError);
        setTimeout(() => regLastNameError.innerText = '', 3000);
    }

    if (!regEmailAddress.value) {
        regEmailAddressError.innerText = 'Email address can not be blank';
        regEmailAddress.parentElement.appendChild(regEmailAddressError);
        setTimeout(() => regEmailAddressError.innerText = '', 3000);
    }

    if (!regPassword.value) {
        regPasswordError.innerText = 'Password can not be blank';
        regPassword.parentElement.appendChild(regPasswordError);
        setTimeout(() => regPasswordError.innerText = '', 3000);
    }

    if (regTerms.checked !== true) {
        regTermsError.innerText = 'Terms should not be blank';
        regTerms.parentElement.appendChild(regTermsError);
        setTimeout(() => regTermsError.innerText = '', 3000);
    }

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