const assert = require('assert').strict;

/*
* The function should accept 4 parameters:
*--
* value1, label1, value2, label2.
* * *
* If the inputs are valid, it should return an array with 2 variables inside of it:
* value3, and  label3. For example:
*--
* return [5,"minutes"];
* */


function timeAdder(value1, label1, value2, label2) {
    let labels = [label1, label2];
    // checking if label type is string
    let labelTypeValidity = [];
    labels.forEach(label => labelTypeValidity.push(typeof label == 'string'));
    console.log(labelTypeValidity);
    labelTypeValidity.forEach(label => {
        if(label === false) {
            throw "Error: Invalid input.";
        }
    });

    // ...
    console.log("! Final line.");
}

try {
    timeAdder(1, "minute", 2, "seconds")
} catch (e) {
    console.error(e)
}
