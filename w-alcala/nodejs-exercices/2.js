// ## BABY STEPS (Exercise 2 of 13)

// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).

const arguments = process.argv;
let sum = 0;
for (let i = 2; i < arguments.length; i++) {
    const argument = parseInt(arguments[i]);
    sum += argument;
}

console.log(sum);