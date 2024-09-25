// In JavaScript, variables are containers for storing data values. They can hold different types of data 
//(numbers, strings, objects, etc.) and can be declared using three main keywords: var, let, and const. 
//Each keyword behaves differently in terms of scope, hoisting, and reassignability. 
//Here's an overview of variables in JavaScript:

// 1. var
// Scope: Function-scoped (available within the function where it's defined, or globally if declared outside any function).
// Hoisting: var declarations are hoisted, meaning they are accessible before their actual declaration, but are initialized as undefined.
// Re-declaration: You can re-declare variables using var in the same scope.
// Reassignment: Variables declared with var can be reassigned.


// 2. let
// Scope: Block-scoped (only available within the nearest block {} in which it is declared, like within loops or conditionals).
// Hoisting: let is hoisted, but not initialized, so accessing it before declaration results in a ReferenceError.
// Re-declaration: You cannot re-declare a let variable in the same scope.
// Reassignment: Variables declared with let can be reassigned.


// 3. const
// Scope: Block-scoped (similar to let, confined to the nearest block {}).
// Hoisting: const is also hoisted but not initialized, causing a ReferenceError if accessed before declaration.
// Re-declaration: You cannot re-declare a const variable in the same scope.
// Reassignment: Variables declared with const cannot be reassigned (i.e., the reference cannot be changed), but objects and arrays defined with const can have their properties or elements modified.


// 4. Variable Declaration and Initialization
// Declaration: Defining a variable using var, let, or const.
var x;
let y;
const z = 10; // const requires initialization


//Initialization: Assigning a value to a variable.
x1 = 5; // assign value to x
y1 = 6; // assign value to y
// 5. Global Variables
// Variables declared outside any function or block are global and accessible from anywhere in the code.