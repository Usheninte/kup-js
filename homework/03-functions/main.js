/*
* Function checking the validity of whether a submitted name falls
* into the category of a mortal man.
*
* SYLLOGISM - Logical Argument:
* " All men are mortal
* " Socrates is a man.
* " Therefore, socrates is mortal. "
* */

function isMortalMan(value) {
    // list of mortal men
    const men = ['Socrates', 'Plato', 'Aristotle'];
    // regular expression pattern for valid name
    const properName = RegExp('/^[A-Za-z]+$/');

    // assign function argument to new variable
    let name = value;
    // conditional checking if submitted argument is a valid mortal man
    if (men.includes(name)) {
        console.log(`${name} - a mortal man!`)
        return true;  // boolean value
    }
    else {
        // conditional checking if argument type is String
        if (typeof value !== 'string') {
            console.error('# Please enter in a string | A valid name #');
        }
        // conditional checkig if argument passed is valid RegEx pattern
        else if (!properName.test(name)) {
            console.error('# Please enter in a valid name #');
        }
        return false;  // boolean value
    }
}


try {
    console.log(isMortalMan("Socrates"));
} catch {
    console.error('# Invalid input #')
}
