// In JavaScript, template strings (also called template literals) are a more powerful way to work with strings. 
// They allow for embedded expressions, multi-line strings, and string interpolation, 
// making string manipulation much easier and more readable.

// Template strings are created using backticks ` instead of quotes (' or "), and variables or expressions can be 
// inserted using ${}.

// Key Features of Template Strings:
// String Interpolation: Insert variables and expressions directly into the string.
// Multi-line Strings: Easily create multi-line strings without needing escape characters.
// Expression Embedding: Insert any valid JavaScript expression inside the string.
// Simple Example of Template String:

let name = "John";
let age = 25;

let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);
// Output: Hello, my name is John and I am 25 years old.