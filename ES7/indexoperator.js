// In JavaScript, the index operator ([]) is used to access elements in arrays and characters in strings by their index. It allows you to retrieve or modify values at a specific position within an array or string.

// Arrays: Accessing and Modifying Elements
// In arrays, the index operator allows you to access or change elements at a specific position, starting from 0.

// Syntax for Arrays:
// array[index]

// Simple Example with Arrays:
let fruits = ['apple', 'banana', 'mango'];

// Accessing elements using index
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: mango

// Modifying an element using index
fruits[1] = 'orange';
console.log(fruits); // Output: ['apple', 'orange', 'mango']
// Explanation:
// fruits[0] retrieves the first element ('apple') from the array.
// fruits[1] = 'orange' modifies the second element from 'banana' to 'orange'.
// Strings: Accessing Characters
// You can also use the index operator to access individual characters in a string.

// Syntax for Strings:
// string[index]

// Simple Example with Strings:
let message = "Hello";

// Accessing characters using index
console.log(message[0]);  // Output: H
console.log(message[4]);  // Output: o
// Explanation:
// message[0] retrieves the first character 'H' from the string "Hello".
// message[4] retrieves the fifth character 'o' from the string.

// Out-of-Bounds Index:
// If you try to access an index that is out of bounds (beyond the length of the array or string), JavaScript will return undefined.
let fruits = ['apple', 'banana', 'mango'];

console.log(fruits[5]);  // Output: undefined (since index 5 doesn't exist)