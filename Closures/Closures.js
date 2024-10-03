// A closure in JavaScript is a function that retains access to variables from its outer (enclosing) function, even after the outer function has finished executing. This allows the inner function to "remember" the context in which it was created.

// Here's a simple example:

// Example 1: Basic Closure

function outer() {
  let outerVariable = "I'm from outer!";

  function inner() {
    console.log(outerVariable); 
   // Accessing variable from outer function
  }

  return inner;  // Returning the inner function
}

const closureFunc = outer();  // Execute outer, returns inner function
closureFunc();  // Executes inner and logs "I'm from outer!"

// Explanation:
// The outer function creates a local variable outerVariable.
// The inner function accesses this variable, even though it is not within its own scope.
// The outer function returns inner, which forms the closure.
// When we call closureFunc(), it still remembers the value of outerVariable from the outer function.

// Example 2: Closure with Parameters
function multiplier(factor) {
  return function(num) {
    return num * factor;  // num is from the inner scope, factor is from the outer scope
  };
}

const double = multiplier(2);  // Creates a closure where factor is 2
console.log(double(5));  // Output: 10