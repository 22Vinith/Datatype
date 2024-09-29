// Object.values()

// Description: This method returns an array of a given object's own enumerable property values.

// Syntax:
// Object.values(obj)

// Example:
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer"
};

let values = Object.values(person);
console.log(values); // Output: ["Alice", 30, "Engineer"]