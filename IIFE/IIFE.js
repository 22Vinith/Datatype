// An IIFE (Immediately Invoked Function Expression) is a function in JavaScript that is executed right after it is defined. The purpose of an IIFE is to create a local scope and avoid polluting the global namespace with variables.

// Here's the general syntax:
(function() {
  // Code inside IIFE
})();
// The function is wrapped in parentheses to make it an expression, and the () at the end immediately invokes it.

// Example 1: Basic IIFE

(function() {
  console.log("IIFE executed immediately!");
})();

// Explanation:
// The function is defined and then immediately invoked. It prints "IIFE executed immediately!" 
//as soon as it is parsed.

// Example 2: IIFE with Parameters
(function(name) {
  console.log("Hello, " + name + "!");
})("John");