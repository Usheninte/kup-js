// template text content
const templateContent = {
    'appTitle': 'To-do List App',
    'buttonText': {
        'signup': 'Sign Up',
        'login': 'Log In',
        'accountSettings': 'Account Settings',
        'logout': 'Log Out',
        'dashboard': 'Dashboard',
        'update': 'Update',
        'createNewList': 'Create New to-do List',
        'back': 'Back',
        'createNewListItem': 'Add New Item',
        'save': 'Save'
    },
    'viewTitles': {
        'updateForm': 'Update Profile',
        'listingsHeader': 'Lists',
        'newList': 'Create New to-do List',
        'updateList': 'Update to-do List',
        'newListItem': 'Add New Item'
    },
    'formLabels': {
        'registration': {
            'firstName': 'First name',
            'lastName': 'Last name',
            'emailAddress': 'Email address',
            'password': 'Password',
            'terms': 'I agree to the Terms of Use'
        },
        'todoList': {
            'listName': 'To-do list name',
            'listItemName': 'Item name',
            'listItemDoneStatus': 'Done'
        }
    }
}

// head tag template
const headContent = `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <!-- Custom styling -->
    <link rel="stylesheet" type="text/css" href="style.css">
    <!-- Bootstrap CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">
`;

// body tag contents
const titleBarDiv = `
    <div id="titleBar" class="row">
        <div class="col-12 col-md py-2">
            <h1 class="text-primary">${templateContent['appTitle']}</h1>
        </div>
    </div>
`;

const baseViewDiv = `
    <div id="baseView" class="row">
        <div class="col-12 col-md py-2">
            <button class="btn btn-primary" id="signup">
                ${templateContent['buttonText']['signup']}
            </button>
        </div>
        <div class="col-12 col-md py-2">
            <button class="btn btn-outline-primary" id="login">
                ${templateContent['buttonText']['login']}
            </button>
        </div>
    </div>
`;

const signupFormDiv = `
    <div id="signupForm" class="row visually-hidden">
        <div class="col-10 col-md-4 py-2">
            <h4 class="text-primary text-underline">Sign Up</h4>
            <form>
                <div class="my-3">
                    <label for="registerFirstName" class="form-label">
                        ${templateContent['formLabels']['registration']['firstName']}
                    </label>
                    <span id="registerFirstNameError" class="error-note"></span>
                    <span id="registerFirstNameLengthError" class="error-note"></span>
                    <input type="text" class="form-control" id="registerFirstName">
                </div>
                <div class="my-3">
                    <label for="registerLastName" class="form-label">
                        ${templateContent['formLabels']['registration']['lastName']}
                    </label>
                    <span id="registerLastNameError" class="error-note"></span>
                    <span id="registerLastNameLengthError" class="error-note"></span>
                    <input type="text" class="form-control" id="registerLastName">
                </div>
                <div class="my-3">
                    <label for="registerEmailAddress" class="form-label">
                        ${templateContent['formLabels']['registration']['emailAddress']}
                    </label>
                    <span id="registerEmailAddressError" class="error-note"></span>
                    <span id="registerEmailAddressLengthError" class="error-note"></span>
                    <span id="registerEmailAddressContentError" class="error-note"></span>
                    <input type="email" class="form-control" id="registerEmailAddress">
                </div>
                <div class="my-3">
                    <label for="registerPassword" class="form-label">
                        ${templateContent['formLabels']['registration']['password']}
                    </label>
                    <span id="registerPasswordError" class="error-note"></span>
                    <span id="registerPasswordLengthError" class="error-note"></span>
                    <input type="password" class="form-control" id="registerPassword">
                </div>
                <div class="form-check my-3">
                    <label for="registerTerms" class="form-check-label">
                        ${templateContent['formLabels']['registration']['terms']}
                    </label>
                    <input class="form-check-input" type="checkbox" id="registerTerms">
                    <p id="registerTermsError" class="error-note"></p>
                </div>
                <button class="btn btn-dark my-3" id="signupSubmit">
                    ${templateContent['buttonText']['signup']}
                </button>
            </form>
        </div>
    </div>
`;

const loginFormDiv = `
    <div id="loginForm" class="row visually-hidden">
        <div class="col-10 col-md-4 py-2">
            <h4 class="text-primary text-underline">Login</h4>
            <form>
                <span id="loginAuthenticationError" class="error-note"></span>
                <span id="userExistenceError" class="error-note"></span>
                <div class="my-3">
                    <label for="loginEmailAddress" class="form-label">
                        ${templateContent['formLabels']['registration']['emailAddress']}
                    </label>
                    <span id="loginEmailAddressError" class="error-note"></span>
                    <span id="loginEmailAddressLengthError" class="error-note"></span>
                    <span id="loginEmailAddressContentError" class="error-note"></span>
                    <input type="email" class="form-control" id="loginEmailAddress">
                </div>
                <div class="my-3">
                    <label for="loginPassword" class="form-label">
                        ${templateContent['formLabels']['registration']['password']}
                    </label>
                    <span id="loginPasswordError" class="error-note"></span>
                    <span id="loginPasswordLengthError" class="error-note"></span>
                    <input type="password" class="form-control" id="loginPassword">
                </div>
                <button class="btn btn-dark my-3" id="loginSubmit">
                    ${templateContent['buttonText']['login']}
                </button>
            </form>
        </div>
    </div>
`;

const authBarDiv = `
    <div id="authBar" class="row visually-hidden py-2">
        <div class="col-10 col-md-4 py-2">
            <div class="col-12 col-md py-2 d-flex justify-content-between">
                <button class="btn btn-primary" id="accountSettings">
                    ${templateContent['buttonText']['accountSettings']}
                </button>
                <button class="btn btn-outline-primary" id="logout">
                    ${templateContent['buttonText']['logout']}
                </button>
            </div>
        </div>
    </div>
`;

const updateFormDiv = `
    <div id="updateForm" class="row visually-hidden">
        <div class="col-10 col-md-4 py-2">
            <button id="updateForm2Dashboard" class="btn btn-outline-dark my-3">
                <i class="bi bi-backspace-fill"></i> 
                ${templateContent['buttonText']['dashboard']}
            </button>
            <h4 class="text-primary text-underline">
                ${templateContent['viewTitles']['updateForm']}
            </h4>
            <form>
                <div class="my-3">
                    <label for="updateFirstName" class="form-label">
                        ${templateContent['formLabels']['registration']['firstName']}
                    </label>
                    <span id="updateFirstNameError" class="error-note"></span>
                    <span id="updateFirstNameLengthError" class="error-note"></span>
                    <input type="text" class="form-control" id="updateFirstName">
                </div>
                <div class="my-3">
                    <label for="updateLastName" class="form-label">
                        ${templateContent['formLabels']['registration']['lastName']}
                    </label>
                    <span id="updateLastNameError" class="error-note"></span>
                    <span id="updateLastNameLengthError" class="error-note"></span>
                    <input type="text" class="form-control" id="updateLastName">
                </div>
                <div class="my-3">
                    <label for="updateEmailAddress" class="form-label">
                        ${templateContent['formLabels']['registration']['emailAddress']}
                    </label>
                    <span id="updateEmailAddressError" class="error-note"></span>
                    <span id="updateEmailAddressLengthError" class="error-note"></span>
                    <span id="updateEmailAddressContentError" class="error-note"></span>
                    <input type="email" class="form-control" id="updateEmailAddress">
                </div>
                <div class="my-3">
                    <label for="updatePassword" class="form-label">
                        ${templateContent['formLabels']['registration']['password']}
                    </label>
                    <span id="updatePasswordError" class="error-note"></span>
                    <span id="updatePasswordLengthError" class="error-note"></span>
                    <input type="text" class="form-control" id="updatePassword">
                </div>
                <div class="form-check my-3">
                    <label for="updateTerms" class="form-check-label">
                        ${templateContent['formLabels']['registration']['terms']}
                    </label>
                    <input class="form-check-input" type="checkbox" id="updateTerms">
                    <p id="updateTermsError" class="error-note"></p>
                </div>
                <button class="btn btn-dark my-3" id="updateSubmit">
                    ${templateContent['buttonText']['update']}
                </button>
            </form>
        </div>
    </div>
`;

const dashboardDiv = `
    <div id="dashboard" class="row visually-hidden">
        <div class="col-10 col-md-4 py-2">
            <h4 class="text-primary text-underline">Dashboard</h4>
            <button id="createNewList" class="btn btn-dark my-1">
                ${templateContent['buttonText']['createNewList']}
            </button>
            <div id="lists" class="my-3">
                <h4 id="listingsHeader" class="visually-hidden my-3">
                    ${templateContent['viewTitles']['listingsHeader']}
                </h4>
                <div id="listings"></div>
            </div>
        </div>
    </div>
`;

const todoListDiv = `
    <div id="todoList" class="row visually-hidden">
        <div class="col-10 col-md-4 py-2">
            <button id="todoList2Dashboard" class="btn btn-outline-dark my-3">
                <i class="bi bi-backspace-fill"></i> 
                ${templateContent['buttonText']['back']}
            </button>
            <div id="todoListIdentifier" class="my-3 list-name">
                <i class="bi bi-pencil-square"></i>
                <strong><span id="todoListName"><span></strong>
            </div>
            <button id="createNewListItem" class="btn btn-dark my-1">
                ${templateContent['buttonText']['createNewListItem']}
            </button>
            <div id="todoListItems" class="my-3"></div>
        </div>
    </div>
`;

const newListDiv = `
    <div id="newList" class="row visually-hidden">
        <div class="col-10 col-md-4 py-2">
            <button id="newList2Dashboard" class="btn btn-outline-dark my-3">
                <i class="bi bi-backspace-fill"></i> 
                ${templateContent['buttonText']['back']}
            </button>
            <h4 class="text-primary text-underline">
                ${templateContent['viewTitles']['newList']}
            </h4>
            <form>
                <div class="my-3">
                    <label for="listName" class="form-label">
                        ${templateContent['formLabels']['todoList']['listName']}
                    </label>
                    <span id="listNameError" class="error-note"></span>
                    <span id="listNameUniqueError" class="error-note"></span>
                    <input type="text" class="form-control" id="listName">
                </div>
                <button class="btn btn-dark my-3" id="createListSubmit">
                    ${templateContent['buttonText']['save']}
                </button>
            </form>
        </div>
    </div>
`;

const updateListDiv = `
    <div id="updateList" class="row visually-hidden">
        <div class="col-10 col-md-4 py-2">
            <button id="updateList2todoList" class="btn btn-outline-dark my-3">
                <i class="bi bi-backspace-fill"></i> 
                ${templateContent['buttonText']['back']}
            </button>
            <h4 class="text-primary text-underline">
                ${templateContent['viewTitles']['updateList']}
            </h4>
            <form>
                <div class="my-3">
                    <label for="updateListName" class="form-label">
                        ${templateContent['formLabels']['todoList']['listName']}
                    </label>
                    <span id="updateListNameError" class="error-note"></span>
                    <span id="updateListNameUniqueError" class="error-note"></span>
                    <input type="text" class="form-control" id="updateListName">
                </div>
                <button class="btn btn-dark my-3" id="updateListSubmit">
                    ${templateContent['buttonText']['update']}
                </button>
            </form>
        </div>
    </div>
`;

const newListItemDiv = `
    <div id="newListItem" class="row visually-hidden">
        <div class="col-10 col-md-4 py-2">
            <button id="newListItem2todoList" class="btn btn-outline-dark my-3">
                <i class="bi bi-backspace-fill"></i> 
                ${templateContent['buttonText']['back']}
            </button>
            <h4 class="text-primary text-underline">
                ${templateContent['viewTitles']['newListItem']}
            </h4>
            <form>
                <div class="my-3">
                    <label for="listItemName" class="form-label">
                        ${templateContent['formLabels']['todoList']['listItemName']}
                    </label>
                    <span id="listItemNameError" class="error-note"></span>
                    <input type="text" class="form-control" id="listItemName">
                </div>
                <div class="my-3">
                    <div class="form-check">
                        <label for="listItemDoneStatus" class="form-check-label">
                            ${templateContent['formLabels']['todoList']['listItemDoneStatus']}
                        </label>
                        <input class="form-check-input" type="checkbox" id="listItemDoneStatus">
                    </div>
                </div>
                <button class="btn btn-dark my-3" id="createListItemSubmit">
                    ${templateContent['buttonText']['save']}
                </button>
            </form>
        </div>
    </div>
`;

const updateListItemDiv = `
    <div id="updateListItem" class="row visually-hidden">
        <div class="col-10 col-md-4 py-2">
            <button id="updateListItem2todoList" class="btn btn-outline-dark my-3">
                <i class="bi bi-backspace-fill"></i> 
                ${templateContent['buttonText']['back']}
            </button>
            <h4 class="text-primary text-underline">${templateContent['buttonText']['update']}
                "<span id="listItemNameValue"></span>"
            </h4>
            <form>
                <div class="my-3">
                    <label for="updateListItemName" class="form-label">
                        ${templateContent['formLabels']['todoList']['listItemName']}
                    </label>
                    <span id="updateListItemNameError" class="error-note"></span>
                    <input type="text" class="form-control" id="updateListItemName">
                </div>
                <div class="my-3">
                    <div class="form-check">
                        <label for="updateListItemDoneStatus" class="form-check-label">
                            ${templateContent['formLabels']['todoList']['listItemDoneStatus']}
                        </label>
                        <input class="form-check-input" type="checkbox" id="updateListItemDoneStatus">
                    </div>
                </div>
                <button class="btn btn-dark my-3" id="updateListItemSubmit">
                    ${templateContent['buttonText']['update']}
                </button>
            </form>
        </div>
    </div>
`;

const bodyContentTemplates = [titleBarDiv, baseViewDiv, signupFormDiv, loginFormDiv, authBarDiv,
    updateFormDiv, dashboardDiv, todoListDiv, newListDiv, updateListDiv,
    newListItemDiv, updateListItemDiv
];

const htmlFill = (headTemplate, bodyTemplates) => {
    document.querySelector('head')
        .insertAdjacentHTML('afterbegin', headTemplate)

    const innerBodyDiv = `
        <div class="container-fluid mx-2 my-2">
            ${bodyTemplates.map((template) => template).join("")}
        </div>
    `;

    document.querySelector('body')
        .insertAdjacentHTML('afterbegin', innerBodyDiv);
}

window.addEventListener('load', (e) => {
    console.log('Page loaded!');
    htmlFill(headContent, bodyContentTemplates);

    // local storage as database
    const database = window.localStorage;

    // current user values
    let currentUserDetails;
    let oldListItemName;
    let oldListName;

    // views
    const baseView = document.querySelector('#baseView');
    const signup = document.querySelector('#signup');
    const login = document.querySelector('#login');
    const dashboard = document.querySelector('#dashboard');
    const content = document.querySelector('#content');
    const authBar = document.querySelector('#authBar');
    const logout = document.querySelector('#logout');
    const accountSettings = document.querySelector('#accountSettings');
    const updateForm = document.querySelector('#updateForm');
    const updateSubmit = document.querySelector('#updateSubmit');
    const updateForm2Dashboard = document.querySelector('#updateForm2Dashboard');
    const createNewList = document.querySelector('#createNewList');
    const lists = document.querySelector('#lists');
    const listings = document.querySelector('#listings');
    const newList = document.querySelector('#newList');
    const newList2Dashboard = document.querySelector('#newList2Dashboard');
    const createListSubmit = document.querySelector('#createListSubmit');
    const todoListIdentifier = document.querySelector('#todoListIdentifier');
    const todoList = document.querySelector('#todoList');
    const todoListName = document.querySelector('#todoListName');
    const todoList2Dashboard = document.querySelector('#todoList2Dashboard');
    const createNewListItem = document.querySelector('#createNewListItem');
    const newListItem = document.querySelector('#newListItem');
    const newListItem2todoList = document.querySelector('#newListItem2todoList');
    const createListItemSubmit = document.querySelector('#createListItemSubmit');
    const updateList = document.querySelector('#updateList');
    const updateList2todoList = document.querySelector('#updateList2todoList');
    const updateListName = document.querySelector('#updateListName');
    const updateListSubmit = document.querySelector('#updateListSubmit');
    const todoListItems = document.querySelector('#todoListItems');
    const updateListItem = document.querySelector('#updateListItem');
    const listItemNameValue = document.querySelector('#listItemNameValue');
    const updateListItem2todoList = document.querySelector('#updateListItem2todoList');
    const updateListItemSubmit = document.querySelector('#updateListItemSubmit');

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
    const signupForm = document.querySelector('#signupForm');
    const signupSubmit = document.querySelector('#signupSubmit');

    // register user in local storage
    const registerUser = (userInformation) => {
        database.setItem(`${userInformation['email']}`, JSON.stringify(userInformation));
    }

    // populate user information from local storage
    const accountInformation = (userInformation) => {
        const currentUser = database.getItem(userInformation['email']);
        const userInfo = JSON.parse(currentUser);

        // update DOM values
        const updateFirstName = document.querySelector('#updateFirstName');
        const updateLastName = document.querySelector('#updateLastName');
        const updateEmailAddress = document.querySelector('#updateEmailAddress');
        const updatePassword = document.querySelector('#updatePassword');
        const updateTerms = document.querySelector('#updateTerms');

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
        const regFirstName = document.querySelector('#registerFirstName');
        const regLastName = document.querySelector('#registerLastName');
        const regEmailAddress = document.querySelector('#registerEmailAddress');
        const regPassword = document.querySelector('#registerPassword');
        const regTerms = document.querySelector('#registerTerms');

        // input errors DOM extraction
        const regFirstNameError = document.querySelector('#registerFirstNameError');
        const regFirstNameLengthError = document.querySelector('#registerFirstNameLengthError');
        const regLastNameError = document.querySelector('#registerLastNameError');
        const regLastNameLengthError = document.querySelector('#registerLastNameLengthError');
        const regEmailAddressError = document.querySelector('#registerEmailAddressError');
        const regEmailAddressLengthError = document.querySelector('#registerEmailAddressLengthError');
        const regEmailAddressContentError = document.querySelector('#registerEmailAddressContentError');
        const regPasswordError = document.querySelector('#registerPasswordError');
        const regPasswordLengthError = document.querySelector('#registerPasswordLengthError');
        const regTermsError = document.querySelector('#registerTermsError');

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
    const loginForm = document.querySelector('#loginForm');
    const loginSubmit = document.querySelector('#loginSubmit');
    const loginAuthenticationError = document.querySelector('#loginAuthenticationError');
    const userExistenceError = document.querySelector('#userExistenceError');

    login.addEventListener('click', () => {
        baseView.classList.toggle('visually-hidden');
        loginForm.classList.toggle('visually-hidden');
    });

    // behaviour on log in click
    loginSubmit.addEventListener('click', (e) => {
        // input DOM extraction
        const loginEmailAddress = document.querySelector('#loginEmailAddress');
        const loginPassword = document.querySelector('#loginPassword');

        // input errors DOM extraction
        const loginEmailAddressError = document.querySelector('#loginEmailAddressError');
        const loginEmailAddressLengthError = document.querySelector('#loginEmailAddressLengthError');
        const loginEmailAddressContentError = document.querySelector('#loginEmailAddressContentError');
        const loginPasswordError = document.querySelector('#loginPasswordError');
        const loginPasswordLengthError = document.querySelector('#loginPasswordLengthError');

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
        const regFirstName = document.querySelector('#registerFirstName');
        const regLastName = document.querySelector('#registerLastName');
        const regEmailAddress = document.querySelector('#registerEmailAddress');
        const regPassword = document.querySelector('#registerPassword');
        const regTerms = document.querySelector('#registerTerms');

        regFirstName.value = '';
        regLastName.value = '';
        regEmailAddress.value = '';
        regPassword.value = '';
        regTerms.checked = false;

        // clear log out form values
        const loginEmailAddress = document.querySelector('#loginEmailAddress');
        const loginPassword = document.querySelector('#loginPassword');

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
    });

    updateSubmit.addEventListener('click', (e) => {
        // input DOM extraction
        const updateFirstName = document.querySelector('#updateFirstName');
        const updateLastName = document.querySelector('#updateLastName');
        const updateEmailAddress = document.querySelector('#updateEmailAddress');
        const updatePassword = document.querySelector('#updatePassword');
        const updateTerms = document.querySelector('#updateTerms');

        // input errors DOM extraction
        const updateFirstNameError = document.querySelector('#updateFirstNameError');
        const updateFirstNameLengthError = document.querySelector('#updateFirstNameLengthError');
        const updateLastNameError = document.querySelector('#updateLastNameError');
        const updateLastNameLengthError = document.querySelector('#updateLastNameLengthError');
        const updateEmailAddressError = document.querySelector('#updateEmailAddressError');
        const updateEmailAddressLengthError = document.querySelector('#updateEmailAddressLengthError');
        const updateEmailAddressContentError = document.querySelector('#updateEmailAddressContentError');
        const updatePasswordError = document.querySelector('#updatePasswordError');
        const updatePasswordLengthError = document.querySelector('#updatePasswordLengthError');
        const updateTermsError = document.querySelector('#updateTermsError');

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
        const listName = document.querySelector('#listName');
        const listNameError = document.querySelector('#listNameError');
        const listNameUniqueError = document.querySelector('#listNameUniqueError');

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
        const updateListNameError = document.querySelector('#updateListNameError');
        const updateListNameUniqueError = document.querySelector('#updateListNameUniqueError');

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
            const listingsHeader = document.querySelector('#listingsHeader');
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
        const listItemName = document.querySelector('#listItemName');
        const listItemNameError = document.querySelector('#listItemNameError');
        const listItemDoneStatus = document.querySelector('#listItemDoneStatus');

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
        const updateListItemName = document.querySelector('#updateListItemName');
        const updateListItemDoneStatus = document.querySelector('#updateListItemDoneStatus');
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
        const updateListItemName = document.querySelector('#updateListItemName');
        const updateListItemNameError = document.querySelector('#updateListItemNameError');
        const updateListItemDoneStatus = document.querySelector('#updateListItemDoneStatus');

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
    });

});