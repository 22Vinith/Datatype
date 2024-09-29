// In JavaScript, the finally() method is a part of the Promise API that allows you to execute a piece of code after a Promise has been settled (either resolved or rejected). This can be useful for cleanup actions, such as stopping loading indicators or resetting application state, regardless of the outcome of the Promise.

// Syntax:
// promise.finally(onFinally)

// onFinally: A function to execute when the Promise is settled. This function does not receive any arguments.
// Key Points:
// The finally() method returns a Promise and does not alter the result or rejection value of the original Promise.
// It is executed after the Promise is settled, allowing you to perform any final actions.

// Simple Example:
// Here’s a straightforward example demonstrating the use of finally() with a Promise.

// Example Code:
// Simulate an asynchronous operation
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Randomly resolve or reject
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); // Simulate 2 seconds delay
  });
}

// Using the fetchData function with Promise
fetchData()
  .then(result => {
    console.log(result); // Output on success
  })
  .catch(error => {
    console.error(error); // Output on failure
  })
  .finally(() => {
    console.log("Cleanup or final actions here."); // Always executes
  });