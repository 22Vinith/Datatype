// Function Hoisting
// Function declarations are fully hoisted, meaning you can call the function before it's defined in the code.

// Example:

greet(); // Output: "Hello, world!"

function greet() {
  console.log("Hello, world!");
}
// Explanation:

// The function greet is hoisted entirely (both its declaration and definition), 
//so it can be invoked even before it's defined in the code.

// 4. Function Expression Hoisting
// If a function is assigned to a variable (using var, let, or const), only the variable declaration is hoisted, not the function itself.

// Example:

console.log(greet); // Output: undefined
var greet = function() {
  console.log("Hello!");
};
greet(); // Output: "Hello!"
// Explanation:

// In this case, only the declaration var greet; is hoisted, not the function itself. The code behaves like:

var greet;
console.log(greet); // Output: undefined
greet = function() {
  console.log("Hello!");
};
greet(); // Output: "Hello!"