/*
Write an if…else statement that:
- Prints “even” if the number is an even number
- Prints “odd” if the number is an odd number

Hint: Use the %(modulo) operator to determine if a number is even or odd.
*/

const number = 4; // Change your number to test your if statement
const answer = number % 2;

if ( answer !== 0 /* your if condition goes here */) {
    console.log("odd")
} else {
    console.log("even")
}


