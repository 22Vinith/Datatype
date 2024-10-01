// In JavaScript, a higher-order function is a function that either:

// Takes one or more functions as arguments, or
// Returns a function as its result.
// Higher-order functions enable powerful abstractions and are widely used in functional programming.

// Example 1: Function as an Argument (Higher-Order Function)
function greet(name, formatter) {
  return formatter(name);  // Calling the function passed as an argument
}

function politeFormat(name) {
  return "Hello, " + name + "!";
}

function excitedFormat(name) {
  return "Hey " + name.toUpperCase() + "!!!";
}

console.log(greet("Alice", politeFormat));   // Output: Hello, Alice!
console.log(greet("Bob", excitedFormat));    // Output: Hey BOB!!!

// Explanation:
// greet is a higher-order function because it accepts another function (formatter) as an argument.
// Based on which function is passed (politeFormat or excitedFormat), it behaves differently.

// Example 2: Returning a Function (Higher-Order Function)
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);  // Returns a function that doubles numbers
const triple = multiplier(3);  // Returns a function that triples numbers

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15

// Explanation:
// multiplier is a higher-order function because it returns another function.
// The returned function remembers the factor (2 for double, 3 for triple), and multiplies any number passed to it.

// Example 3: Array Methods Using Higher-Order Functions
// JavaScript provides many built-in higher-order functions like map, filter, and reduce, which take a function as an argument.

// map Example
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);  // Output: [2, 4, 6, 8]

// Explanation:
// The map method is a higher-order function that takes a function as an argument and applies it to each element of the array.

// filter Example
const number1 = [1, 2, 3, 4, 5];

const evenNumbers = number1.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers);  // Output: [2, 4]

// Explanation:
// The filter method is a higher-order function that filters the array based on the condition specified in the passed function.

// Example 4: reduce Example
const number = [1, 2, 3, 4];

const sum = number.reduce(function(accumulator, current) {
  return accumulator + current;
}, 0);

console.log(sum);  // Output: 10

// Explanation:
// The reduce method is a higher-order function that reduces the array to a single value, based on the function provided (in this case, summing up the values).