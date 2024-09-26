// 2. Promises in JavaScript
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It can be in one of three states:

// Pending: The operation is ongoing.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

//Example of Promises:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data fetched");
      resolve();  // The operation is successful, call `resolve`
    }, 2000);
  });
}

console.log("Start");
fetchData()
  .then(() => console.log("Processing data"))  // Handle fulfilled state
  .catch(() => console.log("Error occurred"));  // Handle rejected state
console.log("End");

// Output:
// Start
// End
// Data fetched
// Processing data

// In this example:
// fetchData returns a promise. After 2 seconds, the promise is resolved, and the then() method runs to process the data.
// If an error occurs, the catch() block will handle it.