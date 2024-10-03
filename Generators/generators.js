// JavaScript generators provide a way to define iterators using the function* syntax.
// Unlike normal functions, they can pause execution and resume later, 
//enabling lazy evaluation or handling asynchronous tasks.

// Key Concepts:
// function*: Declares a generator function.
// yield: Pauses the function and returns a value.
// .next(): Resumes execution from where it was paused and can optionally pass a value back into the generator.


// Basic Generator
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen1 = simpleGenerator();

console.log(gen1.next().value); // Output: 1
console.log(gen1.next().value); // Output: 2
console.log(gen1.next().value); // Output: 3
console.log(gen1.next().value); // Output: undefined (generator is done)
// In this example:
// yield pauses the generator and returns the values 1, 2, and 3.
// Each call to next() resumes the generator where it left off.

//----------------------------------------------------------------------------------------------------

// Generator with Arguments
// You can pass values back into the generator using next().
function* askInput() {
  const name = yield "What is your name?";
  const age = yield `Hello ${name}, how old are you?`;
  yield `Wow, ${age} is a great age!`;
}

const gen2 = askInput();

console.log(gen2.next().value);           // Output: What is your name?
console.log(gen2.next("John").value);     // Output: Hello John, how old are you?
console.log(gen2.next(25).value);         // Output: Wow, 25 is a great age!
// Here, the next() method not only resumes the generator but also passes values ("John" and 25) into it.

//---------------------------------------------------------------------------------------------------------------

// Delegating Generators (yield*)
// You can delegate execution to another generator using yield*.

function* subGenerator() {
  yield "Sub 1";
  yield "Sub 2";
}

function* mainGenerator() {
  yield "Main 1";
  yield* subGenerator();  // Delegates to subGenerator
  yield "Main 2";
}

const gen = mainGenerator();

console.log(gen.next().value); // Output: Main 1
console.log(gen.next().value); // Output: Sub 1
console.log(gen.next().value); // Output: Sub 2
console.log(gen.next().value); // Output: Main 2