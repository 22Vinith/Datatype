// In JavaScript, Promises offer several utility methods like Promise.all(), Promise.allSettled(), Promise.any(), and Promise.race(). These methods allow you to work with multiple Promises concurrently and handle their results in different ways.

// 1. Promise.all()
// Promise.all() takes an array of Promises and resolves only when all of the Promises are fulfilled or rejects if any one of the Promises is rejected.
// It returns an array of results from the fulfilled Promises.

// Example:
const promise13 = Promise.resolve(10);
const promise23 = Promise.resolve(20);
const promise34 = Promise.resolve(30);

Promise.all([promise13, promise23, promise34])
  .then(results => {
    console.log(results); // Output: [10, 20, 30]
  })
  .catch(error => {
    console.error(error); // Will run if any promise is rejected
  });

// If any one of the Promises in the array rejects, Promise.all() will immediately reject with that error.

// Example with rejection:
const promise19 = Promise.resolve(10);
const promise29 = Promise.reject('Failed');
const promise39 = Promise.resolve(30);

Promise.all([promise19, promise29, promise39])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error(error); // Output: Failed
  });
  //-------------------------------------------------------------------------------------------------------------
// 2. Promise.allSettled()
// Promise.allSettled() waits for all Promises to settle, meaning either they are fulfilled or rejected.
// It returns an array of objects with the status (fulfilled or rejected) and value (or reason) for each Promise.

// Example:
const promise10 = Promise.resolve(10);
const promise20 = Promise.reject('Error occurred');
const promise30 = Promise.resolve(30);

Promise.allSettled([promise10, promise20, promise30])
  .then(results => {
    console.log(results);
    // Output:
    // [
    //   { status: 'fulfilled', value: 10 },
    //   { status: 'rejected', reason: 'Error occurred' },
    //   { status: 'fulfilled', value: 30 }
    // ]
  });

// Here, all Promises are processed, and you get the result for each, regardless of whether it fulfilled or rejected.
//----------------------------------------------------------------------------------------------------------------
// 3. Promise.any()
// Promise.any() takes an array of Promises and resolves as soon as any of the Promises is fulfilled.
// If all Promises are rejected, it will return an AggregateError containing all rejection reasons.

// Example:
const promise1 = Promise.reject('Error 1');
const promise2 = Promise.reject('Error 2');
const promise3 = Promise.resolve(30);

Promise.any([promise1, promise2, promise3])
  .then(result => {
    console.log(result); // Output: 30
  })
  .catch(error => {
    console.error(error);
  });
// If all Promises reject:

const promise12 = Promise.reject('Error 1');
const promise21 = Promise.reject('Error 2');

Promise.any([promise12, promise22])
  .catch(error => {
    console.log(error.errors); // Output: ['Error 1', 'Error 2']
  });
  //-------------------------------------------------------------------------------------------------------------------
// 4. Promise.race()
// Promise.race() returns a Promise that settles as soon as any of the input Promises settles,
// whether it is fulfilled or rejected.

// Example:
const promise11 = new Promise(resolve => setTimeout(() => resolve('Resolved after 1 second'), 1000));
const promise22 = new Promise(resolve => setTimeout(() => resolve('Resolved after 2 seconds'), 2000));

Promise.race([promise11, promise22])
  .then(result => {
    console.log(result); // Output: Resolved after 1 second
  })
  .catch(error => {
    console.error(error);
  });

// Example with rejection:
const promise111 = new Promise((resolve, reject) => setTimeout(() => reject('Rejected after 1 second'), 1000));
const promise222 = new Promise(resolve => setTimeout(() => resolve('Resolved after 2 seconds'), 2000));

Promise.race([promise111, promise222])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error); // Output: Rejected after 1 second
  });

// Summary:
// Promise.all(): Resolves when all Promises are fulfilled, or rejects if any Promise rejects.
// Promise.allSettled(): Resolves when all Promises have settled (either fulfilled or rejected).
// Promise.any(): Resolves as soon as any Promise fulfills; rejects if all Promises reject.
// Promise.race(): Resolves or rejects as soon as any Promise settles (fulfills or rejects).