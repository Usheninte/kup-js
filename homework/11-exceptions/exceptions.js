const reverseJsonArray = (jsonArray) => {
    if (Object.prototype.toString.call(JSON.parse(jsonArray)) !== '[object Array]') {
        return false;
    } else {
        const originalArray = JSON.parse(jsonArray);

        let reversedArray = [];

        for (let i = 1; i <= originalArray.length; i++) {
            reversedArray.push(originalArray[originalArray.length - i]);
        }

        return JSON.stringify(reversedArray);
    }
}

console.log(
    reverseJsonArray('["a","b","c","d","e","f"]')
);
