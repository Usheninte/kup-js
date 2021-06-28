// local storage as database
const database = window.localStorage;

// current user values
let currentUserDetails;

// views
const baseView = document.getElementById('baseView');
const signup = document.getElementById('signup');
const login = document.getElementById('login');
const dashboard = document.getElementById('dashboard');
const content = document.getElementById('content');
const authBar = document.getElementById('authBar');
const logout = document.getElementById('logout');
const accountSettings = document.getElementById('accountSettings');
const updateForm = document.getElementById('updateForm');
const updateForm2Dashboard = document.getElementById('updateForm2Dashboard');
const createNewList = document.getElementById('createNewList');
const lists = document.getElementById('lists');
const listings = document.getElementById('listings');
const newList = document.getElementById('newList');
const newList2Dashboard = document.getElementById('newList2Dashboard');
const createListSubmit = document.getElementById('createListSubmit');
const todoListButton = document.getElementsByClassName('list-button');
const todoList = document.getElementById('todoList');
const todoListName = document.getElementById('todoListName');
const todoList2Dashboard = document.getElementById('todoList2Dashboard');

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

// switch to dashboard 
const switchToDashboard = (email, currentView) => {
    const user = database.getItem(email);
    const userContext = JSON.parse(user);

    currentView.classList.toggle('visually-hidden');
    dashboard.classList.toggle('visually-hidden');

    if (authBar.classList.contains('visually-hidden')) {
        authBar.classList.toggle('visually-hidden');
    }

    const userView = {
        'userEmail': userContext['email'],
        'userLists': userContext['lists']
    }

    currentUserDetails = userView;

    // dashboard content
    dashboardContent(currentUserDetails);
}

// user existence check
const userExists = (userObject, inputElementError, errorText) => {
    const user = database.getItem(userObject['email']);

    if (!user) {
        inputElementError.innerText = errorText;
        setTimeout(() => inputElementError.innerText = '', 3000);
        return false;
    } else {
        return true;
    }
}

// login validation
const loginValidation = (userObject, password, inputElementError, errorText) => {
    const userValues = JSON.parse(database.getItem(userObject['email']));
    const userPassword = userValues['password'];

    if (password !== userPassword) {
        inputElementError.innerText = errorText;
        setTimeout(() => inputElementError.innerText = '', 3000);
        return false;
    } else {
        return true;
    }
}

// sign up flow
const signupForm = document.getElementById('signupForm');
const signupSubmit = document.getElementById('signupSubmit');

// register user in local storage
const registerUser = (userInformation) => {
    database.setItem(`${userInformation['email']}`, JSON.stringify(userInformation));
}

// populate user information from local storage
const accountInformation = (userInformation) => {
    const currentUser = database.getItem(userInformation['email']);
    const userInfo = JSON.parse(currentUser);

    // update DOM values
    const updateFirstName = document.getElementById('updateFirstName');
    const updateLastName = document.getElementById('updateLastName');
    const updateEmailAddress = document.getElementById('updateEmailAddress');
    const updatePassword = document.getElementById('updatePassword');
    const updateTerms = document.getElementById('updateTerms');

    updateFirstName.value = userInfo['firstName'];
    updateLastName.value = userInfo['lastName'];
    updateEmailAddress.value = userInfo['email'];
    updatePassword.value = userInfo['password'];
    updateTerms.checked = userInfo['terms'];
}

// sign up flow
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
    const regFirstNameLengthError = document.getElementById('registerFirstNameLengthError');
    const regLastNameError = document.getElementById('registerLastNameError');
    const regLastNameLengthError = document.getElementById('registerLastNameLengthError');
    const regEmailAddressError = document.getElementById('registerEmailAddressError');
    const regEmailAddressLengthError = document.getElementById('registerEmailAddressLengthError');
    const regEmailAddressContentError = document.getElementById('registerEmailAddressContentError');
    const regPasswordError = document.getElementById('registerPasswordError');
    const regPasswordLengthError = document.getElementById('registerPasswordLengthError');
    const regTermsError = document.getElementById('registerTermsError');

    // form field validations
    emptyFieldCheck(regFirstName, regFirstNameError, 'First name');
    valueLengthCheck(regFirstName, regFirstNameLengthError, 3, 'First name');
    emptyFieldCheck(regLastName, regLastNameError, 'Last name');
    valueLengthCheck(regLastName, regLastNameLengthError, 3, 'Last name');
    emptyFieldCheck(regEmailAddress, regEmailAddressError, 'Email address');
    valueLengthCheck(regEmailAddress, regEmailAddressLengthError, 6, 'Email address');
    generalValidation(
        validateEmail(regEmailAddress.value), regEmailAddressContentError,
        'Email address should be in valid format');
    emptyFieldCheck(regPassword, regPasswordError, 'Password');
    valueLengthCheck(regPassword, regPasswordLengthError, 6, 'Password');
    generalValidation(regTerms.checked, regTermsError, 'Terms should not be blank');

    const inputValid = fullyValidForm(
        emptyFieldCheck(regFirstName, regFirstNameError, 'First name'),
        valueLengthCheck(regFirstName, regFirstNameLengthError, 3, 'First name'),
        emptyFieldCheck(regLastName, regLastNameError, 'Last name'),
        valueLengthCheck(regLastName, regLastNameLengthError, 3, 'Last name'),
        emptyFieldCheck(regEmailAddress, regEmailAddressError, 'Email address'),
        valueLengthCheck(regEmailAddress, regEmailAddressLengthError, 6, 'Email address'),
        generalValidation(
            validateEmail(regEmailAddress.value), regEmailAddressContentError,
            'Email address should be in valid format',
        ),
        emptyFieldCheck(regPassword, regPasswordError, 'Password'),
        valueLengthCheck(regPassword, regPasswordLengthError, 6, 'Password'),
        generalValidation(regTerms.checked, regTermsError, 'Terms should not be blank')
    );

    if (inputValid) {
        const userInfo = {
            'firstName': regFirstName.value,
            'lastName': regLastName.value,
            'email': regEmailAddress.value,
            'password': regPassword.value,
            'terms': regTerms.checked,
            'lists': []
        };

        // register user
        registerUser(userInfo);

        // switch to dashboard
        if (loginValidation(userInfo, userInfo['password'], loginAuthenticationError,
            'User with password entered does not exist')) {
            // switch to dashboard
            switchToDashboard(userInfo['email'], signupForm);
            accountInformation(userInfo);
        } else {
            loginValidation(userInfo, userInfo['password'], loginAuthenticationError,
                'User with password entered does not exist');
        }

        console.log(userInfo);
    }

    // block page refresh
    e.preventDefault();
});

// log in flow
const loginForm = document.getElementById('loginForm');
const loginSubmit = document.getElementById('loginSubmit');
const loginAuthenticationError = document.getElementById('loginAuthenticationError');
const userExistenceError = document.getElementById('userExistenceError');

login.addEventListener('click', () => {
    baseView.classList.toggle('visually-hidden');
    loginForm.classList.toggle('visually-hidden');
});

// behaviour on log in click
loginSubmit.addEventListener('click', (e) => {
    // input DOM extraction
    const loginEmailAddress = document.getElementById('loginEmailAddress');
    const loginPassword = document.getElementById('loginPassword');

    // input errors DOM extraction
    const loginEmailAddressError = document.getElementById('loginEmailAddressError');
    const loginEmailAddressLengthError = document.getElementById('loginEmailAddressLengthError');
    const loginEmailAddressContentError = document.getElementById('loginEmailAddressContentError');
    const loginPasswordError = document.getElementById('loginPasswordError');
    const loginPasswordLengthError = document.getElementById('loginPasswordLengthError');

    // form field validations
    emptyFieldCheck(loginEmailAddress, loginEmailAddressError, 'Email address');
    valueLengthCheck(loginEmailAddress, loginEmailAddressLengthError, 6, 'Email address');
    generalValidation(
        validateEmail(loginEmailAddress.value), loginEmailAddressContentError,
        'Email address should be in valid format');
    emptyFieldCheck(loginPassword, loginPasswordError, 'Password');
    valueLengthCheck(loginPassword, loginPasswordLengthError, 6, 'Password');

    const inputValid = fullyValidForm(
        emptyFieldCheck(loginEmailAddress, loginEmailAddressError, 'Email address'),
        valueLengthCheck(loginEmailAddress, loginEmailAddressLengthError, 6, 'Email address'),
        generalValidation(
            validateEmail(loginEmailAddress.value), loginEmailAddressContentError,
            'Email address should be in valid format',
        ),
        emptyFieldCheck(loginPassword, loginPasswordError, 'Password'),
        valueLengthCheck(loginPassword, loginPasswordLengthError, 6, 'Password'),
    );

    if (inputValid) {
        const userInfo = {
            'email': loginEmailAddress.value,
            'password': loginPassword.value
        };

        if (userExists(userInfo, userExistenceError, 'User with email entered does not exist')) {
            if (loginValidation(userInfo, userInfo['password'], loginAuthenticationError,
                'User with password entered does not exist')) {
                // switch to dashboard
                switchToDashboard(userInfo['email'], loginForm);
                accountInformation(userInfo);
            } else {
                loginValidation(userInfo, userInfo['password'], loginAuthenticationError,
                    'User with password entered does not exist');
            }
        } else {
            userExists(userInfo, userExistenceError, 'User with email entered does not exist');
        }
    }

    e.preventDefault();
});

// log out flow
logout.addEventListener('click', () => {
    baseView.classList.toggle('visually-hidden');
    authBar.classList.toggle('visually-hidden');

    if (!dashboard.classList.contains('visually-hidden')) {
        dashboard.classList.toggle('visually-hidden');
    }

    if (!updateForm.classList.contains('visually-hidden')) {
        updateForm.classList.toggle('visually-hidden');
    }

    if (!newList.classList.contains('visually-hidden')) {
        newList.classList.toggle('visually-hidden');
    }

    // clear sign up values
    const regFirstName = document.getElementById('registerFirstName');
    const regLastName = document.getElementById('registerLastName');
    const regEmailAddress = document.getElementById('registerEmailAddress');
    const regPassword = document.getElementById('registerPassword');
    const regTerms = document.getElementById('registerTerms');

    regFirstName.value = '';
    regLastName.value = '';
    regEmailAddress.value = '';
    regPassword.value = '';
    regTerms.checked = false;

    // clear log out form values
    const loginEmailAddress = document.getElementById('loginEmailAddress');
    const loginPassword = document.getElementById('loginPassword');

    loginEmailAddress.value = '';
    loginPassword.value = '';

    // reset current user details
    currentUserDetails = {};

    // refresh page
    window.location.reload();
});

// account settings flow
accountSettings.addEventListener('click', () => {
    if (!dashboard.classList.contains('visually-hidden')
        && newList.classList.contains('visually-hidden')) {
        dashboard.classList.toggle('visually-hidden');
        updateForm.classList.toggle('visually-hidden');
    }

    if (!newList.classList.contains('visually-hidden')
        && dashboard.classList.contains('visually-hidden')) {
        newList.classList.toggle('visually-hidden');
        updateForm.classList.toggle('visually-hidden');
    }

    if (!todoList.classList.contains('visually-hidden')
        && dashboard.classList.contains('visually-hidden')) {
        todoList.classList.toggle('visually-hidden');
        updateForm.classList.toggle('visually-hidden');
    }
});

// switch from update form to dashboard
updateForm2Dashboard.addEventListener('click', () => {
    updateForm.classList.toggle('visually-hidden');
    dashboard.classList.toggle('visually-hidden');
})

const updateSubmit = document.getElementById('updateSubmit');

updateSubmit.addEventListener('click', (e) => {
    // input DOM extraction
    const updateFirstName = document.getElementById('updateFirstName');
    const updateLastName = document.getElementById('updateLastName');
    const updateEmailAddress = document.getElementById('updateEmailAddress');
    const updatePassword = document.getElementById('updatePassword');
    const updateTerms = document.getElementById('updateTerms');

    // input errors DOM extraction
    const updateFirstNameError = document.getElementById('updateFirstNameError');
    const updateFirstNameLengthError = document.getElementById('updateFirstNameLengthError');
    const updateLastNameError = document.getElementById('updateLastNameError');
    const updateLastNameLengthError = document.getElementById('updateLastNameLengthError');
    const updateEmailAddressError = document.getElementById('updateEmailAddressError');
    const updateEmailAddressLengthError = document.getElementById('updateEmailAddressLengthError');
    const updateEmailAddressContentError = document.getElementById('updateEmailAddressContentError');
    const updatePasswordError = document.getElementById('updatePasswordError');
    const updatePasswordLengthError = document.getElementById('updatePasswordLengthError');
    const updateTermsError = document.getElementById('updateTermsError');

    // form field validations
    emptyFieldCheck(updateFirstName, updateFirstNameError, 'First name');
    valueLengthCheck(updateFirstName, updateFirstNameLengthError, 3, 'First name');
    emptyFieldCheck(updateLastName, updateLastNameError, 'Last name');
    valueLengthCheck(updateLastName, updateLastNameLengthError, 3, 'Last name');
    emptyFieldCheck(updateEmailAddress, updateEmailAddressError, 'Email address');
    valueLengthCheck(updateEmailAddress, updateEmailAddressLengthError, 6, 'Email address');
    generalValidation(
        validateEmail(updateEmailAddress.value), updateEmailAddressContentError,
        'Email address should be in valid format');
    emptyFieldCheck(updatePassword, updatePasswordError, 'Password');
    valueLengthCheck(updatePassword, updatePasswordLengthError, 6, 'Password');
    generalValidation(updateTerms.checked, updateTermsError, 'Terms should not be blank');

    const inputValid = fullyValidForm(
        emptyFieldCheck(updateFirstName, updateFirstNameError, 'First name'),
        valueLengthCheck(updateFirstName, updateFirstNameLengthError, 3, 'First name'),
        emptyFieldCheck(updateLastName, updateLastNameError, 'Last name'),
        valueLengthCheck(updateLastName, updateLastNameLengthError, 3, 'Last name'),
        emptyFieldCheck(updateEmailAddress, updateEmailAddressError, 'Email address'),
        valueLengthCheck(updateEmailAddress, updateEmailAddressLengthError, 6, 'Email address'),
        generalValidation(
            validateEmail(updateEmailAddress.value), updateEmailAddressContentError,
            'Email address should be in valid format',
        ),
        emptyFieldCheck(updatePassword, updatePasswordError, 'Password'),
        valueLengthCheck(updatePassword, updatePasswordLengthError, 6, 'Password'),
        generalValidation(updateTerms.checked, updateTermsError, 'Terms should not be blank')
    );

    if (inputValid) {
        const userInfo = {
            'firstName': updateFirstName.value,
            'lastName': updateLastName.value,
            'email': updateEmailAddress.value,
            'password': updatePassword.value,
            'terms': updateTerms.checked,
            'lists': []
        };

        // register user
        registerUser(userInfo);

        // notify of profile update
        alert('Profile updated');

        // switch to dashboard
        switchToDashboard(userInfo['email'], updateForm);
    }

    e.preventDefault();
});

// create new list
createNewList.addEventListener('click', (e) => {
    dashboard.classList.toggle('visually-hidden');
    newList.classList.toggle('visually-hidden');
});

// switch from new list to dashboard
newList2Dashboard.addEventListener('click', (e) => {
    newList.classList.toggle('visually-hidden');
    dashboard.classList.toggle('visually-hidden');
});

// behaviour on create list submit behaviour
createListSubmit.addEventListener('click', (e) => {
    // form validation
    const listName = document.getElementById('listName');
    const listNameError = document.getElementById('listNameError');

    generalValidation(listName.value, listNameError, 'List name can not be empty');

    const inputValid = fullyValidForm(
        generalValidation(listName.value, listNameError, 'List name can not be empty')
    );

    if (inputValid) {
        // save list name to new object
        let newListValues = {};
        newListValues['name'] = listName.value;
        newListValues['items'] = [];
        console.log(newListValues);

        // update database list with new name
        let dbState = JSON.parse(
            database.getItem(`${currentUserDetails['userEmail']}`)
        );
        dbState['lists'].push(newListValues);
        currentUserDetails['userLists'].push(newListValues);
        console.log('Updated user lists: ' + JSON.stringify(currentUserDetails['userLists']));
        database.setItem(`${currentUserDetails['userEmail']}`, JSON.stringify(dbState));

        // notify of to-do list creation
        alert('To-do list created');

        listName.value = '';

        // // switch to dashboard
        switchToDashboard(currentUserDetails['userEmail'], newList);
    }

    e.preventDefault();
});

// dashboard view
const extractListItem = (listItemInfo, userInformation) => {
    const listId = listItemInfo.id;
    const listIdInfo = listId.split('-');
    const listIndex = listIdInfo[1]; // get dynamically set ID
    const listItem = userInformation['userLists'][parseInt(listIndex)];
    return listItem;
}

const dashboardContent = (userDetails) => {
    if (userDetails['userLists'].length > 0) {
        const listingsHeader = document.getElementById('listingsHeader');
        listingsHeader.classList.toggle('visually-hidden');

        listings.innerHTML = '';

        let id = 0;

        for (let listElement of userDetails['userLists']) {
            const listIcon = document.createElement('i');
            listIcon.className = 'bi bi-arrow-right';

            const listText = document.createElement('span');
            listText.innerText = `${listElement['name']} `;

            const listItem = document.createElement('button');
            listItem.id = `listItem-${id}`;
            listItem.className = 'btn btn-outline-dark my-1 list-button';

            listItem.appendChild(listText);
            listItem.appendChild(listIcon);
            listings.appendChild(listItem);

            // behaviour on to-do list button click
            listItem.addEventListener('click', () => {
                console.log(listItem);
                console.log(`List item: ${JSON.stringify(
                    extractListItem(listItem, userDetails)
                )}`);
                // extract list item information
                const listItemInfo = extractListItem(listItem, userDetails);

                // switch to independent view based of extracted list item
                dashboard.classList.toggle('visually-hidden');
                todoList.classList.toggle('visually-hidden');

                // display to-do list name
                todoListName.innerText = listItemInfo['name'];

                // display to-do list items if exist
                // display button to create to-do list item 
            });

            id++;
        }

        lists.appendChild(listings);
    }
}

todoList2Dashboard.addEventListener('click', () => {
    todoList.classList.toggle('visually-hidden');
    dashboard.classList.toggle('visually-hidden');

    // reset to-do list name
    todoListName.innerText = '';
});

// // behaviour on to-do list button click
// todoListButton.addEventListener('click', () => {
//     for (let todo of currentUserDetails['userLists']) {
//         if (todo['name'] === todoListButton.innerText) {
//             console.log(todo);
//         }
//     }
// });