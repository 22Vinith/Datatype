// JavaScript has several built-in data types, which can be categorized into primitive and reference types.

// 1. Primitive Data Types
// Primitive data types are the basic types that are not objects and have immutable values. There are six primitive data types in JavaScript:


// a. Number
// Represents both integer and floating-point numbers.
let age = 25;               // Integer
let price = 19.99;         // Floating-point


// b. String
// Represents a sequence of characters, enclosed in single or double quotes.
let greeting = "Hello, World!";
let name = 'Alice';


// c. Boolean
// Represents a logical entity and can have two values: true or false.
let isOnline = true;
let hasAccess = false;


// d. Undefined
// A variable that has been declared but not assigned a value is of type undefined.
let x;
console.log(x); // Output: undefined


// e. Null
// Represents the intentional absence of any object value.
let emptyValue = null;


// f. Symbol (ES6)
// A unique and immutable primitive value, often used as object property keys.
let uniqueId = Symbol('id');

//------------------------------------------------------------------------------------------------------------------------------------

// 2. Reference Data Types
// Reference types are objects and can hold collections of values or more complex entities. The main reference type is Object.
//------------------------------------------------------------------------------------------------------------------------------------


// a. Object
// An unordered collection of key-value pairs.
let person = {
    name1: "Alice",
    age1: 30,
    isStudent: false
};


// b. Array
// A special type of object that holds an ordered collection of values.
let fruits = ["apple", "banana", "cherry"];


// c. Function
// A callable object that can be assigned to variables, passed as arguments, and returned from other functions.
function greet(name) {
    return "Hello, " + name;
}


// Example of Using Different Data Types (primitive and reference) 

// Primitive types
let number = 42;               // Number
let text = "Hello, JavaScript"; // String
let isActive = true;           // Boolean
let notAssigned;                // Undefined
let emptyValue1 = null;         // Null
let uniqueSymbol = Symbol('sym'); // Symbol

// Reference types
let person1 = {
    name: "John",
    age: 25
};

let colors = ["red", "green", "blue"];

function multiply(a, b) {
    return a * b;
}

// Accessing properties and values
console.log(person.name);      // Output: John
console.log(colors[1]);        // Output: green
console.log(multiply(2, 3));   // Output: 6