// In JavaScript, async and await are used to handle asynchronous operations more conveniently, making the code easier to read and maintain compared to using plain Promises or callbacks.

// Understanding async and await:
// async: A function declared with the async keyword automatically returns a Promise. Within this function, you can use the await keyword.

// await: This keyword is used to pause the execution of an async function until the Promise is resolved or rejected. It can only be used inside functions declared with async.

// Basic Syntax:
async function myAsyncFunction() {
  // Use await to pause until the Promise resolves
  let result = await someAsyncOperation();
  return result;
}

// Simple Example of async and await:
// Let's create a simple example that simulates fetching data from an API using a Promise.

// Function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000); // Simulates a 2-second delay
  });
}

// Async function that uses await to handle the Promise
async function getData() {
  console.log("Fetching data...");
  
  try {
    let data = await fetchData(); // Wait for the Promise to resolve
    console.log(data); // Output: Data received!
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function
getData();