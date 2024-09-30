// In JavaScript, the memory allocation process is similar whether you're dealing with synchronous or asynchronous code. However, the way memory is managed and released can differ, particularly in terms of how long memory is retained and when it's cleaned up by the Garbage Collector.

// Let’s break this down with respect to synchronous and asynchronous operations:

// Memory Allocation in Synchronous Code
// In synchronous code, operations are executed one after the other, and memory is allocated and deallocated as soon as the execution of the current task completes.

// Key Points:
// Memory allocation happens immediately: As soon as a variable, object, or function is declared, memory is allocated for it (in the stack for primitives and in the heap for objects and functions).
// Memory is released (deallocated) once a task is complete: 
//When synchronous tasks complete and variables go out of scope, memory is released (except in cases of closure where the variable may still be referenced).

// Example:
function syncTask() {
  let num = 10;            // Stack memory allocation for the number
  let obj = { name: "JS" }; // Heap memory allocation for the object
  return obj;
}

syncTask();  // After this function executes, memory for `num` is deallocated

// Memory Behavior:
// The number num is stored in the stack, and it will be cleared after the function execution.
// The object { name: "JS" } is allocated in the heap. Memory for it will only be cleared when it's no longer referenced.
// Memory Allocation in Asynchronous Code
// In asynchronous code, operations like callbacks, promises, or async/await are scheduled to run after the main thread has completed other tasks. Since JavaScript is single-threaded, asynchronous tasks are handled differently in terms of memory:

// Key Points:
// Asynchronous tasks are moved to the Web API or task queue: When you make an asynchronous request (like setTimeout or a network request), memory for the associated callback or promise is allocated, but the execution is deferred until the task completes.
// Memory retention for callbacks and promises: Since asynchronous tasks don’t complete immediately, the associated variables and functions may need to stay in memory longer, until the event loop returns to process them.
// Garbage Collection happens after callbacks are executed: Once the asynchronous operation finishes and the callback is invoked, memory can be released.
// Example with setTimeout:
function asyncTask() {
  let num = 10;               // Stack memory allocation for the number
  let obj = { name: "JS" };    // Heap memory allocation for the object

  setTimeout(() => {
    console.log(obj.name);     // The callback retains memory for `obj`
  }, 1000);  // Asynchronous timer
}

asyncTask();  // The callback is stored for future execution

// Memory Behavior:
// The number num is cleared once the function finishes.
// The object { name: "JS" } must stay in memory until the callback (inside setTimeout) is executed because the callback still references it.
// Once the setTimeout callback is executed, the reference to obj is no longer needed, and it will be marked for garbage collection.
// Memory Allocation with Promises and async/await
// Promises and async/await are also asynchronous, but they provide a cleaner way to manage asynchronous flow. Like with setTimeout, promises create deferred actions that hold memory until the action is completed.

// Example with Promises:
function fetchData() {
  let data = { name: "Async JS" }; // Allocated in heap
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

fetchData().then(result => {
  console.log(result);  // Callback accesses the `data` object
});
// Memory Behavior:

// The object data is allocated in the heap.
// The memory for the promise and its callbacks is retained until the asynchronous operation (timer) completes and the .then callback is executed.
// Once the promise resolves and the callback finishes, the memory associated with the promise and data is marked for garbage collection.
// Example with async/await:
async function asyncFunction() {
  let data = { name: "Awaited Data" }; // Allocated in heap
  let result = await fetchData();       // Memory retained until fetch completes
  console.log(result);
}
asyncFunction();

// The object data is retained in memory until the await operation completes and the function finishes execution.
// Memory used by the promise and result is freed after the function completes and is no longer referenced.