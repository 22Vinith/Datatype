// The event loop is a fundamental concept in JavaScript that enables non-blocking, asynchronous operations. It allows JavaScript (which is single-threaded) to perform tasks like handling events, making API requests, timers, and I/O operations efficiently without blocking the execution of the program.

// Key Concepts:
// Single-Threaded: JavaScript executes code in a single thread, meaning it can only perform one operation at a time. Despite this, the event loop helps handle multiple asynchronous tasks without blocking the main thread.

// Call Stack: This is where the function execution context is stored. When a function is invoked, it gets pushed onto the call stack, and when it finishes, it gets popped off.

// Web APIs: Asynchronous tasks like HTTP requests, timers (setTimeout), DOM events, etc., are handled by the browser or Node.js, not directly by JavaScript. These are sent to Web APIs, which run independently.

// Callback Queue (Task Queue): This is where callbacks of completed asynchronous operations are placed once their tasks (e.g., API calls, timers) finish.

// Event Loop: The event loop constantly checks the call stack and the callback queue. If the call stack is empty, the event loop picks tasks from the callback queue and pushes them onto the call stack for execution.

// How the Event Loop Works (Steps)
// JavaScript Execution Starts: JavaScript starts executing code from the top of the script and pushes synchronous tasks (like function calls) to the call stack.

// Handling Asynchronous Tasks:

// When an asynchronous task (like a setTimeout, HTTP request, etc.) is encountered, JavaScript passes it to the Web APIs or Node.js APIs (outside of the main thread) to handle.
// Once the asynchronous task completes, the callback function is sent to the callback queue (also called the task queue).
// Event Loop Checks the Call Stack:

// The event loop continuously checks if the call stack is empty.
// If the stack is empty (i.e., all synchronous code has been executed), the event loop picks up the first callback from the callback queue and pushes it onto the call stack to execute.
// Executing Callbacks:

// The callback functions from the asynchronous tasks are executed one at a time in the call stack.
// This process repeats until all tasks have been handled.
// Simple Example:

console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 1000);

console.log('End');
// Execution Flow:
// 'Start' is printed immediately because it’s a synchronous operation.
// setTimeout is called, but it doesn't block the execution. It sets up a timer for 1 second and passes the callback function to the Web API.
// 'End' is printed right away because JavaScript continues executing synchronous code.
// After 1 second, the Web API moves the setTimeout callback function to the callback queue.
// The event loop checks if the call stack is empty. When it is, the callback from setTimeout is executed, and 'Timeout' is printed.
// Output:
// Start
// End
// Timeout

// Example with Asynchronous HTTP Request:

console.log('1: Start');

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('3: Fetched data:', data);
  });

console.log('2: End');
// Execution Flow:
// '1: Start' is printed.
// fetch() sends an HTTP request asynchronously. The function returns a promise, and the request runs in the background (handled by Web APIs).
// '2: End' is printed since fetch does not block the thread.
// Once the HTTP request completes, the .then callback is pushed to the callback queue.
// The event loop waits for the call stack to be empty, and then the callback from the .then chain is executed, printing the fetched data.
// Output:
// 1: Start
// 2: End
// 3: Fetched data: {...}
// Important Concepts Related to the Event Loop:
// Microtasks Queue: In addition to the task queue (callback queue), there is also a microtask queue, which is used for promises and certain other operations like MutationObserver. Microtasks have higher priority than regular tasks, meaning they are executed before any pending task in the callback queue after the current call stack is empty.

// Examples of Microtasks: Promise callbacks (.then), MutationObserver.
// Macrotasks vs. Microtasks:

// Macrotasks: These include tasks like setTimeout, setInterval, I/O operations, and DOM events.
// Microtasks: These are mostly promises or other smaller operations that are prioritized and executed immediately after the current operation finishes, before moving on to the next macrotask.

// Example with Microtasks (Promise):
console.log('1: Start');

setTimeout(() => {
  console.log('4: Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise');
});

console.log('2: End');
// Execution Flow:
// '1: Start' is printed.
// setTimeout is called with a 0ms delay, which moves its callback to the macrotask queue.
// The promise resolves and its .then callback is placed in the microtask queue.
// '2: End' is printed because the synchronous code is still being executed.
// The event loop checks the microtask queue first, so '3: Promise' is printed next.
// Finally, the callback from the setTimeout (macrotask) is executed, and '4: Timeout' is printed.

// Output:
// 1: Start
// 2: End
// 3: Promise
// 4: Timeout

// Summary:
// The event loop allows JavaScript to handle asynchronous operations while maintaining its single-threaded nature.
// JavaScript uses the call stack for synchronous code and the callback queue for asynchronous tasks.
// The event loop checks if the call stack is empty and, if so, processes tasks from the callback queue.
// Promises (microtasks) have higher priority than regular callbacks (macrotasks) in the event loop, ensuring they are processed as soon as possible after the current synchronous code.
// Understanding the event loop is key to mastering asynchronous programming in JavaScript.