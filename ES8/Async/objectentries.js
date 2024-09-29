// Object.entries()

// Description: This method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

Syntax:
Object.entries(obj)

Example:
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer"
};

let entries = Object.entries(person);
console.log(entries); 
// Output: [
//   ["name", "Alice"],
//   ["age", 30],
//   ["profession", "Engineer"]
// ]