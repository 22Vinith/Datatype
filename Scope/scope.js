// In JavaScript, scope refers to the visibility or accessibility of variables and functions in different parts of your code. There are three main types of scope:

// Global Scope
// Function Scope
// Block Scope


// 1. Global Scope
// Variables and functions declared outside of any function or block are in the global scope.
// Global variables are accessible from anywhere in the code, both inside and outside of functions.
// In browsers, global variables become properties of the window object (the global object in the browser environment).
// Example:
var globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // Accessible here
}
showGlobal();
console.log(globalVar); // Accessible here too


// 2. Function Scope
// Variables declared inside a function using var, let, or const are in function scope and can only be accessed within that function.
// This type of scope is created whenever a function is invoked.
// Variables in function scope are not accessible outside the function.
// Example:
function myFunction() {
  var functionScopedVar = "I'm in a function";
  console.log(functionScopedVar); // Accessible here
}
myFunction();
console.log(functionScopedVar); // Error: not accessible here


// 3. Block Scope
// Block scope refers to variables that are declared within a block of code, such as inside an if statement or a for loop.
// Variables declared with let or const inside a block {} can only be accessed within that block. This is called block-scoping.
// Variables declared with var do not have block scope—they are function-scoped even if declared inside a block.
// Example with let and const (block scope):
if (true) {
  let blockScopedVar = "I'm block-scoped";
  const blockScopedConst = "I'm also block-scoped";
  console.log(blockScopedVar);  // Accessible here
  console.log(blockScopedConst); // Accessible here
}
console.log(blockScopedVar); // Error: not accessible here
console.log(blockScopedConst); // Error: not accessible here


// Example with var (no block scope):
if (true) {
  var noBlockScopeVar = "I'm function-scoped, not block-scoped";
  console.log(noBlockScopeVar);  // Accessible here
}

console.log(noBlockScopeVar); // Accessible here