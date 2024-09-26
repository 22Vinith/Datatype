// 1. Callback in JavaScript
// A callback is a function passed as an argument to another function and is executed once an asynchronous operation completes. It’s the traditional way of handling asynchronous tasks in JavaScript.

//Example of Callback:

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();  // Call the callback once the task is complete
  }, 2000);
}

function processData() {
  console.log("Processing data");
}

console.log("Start");
fetchData(processData);  // Pass `processData` as a callback
console.log("End");

// Output:
// Start
// End
// Data fetched
// Processing data

// In this example:
//fetchData simulates an asynchronous operation with a setTimeout. 
//After 2 seconds, it fetches data and then calls the processData function as a callback.