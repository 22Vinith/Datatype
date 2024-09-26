// 3. Async/Await in JavaScript
// async and await are modern syntax built on top of promises to write asynchronous code that looks synchronous, making it easier to read and manage.

// async: Declares an asynchronous function.
// await: Pauses the execution of the function until the promise is resolved or rejected.
// Example of Async/Await:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data fetched");
      resolve();  // The operation is successful, call `resolve`
    }, 2000);
  });
}

async function processData() {
  console.log("Start");
  await fetchData();  // Wait for `fetchData` to resolve
  console.log("Processing data");
  console.log("End");
}

processData();

// Output:
// Start
// Data fetched
// Processing data
// End

// In this example:
// The async function processData waits for fetchData to resolve using await.
// The code after await is executed only after the promise is resolved, making it appear as if it’s synchronous but without blocking the execution.