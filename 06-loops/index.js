// main for loop
for (let i = 1; i <= 100; i++) {
    // conditional to print multiples of 3 & 5 as "FizzBuzz"
    if (i % (3 * 5) === 0) {
        console.log("FizzBuzz")
    }
    // conditional to print multiples of 3 as "Fizz"
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // conditional to print multiples of 5 as "Buzz"
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    // conditional to print prime numbers as "Prime"
    else if (isPrime0to100(i)) {
        console.log("Prime")
    }
    else {
        console.log(i);
    }
}

function isPrime0to100(num) {
    for (let i = 2; i <= 100; i++) {
        if (num === 2) {
            return true;
        } else if (num % i === 0) {
            return false;
        } else {
            return num > 1;
        }
    }
}