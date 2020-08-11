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
    let values = [value1, value2];
    let labels = [label1, label2];

    // // acceptable strings
    const labelWords = {
        singular: ["second", "minute", "hour", "day"],
        plural: ["seconds", "minutes", "hours", "days",]
    };

    const singular = labelWords.singular;
    const plural = labelWords.plural;

    const labelWordsBucket = Object.values(labelWords);

    // console.log(lableWordsBucket);

    function timeCalc(val, lab) {
        console.log(val, lab);

        val.forEach(value => {
            if (typeof value !== 'number') {
                throw "Error: Invalid input.";
            }
        })

        lab.forEach(label => {
            if (typeof label !== 'string') {
                throw "Error: Invalid input.";
            };

            if (labelWordsBucket[0].includes(label) === false
                && labelWordsBucket[1].includes(label) === false) {
                throw "Error: Not a valid label.";
            };
        });

        if (val[0] === 1 && singular.includes(lab[0])) {
            console.log("Scaffolding: Valid value & label (1)");
        } else {
            throw "Error: Invalid input.";
        }

        if (val[1] > 1 && plural.includes(lab[1])) {
            console.log("Scaffolding: Valid value & label (2)");
        } else {
            throw "Error: Invalid input.";
        }
    };

    timeCalc(values, labels);

    // ...
    console.log("! Final line.");
};

try {
    timeAdder(1, "minute", 2, "seconds");
} catch (e) {
    console.error(e);
}
