// In JavaScript, destructuring assignment can also be applied to objects, allowing you to extract properties from objects and assign them to variables in a concise and readable way. This is particularly useful when working with objects that contain a lot of properties.

// Object Destructuring Syntax:
// The basic syntax looks like this:


// let { property1, property2 } = object;
// The property names you want to extract must match the key names in the object.


// Simple Example of Object Destructuring:
// An object with multiple properties
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Destructuring assignment
let { name, age, city } = person;

console.log(name);  // Output: John
console.log(age);   // Output: 30
console.log(city);  // Output: New York