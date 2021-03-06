// local storage as database
const database = window.localStorage;

// current user values
let currentUserDetails;
let oldListItemName;
let oldListName;

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
const updateSubmit = document.getElementById('updateSubmit');
const updateForm2Dashboard = document.getElementById('updateForm2Dashboard');
const createNewList = document.getElementById('createNewList');
const lists = document.getElementById('lists');
const listings = document.getElementById('listings');
const newList = document.getElementById('newList');
const newList2Dashboard = document.getElementById('newList2Dashboard');
const createListSubmit = document.getElementById('createListSubmit');
const todoListIdentifier = document.getElementById('todoListIdentifier');
const todoList = document.getElementById('todoList');
const todoListName = document.getElementById('todoListName');
const todoList2Dashboard = document.getElementById('todoList2Dashboard');
const createNewListItem = document.getElementById('createNewListItem');
const newListItem = document.getElementById('newListItem');
const newListItem2todoList = document.getElementById('newListItem2todoList');
const createListItemSubmit = document.getElementById('createListItemSubmit');
const updateList = document.getElementById('updateList');
const updateList2todoList = document.getElementById('updateList2todoList');
const updateListName = document.getElementById('updateListName');
const updateListSubmit = document.getElementById('updateListSubmit');
const todoListItems = document.getElementById('todoListItems');
const updateListItem = document.getElementById('updateListItem');
const listItemNameValue = document.getElementById('listItemNameValue');
const updateListItem2todoList = document.getElementById('updateListItem2todoList');
const updateListItemSubmit = document.getElementById('updateListItemSubmit');

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

// unique name validation
const uniqueNameValidation = (nameValue, searchListContext, inputElementError, errorText) => {
    let verdict = [];

    for (let listElement of searchListContext) {
        // convert values to lowercase for more precise matching
        if (listElement['name'].toLowerCase() === nameValue.toLowerCase()) {
            verdict.push(false);
        } else {
            verdict.push(true);
        }
    }

    // check that name value is unique
    const nameUnique = verdict.every((status) => status === true);

    if (!nameUnique) {
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

    if (!updateList.classList.contains('visually-hidden')) {
        updateList.classList.toggle('visually-hidden');
    }

    if (!todoList.classList.contains('visually-hidden')) {
        todoList.classList.toggle('visually-hidden');
    }

    if (!newListItem.classList.contains('visually-hidden')) {
        newListItem.classList.toggle('visually-hidden');
    }

    if (!updateListItem.classList.contains('visually-hidden')) {
        updateListItem.classList.toggle('visually-hidden');
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

    if (!updateList.classList.contains('visually-hidden')
        && dashboard.classList.contains('visually-hidden')) {
        updateList.classList.toggle('visually-hidden');
        updateForm.classList.toggle('visually-hidden');
    }

    if (!todoList.classList.contains('visually-hidden')
        && dashboard.classList.contains('visually-hidden')) {
        todoList.classList.toggle('visually-hidden');
        updateForm.classList.toggle('visually-hidden');
    }

    if (!newListItem.classList.contains('visually-hidden')
        && dashboard.classList.contains('visually-hidden')) {
        newListItem.classList.toggle('visually-hidden');
        updateForm.classList.toggle('visually-hidden');
    }

    if (!updateListItem.classList.contains('visually-hidden')
        && dashboard.classList.contains('visually-hidden')) {
        updateListItem.classList.toggle('visually-hidden');
        updateForm.classList.toggle('visually-hidden');
    }
});

// switch from update form to dashboard
updateForm2Dashboard.addEventListener('click', () => {
    updateForm.classList.toggle('visually-hidden');
    dashboard.classList.toggle('visually-hidden');
})

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
    const listNameUniqueError = document.getElementById('listNameUniqueError');

    generalValidation(listName.value, listNameError, 'List name can not be empty');
    uniqueNameValidation(listName.value, currentUserDetails['userLists'],
        listNameUniqueError, 'List with name entered already exists');

    const inputValid = fullyValidForm(
        generalValidation(listName.value, listNameError, 'List name can not be empty'),
        uniqueNameValidation(listName.value, currentUserDetails['userLists'],
            listNameUniqueError, 'List with name entered already exists')
    );

    if (inputValid) {
        // save list name to new object
        let newListValues = {};
        newListValues['name'] = listName.value;
        newListValues['items'] = [];

        // update database list with new name
        let dbState = JSON.parse(
            database.getItem(`${currentUserDetails['userEmail']}`)
        );
        dbState['lists'].push(newListValues);
        currentUserDetails['userLists'].push(newListValues);
        database.setItem(`${currentUserDetails['userEmail']}`, JSON.stringify(dbState));

        // notify of to-do list creation
        alert('To-do list created');

        listName.value = '';

        // // switch to dashboard
        switchToDashboard(currentUserDetails['userEmail'], newList);
    }

    e.preventDefault();
});

// switch to new list item form
todoListIdentifier.addEventListener('click', () => {
    todoList.classList.toggle('visually-hidden');
    updateList.classList.toggle('visually-hidden');

    // fill in list name with present value
    updateListName.value = todoListName.innerText;
});

// switch from to-do list to dashboard
updateList2todoList.addEventListener('click', () => {
    updateList.classList.toggle('visually-hidden');
    todoList.classList.toggle('visually-hidden');
});

const listNameUpdate = (listInformation, oldNameValue, newNameValue) => {
    for (let listElement of listInformation) {
        // if list element name is the same as selected list
        if (listElement['name'] === oldNameValue) {
            // update element name with new value
            listElement['name'] = newNameValue;
        }
    }
}

// behaviour on create list submit behaviour
updateListSubmit.addEventListener('click', (e) => {
    // form validation
    const updateListNameError = document.getElementById('updateListNameError');
    const updateListNameUniqueError = document.getElementById('updateListNameUniqueError');

    generalValidation(updateListName.value, updateListNameError, 'List name can not be empty');
    uniqueNameValidation(updateListName.value, currentUserDetails['userLists'],
        updateListNameUniqueError, 'List with name entered already exists');

    const inputValid = fullyValidForm(
        generalValidation(updateListName.value, updateListNameError, 'List name can not be empty'),
        uniqueNameValidation(updateListName.value, currentUserDetails['userLists'],
            updateListNameUniqueError, 'List with name entered already exists')
    );

    if (inputValid) {
        // save list name to new object
        let newListName = updateListName.value;

        // update to-do list name for display
        todoListName.innerText = newListName;

        // update database list with new name
        let dbState = JSON.parse(
            database.getItem(`${currentUserDetails['userEmail']}`)
        );

        // update list name
        listNameUpdate(dbState['lists'], oldListName, newListName);
        listNameUpdate(currentUserDetails['userLists'], oldListName, newListName);
        database.setItem(`${currentUserDetails['userEmail']}`, JSON.stringify(dbState));

        // notify of to-do list creation
        alert('To-do list name updated');

        // reset list name value in update form
        updateListName.value = '';

        // switch to dashboard
        switchToList(currentUserDetails);
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
            listItem.className = 'btn btn-outline-dark my-1';

            listItem.appendChild(listText);
            listItem.appendChild(listIcon);
            listings.appendChild(listItem);

            // behaviour on to-do list button click
            listItem.addEventListener('click', () => {
                // extract list item information
                const listItemInfo = extractListItem(listItem, userDetails);

                // switch to independent view based of extracted list item
                dashboard.classList.toggle('visually-hidden');
                todoList.classList.toggle('visually-hidden');

                // display to-do list name
                todoListName.innerText = listItemInfo['name'];

                // switch to to-do list
                switchToList(currentUserDetails);
            });

            id++;
        }

        lists.appendChild(listings);
    } else {
        // present empty space if no lists
        lists.innerHTML = '';
    }
}

// switch from to-do list to dashboard
todoList2Dashboard.addEventListener('click', () => {
    todoList.classList.toggle('visually-hidden');
    dashboard.classList.toggle('visually-hidden');

    // reset to-do list name
    todoListName.innerText = '';

    // update dashboard content
    dashboardContent(currentUserDetails);
});

// switch to new list item form
createNewListItem.addEventListener('click', () => {
    todoList.classList.toggle('visually-hidden');
    newListItem.classList.toggle('visually-hidden');
});

// switch from to-do list to dashboard
newListItem2todoList.addEventListener('click', () => {
    newListItem.classList.toggle('visually-hidden');
    todoList.classList.toggle('visually-hidden');
});

createListItemSubmit.addEventListener('click', (e) => {
    // input DOM extraction
    const listItemName = document.getElementById('listItemName');
    const listItemNameError = document.getElementById('listItemNameError');
    const listItemDoneStatus = document.getElementById('listItemDoneStatus');

    // form validation
    generalValidation(listItemName.value, listItemNameError, 'List item can not be empty');

    const inputValid = fullyValidForm(
        generalValidation(listItemName.value, listItemNameError, 'List item can not be empty')
    );

    // action on valid input
    if (inputValid) {
        // save list item values to new object
        let newListItemValues = {};
        newListItemValues['item'] = listItemName.value;
        newListItemValues['done'] = listItemDoneStatus.checked;

        // update database list with new name
        let dbState = JSON.parse(
            database.getItem(`${currentUserDetails['userEmail']}`)
        );

        let userLists = dbState['lists'];

        for (let todo of userLists) {
            // find specific to-do list from user database values
            if (todo['name'] === todoListName.innerText) {
                // update current user details
                for (let userInfo of currentUserDetails['userLists']) {
                    if (userInfo['name'] === todoListName.innerText) {
                        userInfo['items'].push(newListItemValues);
                    }
                }

                const specificListItems = todo['items'];
                specificListItems.push(newListItemValues);

                database.setItem(`${currentUserDetails['userEmail']}`,
                    JSON.stringify(dbState));
            }
        }

        // notify of to-do list creation
        alert('To-do list item added');

        // rest list values
        listItemName.value = '';
        listItemDoneStatus.checked = false;

        // switch to to-do list
        switchToList(currentUserDetails);
    }

    // prevent page refresh
    e.preventDefault();
});

const listItemInformation = (innerItemValues) => {
    // fill update list item form with values
    const updateListItemName = document.getElementById('updateListItemName');
    const updateListItemDoneStatus = document.getElementById('updateListItemDoneStatus');
    oldListItemName = innerItemValues['item'];

    updateListItemName.value = innerItemValues['item'];
    updateListItemDoneStatus.checked = innerItemValues['done'];
}

const switchToList = (userDetails) => {
    if (!updateList.classList.contains('visually-hidden')) {
        updateList.classList.toggle('visually-hidden');
        todoList.classList.toggle('visually-hidden');
    }

    if (!newListItem.classList.contains('visually-hidden')) {
        newListItem.classList.toggle('visually-hidden');
        todoList.classList.toggle('visually-hidden');
    }

    if (!updateListItem.classList.contains('visually-hidden')) {
        updateListItem.classList.toggle('visually-hidden');
        todoList.classList.toggle('visually-hidden');
    }

    if (!dashboard.classList.contains('visually-hidden')) {
        dashboard.classList.toggle('visually-hidden');
        todoList.classList.toggle('visually-hidden');
    }

    if (userDetails['userLists'].length > 0) {
        for (let listElement of userDetails['userLists']) {
            if (listElement['name'] === todoListName.innerText) {
                oldListName = todoListName.innerText;

                let id = 0;

                todoListItems.innerHTML = '';

                for (let innerItem of listElement['items']) {
                    const listInnerBlock = document.createElement('div');

                    const listInnerIcon = document.createElement('i');
                    listInnerIcon.className = 'bi bi-pencil-square';

                    const listInnerText = document.createElement('span');
                    listInnerText.innerText = ` ${innerItem['item']}`;

                    const listInnerItem = document.createElement('button');
                    listInnerItem.id = `listInnerItem-${id}`;

                    if (innerItem['done']) {
                        listInnerItem.className = 'btn btn-outline-success my-1 list-button';
                    } else {
                        listInnerItem.className = 'btn btn-outline-danger my-1 list-button';
                    }

                    listInnerItem.appendChild(listInnerIcon);
                    listInnerItem.appendChild(listInnerText);
                    listInnerBlock.appendChild(listInnerItem);
                    todoListItems.appendChild(listInnerBlock);

                    // behaviour on to-do list button click
                    listInnerItem.addEventListener('click', () => {
                        if (innerItem['item'] === listInnerText.innerText.trim()) {
                            // switch to independent view based of extracted list inner item
                            todoList.classList.toggle('visually-hidden');
                            updateListItem.classList.toggle('visually-hidden');

                            // place list values in form
                            listItemNameValue.innerText = listElement['name'];
                            listItemInformation(innerItem);
                        }
                    });

                    id++;
                }
            }
        }
    }
}

// switch from list item update form to to-do list
updateListItem2todoList.addEventListener('click', () => {
    updateListItem.classList.toggle('visually-hidden');
    todoList.classList.toggle('visually-hidden');

    // reset list item name value
    listItemNameValue.innerText = '';

    // reset old item name value
    oldListItemName = '';
});

const itemIndex = (itemArray, itemName) => {
    let itemIndexNumber;
    for (let itemObj of itemArray) {
        if (itemObj['item'] === itemName) {
            itemIndexNumber = itemArray.indexOf(itemObj);
        }
    }
    return itemIndexNumber;
}

// update form for specific to-do list item
updateListItemSubmit.addEventListener('click', (e) => {
    // input DOM extraction
    const updateListItemName = document.getElementById('updateListItemName');
    const updateListItemNameError = document.getElementById('updateListItemNameError');
    const updateListItemDoneStatus = document.getElementById('updateListItemDoneStatus');

    // form validation
    generalValidation(updateListItemName.value, updateListItemNameError, 'List item can not be empty');

    const inputValid = fullyValidForm(
        generalValidation(updateListItemName.value, updateListItemNameError, 'List item can not be empty')
    );

    if (inputValid) {
        // save list item values to new object
        let newListItemValues = {};
        newListItemValues['item'] = updateListItemName.value;
        newListItemValues['done'] = updateListItemDoneStatus.checked;

        // update database list with new name
        let dbState = JSON.parse(
            database.getItem(`${currentUserDetails['userEmail']}`)
        );

        let userLists = dbState['lists'];

        for (let todo of userLists) {
            // find specific to-do list from user database values
            if (todo['name'] === listItemNameValue.innerText) {
                let todoItems = todo['items'];

                const todoListItemIndex = itemIndex(todoItems, oldListItemName);
                todoItems.splice(todoListItemIndex, 1, newListItemValues);

                // update current user details
                for (let userInfo of currentUserDetails['userLists']) {
                    if (userInfo['name'] === listItemNameValue.innerText) {
                        let currentUserItems = userInfo['items'];

                        const currentTodoListItemIndex = itemIndex(currentUserItems, oldListItemName);
                        currentUserItems.splice(currentTodoListItemIndex, 1, newListItemValues);
                    }
                }

                database.setItem(`${currentUserDetails['userEmail']}`, JSON.stringify(dbState));
            }
        }

        // notify of to-do list creation
        alert('To-do list item updated');

        // switch to to-do list
        switchToList(currentUserDetails);
    }

    // prevent page refresh
    e.preventDefault();
})
