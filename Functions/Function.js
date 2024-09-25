// Functions in JavaScript are fundamental building blocks that allow you to encapsulate reusable code. 
// They enable you to execute a block of code when called and can accept parameters, perform operations, 
//and return values. Here’s a detailed overview:

// Types of Functions

// 1.Function Declarations
// Defined using the function keyword.
// Hoisted, meaning they can be called before their definition in the code.

function myFunction(parameter) {
    // Function body
}

// 2.Function Expressions
// Defined as part of an expression, typically assigned to a variable.
// Not hoisted, meaning they cannot be called before their definition.

const myFunction = function(parameter) {
    // Function body
};

// 3.Arrow Functions (introduced in ES6)
// A more concise syntax for writing functions.
// Do not have their own this, making them useful for callbacks.

const myFunction = (parameter) => {
    // Function body
};

//4.IIFE (Immediately Invoked Function Expressions)
// Functions that are executed immediately after they are defined.

(function() {
    // Function body
})();

//Function Parameters and Arguments
// Parameters: Variables listed in a function's definition.
// Arguments: Values passed to the function when it is called.
// You can set default values for parameters.

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
// Return Values
// Functions can return a value using the return statement. 
//If no return statement is provided, the function returns undefined.