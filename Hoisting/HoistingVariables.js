// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their 
//containing scope (either global or local) during the compilation phase, before the code is executed. 
//However, only the declarations are hoisted, not the initializations.

// How Hoisting Works
// Variable declarations using var are hoisted but initialized with undefined until the code is executed.
// Function declarations are fully hoisted, meaning you can call the function before its actual declaration in 
//the code.Hoisting with var
// When using var, the variable is hoisted to the top but not its value (initialization).

// Example:

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
// Explanation:

// The declaration var x; is hoisted to the top of the code.
// During hoisting, it behaves as:

var x; // Declaration hoisted
console.log(x); // Output: undefined (since it's uninitialized)
x = 5; // Initialization happens later
console.log(x); // Output: 5
// 2. Hoisting with let and const
// Unlike var, variables declared with let and const are hoisted but not initialized. They are in a "temporal dead zone" until the code executes their declaration.

// Example:

console.log(a); // Output: ReferenceError
let a = 10;
// Explanation:

// In the case of let (and const), the declaration is hoisted, but accessing the variable before its declaration results in a ReferenceError. The code is effectively:

// a is hoisted, but not initialized (in the "temporal dead zone")
console.log(a); // ReferenceError: a is not defined
let a1 = 10;