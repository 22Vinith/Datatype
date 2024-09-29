// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner way to work with asynchronous code, avoiding "callback hell" by allowing you to chain operations instead of nesting them.

// States of a Promise:
// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise has a resolved value.
// Rejected: The operation failed, and the promise has a reason for failure.

// Basic Syntax of a Promise:
let promise = new Promise(function(resolve, reject) {
  // Asynchronous operation goes here
  // Call resolve() if the operation is successful
  // Call reject() if the operation fails
});

// resolve(value): Marks the promise as fulfilled and passes the value.
// reject(reason): Marks the promise as rejected and passes the reason.
// Simple Example of a Promise:

// Create a new Promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;  // Simulate an operation (e.g., an API call)

  if (success) {
    resolve("Operation successful!");  // If successful, resolve the promise
  } else {
    reject("Operation failed.");  // If unsuccessful, reject the promise
  }
});

// Handling the resolved and rejected states using .then() and .catch()
myPromise
  .then((message) => {
    console.log(message);  // Output: Operation successful! (if resolved)
  })
  .catch((error) => {
    console.log(error);  // Output: Operation failed. (if rejected)
  });