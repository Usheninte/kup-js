// views
const baseView = document.getElementById('base-view');
const signupForm = document.getElementById('signup-form');

// auth DOM extraction
const signup = document.getElementById('sign-up');
const login = document.getElementById('log-in');

// sign up
signup.addEventListener('click', () => {
    baseView.classList.toggle('visually-hidden');
    signupForm.classList.toggle('visually-hidden');
});