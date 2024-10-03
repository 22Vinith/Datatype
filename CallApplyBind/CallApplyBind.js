// In JavaScript, call(), apply(), and bind() are methods that allow you to explicitly set the value of this inside a function. They are commonly used when you want to control the context in which a function is executed.

// 1. call() Method
// call() invokes a function with a specific this context and arguments passed individually.

// Syntax:
// function.call(thisArg, arg1, arg2, ...)

// Example:
const person1 = {
  name: 'Alice',
};

const person2 = {
  name: 'Bob',
};

function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

greet.call(person1, 'Hello'); // Output: Hello, my name is Alice
greet.call(person2, 'Hi');    // Output: Hi, my name is Bob
// In this example, call() sets this to person1 or person2 and passes arguments ('Hello', 'Hi').
//--------------------------------------------------------------------------------------------------------------------

// 2. apply() Method
// apply() is similar to call(), but it passes arguments as an array rather than individually.

// Syntax:
// function.apply(thisArg, [arg1, arg2, ...])

// Example:
const person3 = {
  name: 'Charlie',
};

const person4 = {
  name: 'David',
};

function introduce(greeting, age) {
  console.log(`${greeting}, my name is ${this.name} and I am ${age} years old.`);
}

introduce.apply(person3, ['Hey', 25]);  // Output: Hey, my name is Charlie and I am 25 years old.
introduce.apply(person4, ['Hello', 30]); // Output: Hello, my name is David and I am 30 years old.
// Here, apply() allows us to pass the arguments as an array (['Hey', 25]), 
//making it useful when you have arguments in an array format.
//----------------------------------------------------------------------------------------------------------------

// 3. bind() Method
// bind() returns a new function with a specific this value and optional arguments pre-set. 
// Unlike call() and apply(), bind() does not immediately execute the function. 
//Instead, it returns a new function that can be executed later.
// Syntax:
// function.bind(thisArg[, arg1[, arg2[, ...]]])

// Example:
const person5 = {
  name: 'Eve',
};
function sayHello() {
  console.log(`Hello, my name is ${this.name}`);
}
const boundSayHello = sayHello.bind(person5);
boundSayHello(); // Output: Hello, my name is Eve

// In this case, bind() creates a new function where this is permanently set to person5. The function can be called later, and it will remember the this context.

// Example with Partial Application:
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2); // The first argument (a) is set to 2
console.log(double(5)); // Output: 10 (2 * 5)