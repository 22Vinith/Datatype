// In JavaScript, classes are a blueprint for creating objects. They are a template for defining objects' structure, behavior, and how they interact. JavaScript classes were introduced in ES6 (ECMAScript 2015) and provide a more clear and straightforward way to create objects compared to traditional function constructors and prototypes.

// Class Structure in JavaScript
// Class Declaration: You define a class using the class keyword.
// Constructor: The constructor method is a special method for creating and initializing an object created with a class.
// Methods: You can define methods inside a class that describe behaviors of the object.
// Simple Example of a JavaScript Class

// Defining a class
class Person {
  // Constructor method to initialize the object
  constructor(name, age) {
    this.name = name;  // "this" refers to the current object instance
    this.age = age;
  }

  // Method to describe the person
  describe() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of the class
let person1 = new Person("John", 25);

// Calling the method on the object
person1.describe();  // Output: My name is John and I am 25 years old.