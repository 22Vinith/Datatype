// The includes() method in JavaScript is used to check whether a given element exists within an array or a string. It returns true if the element is found and false otherwise.

// Syntax:
// For arrays:
array.includes(element, startIndex)

// For strings:
string.includes(substring, startIndex)

// Parameters:
// element/substr: The value you are searching for in the array or string.
// startIndex (optional): The index from which to start the search (default is 0).
// Example with Arrays:

let fruits = ['apple', 'banana', 'mango'];

let hasApple = fruits.includes('apple');  // true
let hasOrange = fruits.includes('orange'); // false

console.log(hasApple);  // Output: true
console.log(hasOrange); // Output: false