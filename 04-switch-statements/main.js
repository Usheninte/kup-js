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

    let clockBucket = []

    function inputChecker(val, lab) {

        // checking values for type number
        val.forEach(value => {
            if (typeof value !== 'number') {
                throw "Error ...";
            }
        })

        // checking labels for type string
        lab.forEach(label => {
            if (typeof label !== 'string') {
                throw "Error ...";
            };

            if (labelWordsBucket[0].includes(label) === false
                && labelWordsBucket[1].includes(label) === false) {
                throw "Error ...";
            };
        });

        // checking valid value & label pairing (1)
        if (val[0] === 1 && singular.includes(lab[0])) {

            const first_arg = [val[0], lab[0]];
            clockBucket.push(first_arg);

        } else if (val[0] > 1 && plural.includes(lab[0])) {

            const first_arg = [val[0], lab[0]];
            clockBucket.push(first_arg);

        } else {
            throw "Error ...";
        }

        // checking valid value & label pairing (2)
        if (val[1] === 1 && singular.includes(lab[1])) {

            const second_arg = [val[1], lab[1]];
            clockBucket.push(second_arg);

        } else if (val[1] > 1 && plural.includes(lab[1])) {

            const second_arg = [val[1], lab[1]];
            clockBucket.push(second_arg);

        } else {
            throw "Error ...";
        }

        console.log(clockBucket);

    };

    // function timeCalc(val, lab) {
    // }

    inputChecker(values, labels);
    // timeCalc(values, labels);

    // ...
    console.log("! Final line.");

};

try {
    timeAdder(1, "minute", 2, "seconds");
} catch (e) {
    console.error(e);
}
