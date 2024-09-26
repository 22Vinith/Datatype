// 2. Asynchronous JavaScript
// Asynchronous code allows certain tasks to be executed in the background, without blocking the main thread. This is especially useful for tasks like API calls, timers, or file reading, where you don't want the entire program to wait for the task to complete.

// Asynchronous operations don't stop the program from running. Instead, they are handled in the background, and once completed, a callback function (or a promise) is invoked to resume the process.

// Example of Asynchronous Code:

console.log("Start");

setTimeout(() => {
    console.log("Executing an asynchronous task...");
}, 2000);  // Asynchronous function with a 2-second delay

console.log("End");

// Output:
// Start
// End
// Executing an asynchronous task...

// In this example:
// The setTimeout() function is asynchronous. It schedules the task (printing "Executing an asynchronous task...") to run after 2 seconds.
// Meanwhile, the code continues to run, printing "End" before the timeout function completes.