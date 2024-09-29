// In JavaScript, default parameters allow you to assign default values to function parameters if no value is provided when the function is invoked. This is helpful in cases where you want to ensure that a parameter has a value even if the caller omits it.

// Syntax:
// You can define a default parameter by assigning a value directly in the function definition.


function functionName(parameter = defaultValue) {
  // Function body
}
// Simple Example of Default Parameters:

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("John");  // Output: Hello, John!
greet();        // Output: Hello, Guest!
// Explanation:
// In the function greet(name = "Guest"), if no argument is passed when the function is called, the parameter name defaults to "Guest".
// When greet("John") is called, the value "John" is passed, so the output is Hello, John!.
// When greet() is called without any arguments, the default value "Guest" is used, and the output is Hello, Guest!.

// Another Example with Multiple Default Parameters:
function calculatePrice(price, tax = 0.1, discount = 0) {
  return price + price * tax - discount;
}

console.log(calculatePrice(100));           // Output: 110 (10% tax, no discount)
console.log(calculatePrice(100, 0.2));      // Output: 120 (20% tax, no discount)
console.log(calculatePrice(100, 0.2, 10));  // Output: 110 (20% tax, $10 discount)

// Explanation:
// The function calculatePrice(price, tax = 0.1, discount = 0) calculates the final price based on tax and discount.
// If no tax or discount values are passed, it defaults to 0.1 (10%) for tax and 0 for discount.