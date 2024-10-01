// In JavaScript, every object has a hidden internal property known as [[Prototype]], which refers to another object, commonly referred to as the prototype. The prototype serves as a mechanism through which objects can inherit properties and methods from other objects.

// When a property or method is not found directly on an object, JavaScript checks the object's prototype chain, which is a series of linked prototypes, to see if it can find the property or method there.

// Example 1: Simple Prototypes
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person("Alice", 30);
alice.greet();  // Output: Hello, my name is Alice and I am 30 years old.

// Explanation:
// Person is a constructor function that creates Person objects.
// The greet method is defined on Person.prototype, so all instances of Person inherit this method.
// When alice.greet() is called, JavaScript first checks if greet exists on alice. Since it doesn’t, 
// it checks alice's prototype (Person.prototype) and finds the method there.

// Example 2: Modifying Prototypes
function Dog(breed) {
  this.breed = breed;
}

Dog.prototype.bark = function() {
  console.log("Woof! Woof!");
};

const myDog = new Dog("Golden Retriever");
myDog.bark();  // Output: Woof! Woof!

Dog.prototype.bark = function() {
  console.log("Bark! Bark!");
};

myDog.bark();  // Output: Bark! Bark!

Explanation:
// The bark method is defined on the Dog.prototype.
// Later, we modify Dog.prototype.bark, and this change is reflected in all instances of Dog, including myDog.


// Example 4: Checking Prototypes
// You can check an object's prototype using the Object.getPrototypeOf() method or the __proto__ property.


const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype);  // Output: true

const arr = [];
console.log(arr.__proto__ === Array.prototype);  // Output: true

// Explanation:
// Object.getPrototypeOf() is used to get the prototype of an object.
// __proto__ is another way to access the prototype, but it's generally discouraged in favor of Object.getPrototypeOf() for modern code.