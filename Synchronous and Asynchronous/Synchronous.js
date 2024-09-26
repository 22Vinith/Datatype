// 1. Synchronous JavaScript
// Synchronous code is executed line by line, meaning each operation must complete before the next one starts. If one operation takes a long time, the entire program waits for it to finish, potentially blocking the browser or application.

// Example of Synchronous Code:

console.log("Start");

function syncTask() {
    console.log("Executing a synchronous task...");
}

syncTask();  // This function must complete before the next line runs

console.log("End");
// Output:
// Start
// Executing a synchronous task...
// End
// In this example:
// The syncTask() function runs synchronously, and the program waits for it to finish before proceeding to the next statement (console.log("End")).