// main for loop
for (let i = 1; i <= 100; i++) {
    // conditional to print multiples of 3 as "Fizz"
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    // conditional to print multiples of 5 as "Buzz"
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i);
    }
}