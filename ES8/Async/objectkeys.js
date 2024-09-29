// Object.keys()

// Description: This method returns an array of a given object's own enumerable property names (keys).
// Syntax:
// Object.keys(obj)

Example:
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer"
};

let keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "profession"]