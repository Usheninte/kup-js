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

const behaviourScript = `
    <!-- Custom behaviour -->
    <script src="main.js"></script>
`;

// body tag population

const bodyContentTemplates = [titleBarDiv, baseViewDiv, signupFormDiv, loginFormDiv, authBarDiv,
    updateFormDiv, dashboardDiv, todoListDiv, newListDiv, updateListDiv,
    newListItemDiv, updateListItemDiv, behaviourScript];

const bodyFill = (templatesArray) => {
    const innerBodyDiv = `
        <div class="container-fluid mx-2 my-2">
            ${templatesArray.map((template) => template).join("")}
        </div>
    `;

    document.querySelector('body')
        .insertAdjacentHTML('afterbegin', innerBodyDiv);
}

window.addEventListener('load', (e) => {
    console.log('Page loaded!');
    bodyFill(bodyContentTemplates);
});