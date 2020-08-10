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

    // // acceptable strings
    const labelWords = {
        singular: ["second", "minute", "hour", "day"],
        plural: ["seconds", "minutes", "hours", "days",]
    };

    const labelWordsBucket = Object.values(labelWords);
    // console.log(lableWordsBucket);

    labels.forEach(label => {
        if (typeof label !== 'string') {
            throw "Error: Invalid input.";
        };

        if (labelWordsBucket[0].includes(label) === false
            && labelWordsBucket[1].includes(label) === false) {
            throw "Error: Not a valid label."
        };
    });

    // ...
    console.log("! Final line.");
}

try {
    timeAdder(1, "minute", 2, "love");
} catch (e) {
    console.error(e);
}
