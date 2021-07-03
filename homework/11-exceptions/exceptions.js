const reverseJsonArray = (jsonArray) => {
    console.log('JSON Array: ' + jsonArray);
    const originalArray = JSON.parse(jsonArray);
    let reversedArray = [];

    for (let i = 1; i <= originalArray.length; i++) {
        reversedArray.push(originalArray[originalArray.length - i]);
    }

    const stringfiedArray = JSON.stringify(reversedArray);

    console.log('Reversed JSON Array: ' + stringfiedArray);
}

reverseJsonArray('["a","b","c"]');