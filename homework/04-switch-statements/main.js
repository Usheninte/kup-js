function timeAdder(value1, label1, value2, label2) {
    /*
    * The function should accept 4 parameters: value1, label1, value2, label2.
    *
    * If the inputs are valid, it should return an array
    * with 2 variables inside of it - value3, and  label3.
    * For example:
    *
    * return [5,"minutes"];
    * */

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

    let clockBucket = [];  // holder for valid value & label pairings

    function inputChecker(val, lab) {

        // checking values for type number
        val.forEach(value => {
            if (typeof value !== 'number') {
                // throw 'Error ...';
                return false;
            }
        });

        // checking labels for type string
        lab.forEach(label => {
            if (typeof label !== 'string') {
                // throw 'Error ...';
                return false;
            };

            if (labelWordsBucket[0].includes(label) === false
                && labelWordsBucket[1].includes(label) === false) {
                // throw 'Error ...';
                return false;
            };
        });

        // checking valid value & label pairing (1)
        if (val[0] === 1 && singular.includes(lab[0])) {

            const first_arg = [val[0], lab[0]];  // save valid value & label to array
            clockBucket.push(first_arg);  // append array to cloudBucket

        } else if (val[0] > 1 && plural.includes(lab[0])) {

            const first_arg = [val[0], lab[0]];  // save valid value & label to array
            clockBucket.push(first_arg);  // append array to cloudBucket

        } else {
            // throw 'Error ...';
            return false;
        };

        // checking valid value & label pairing (2)
        if (val[1] === 1 && singular.includes(lab[1])) {

            const second_arg = [val[1], lab[1]];  // save valid value & label to array
            clockBucket.push(second_arg);  // append array to cloudBucket

        } else if (val[1] > 1 && plural.includes(lab[1])) {

            const second_arg = [val[1], lab[1]];  // save valid value & label to array
            clockBucket.push(second_arg);  // append array to cloudBucket

        } else {
            // throw 'Error ...';
            return false;
        };

        function timeCalc() {
            // timing
            const sec = 1;
            const min = 60 * sec;
            const hr = 60 * min;
            const dy = 24 * hr;

            // arguments
            const arg1 = clockBucket[0];  // value & label pairing (1)
            const arg2 = clockBucket[1];  // value & label pairing (2)

            // conversion to seconds
            let secondsBucket = [0, 0];  // base array to store conversions

            // value & label pairing (1)
            switch (arg1[1]) {
                case 'second': case 'seconds':
                    secondsBucket[0] += (arg1[0] * sec);  // conversion unchanged for seconds
                    break;
                case 'minute': case 'minutes':
                    secondsBucket[0] += (arg1[0] * min);  // perform timing conversion
                    break;
                case 'hour': case 'hours':
                    secondsBucket[0] += (arg1[0] * hr);  // perform timing conversion
                    break;
                case 'day': case 'days':
                    secondsBucket[0] += (arg1[0] * dy);  // perform timing conversion
                    break;
                default:
                    return false;
            }

            // value & label pairing (2)
            switch (arg2[1]) {
                case 'second': case 'seconds':
                    secondsBucket[1] += (arg2[0] * sec);  // conversion unchanged for seconds
                    break;
                case 'minute': case 'minutes':
                    secondsBucket[1] += (arg2[0] * min);  // perform timing conversion
                    break;
                case 'hour': case 'hours':
                    secondsBucket[1] += (arg2[0] * hr);  // perform timing conversion
                    break;
                case 'day': case 'days':
                    secondsBucket[1] += (arg2[0] * dy);  // perform timing conversion
                    break;
                default:
                    return false;
            }

            // return result

            const label3 = 'seconds';  // chosen label
            const value3 = secondsBucket[0] + secondsBucket[1];  // sum total of conversion values

            let result = [value3, label3];  // create array as specified in requirements
            return result;

        };

        console.log(timeCalc());  // logs result of time calculation to console

    };

    inputChecker(values, labels);

};

// // development setup
// try {
//     timeAdder(2, 'days', 23, 'hours');
// } catch (e) {
//     console.error(e);
// }

timeAdder(3, 'days', 23, 'hours');
