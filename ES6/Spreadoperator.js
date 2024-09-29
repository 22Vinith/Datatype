// The spread operator in JavaScript, represented by three dots (...), allows you to expand or spread elements of an array, object, or other iterable into individual elements. It's commonly used for copying, combining, or expanding arrays and objects.

// Key Use Cases of the Spread Operator:
// Expanding arrays.
// Combining arrays or objects.
// Copying arrays or objects.
// Passing arguments to functions.

// 1. Spread Operator with Arrays
// a) Expanding an Array into Individual Elements:
// You can use the spread operator to expand the elements of an array into individual values.


let numbers = [1, 2, 3];
// Expanding the array into individual elements
console.log(...numbers);  // Output: 1 2 3

// b) Combining Arrays:
// You can use the spread operator to concatenate or combine multiple arrays into one.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Combining arrays using the spread operator
let combined = [...arr1, ...arr2];
console.log(combined);  // Output: [1, 2, 3, 4, 5, 6]

// 2. Spread Operator with Objects
// The spread operator can also be used with objects, allowing you to combine or copy object properties.

// a) Copying an Object:
// You can use the spread operator to create a shallow copy of an object.


let person = { name: "John", age: 30 };

// Copying an object
let copiedPerson = { ...person };

console.log(copiedPerson);  // Output: { name: "John", age: 30 }
// b) Merging Objects:
// You can use the spread operator to merge two or more objects into one.


let person1 = { name: "John", age: 30 };
let job = { title: "Developer", company: "Tech Corp" };

// Merging objects
let merged = { ...person, ...job };

console.log(merged);  
// Output: { name: "John", age: 30, title: "Developer", company: "Tech Corp" }