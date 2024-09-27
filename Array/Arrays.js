// 1. push()
// Adds one or more elements to the end of an array and returns the new length of the array.
let arr1 = [1, 2, 3];
arr1.push(4);  // arr becomes [1, 2, 3, 4]

// 2. pop()
// Removes the last element from an array and returns that element.
let arr2 = [1, 2, 3];
let last = arr2.pop();  // arr becomes [1, 2], last is 3

// 3. shift()
// Removes the first element from an array and returns it.
let arr3 = [1, 2, 3];
let first = arr3.shift();  // arr becomes [2, 3], first is 1
// 4. unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
let arr4 = [2, 3];
arr4.unshift(1);  // arr becomes [1, 2, 3]

// 5. concat()
// Merges two or more arrays and returns a new array.
let arr11 = [1, 2];
let arr22 = [3, 4];
let merged = arr11.concat(arr22);  // merged is [1, 2, 3, 4]

// 6. slice()
// Returns a shallow copy of a portion of an array into a new array. You specify the start and end indices.
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(1, 3);  // sliced is [2, 3]

// 7. splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 2, 9, 10);  // arr becomes [1, 2, 9, 10, 5]
// First parameter: Start index
// Second parameter: Number of elements to remove
// Third and further parameters: Elements to add

// 8. indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let arr7 = [1, 2, 3];
let indexy = arr7.indexOf(2);  // index is 1

// 9. includes()
// Determines whether an array contains a certain element, returning true or false.
let arr8 = [1, 2, 3];
let foundt = arr8.includes(2);  // found is true

// 10. forEach()
// Executes a provided function once for each array element.
let arr9 = [1, 2, 3];
arr9.forEach((element) => {
  console.log(element);  // Outputs 1, 2, and 3
});

// 11. map()
// Creates a new array with the results of calling a provided function on every element in the calling array.
let arr111 = [1, 2, 3];
let doubled = arr111.map(x => x * 2);  // doubled is [2, 4, 6]

// 12. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let arr90 = [1, 2, 3, 4];
let even = arr90.filter(x => x % 2 === 0);  // even is [2, 4]

// 13. reduce()
// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let arr43 = [1, 2, 3, 4];
let sum = arr43.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  // sum is 10

// 14. find()
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
let arr33 = [1, 2, 3, 4];
let found = arr33.find(x => x > 2);  // found is 3

// 15. findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
let arr44 = [1, 2, 3, 4];
let index = arr44.findIndex(x => x > 2);  // index is 2

// 16. sort()
// Sorts the elements of an array in place and returns the array. By default, the sort is lexicographical (i.e., elements are converted to strings and compared).
let arr23 = [3, 1, 4, 1, 2];
arr23.sort();  // arr becomes [1, 1, 2, 3, 4]
// For numerical sorting, you should provide a compare function:
arr23.sort((a, b) => a - b);  // arr becomes [1, 1, 2, 3, 4]

// 17. reverse()
// Reverses the array in place.
let ar = [1, 2, 3];
ar.reverse();  // arr becomes [3, 2, 1]

// 18. join()
// Joins all elements of an array into a string, with an optional separator.
let a = [1, 2, 3];
let joined = a.join('-');  // joined is "1-2-3"

// 19. every()
// Tests whether all elements in the array pass the test implemented by the provided function. Returns true or false.
let arrr = [1, 2, 3];
let allGreaterThanZero = arrr.every(x => x > 0);  // true

// 20. some()
// Tests whether at least one element in the array passes the test implemented by the provided function. Returns true or false.
let arrrr = [1, 2, 3];
let hasNegative = arrrr.some(x => x < 0);  // false

// 21. fill()
// Fills all the elements in an array with a static value.
let arrw = [1, 2, 3];
arrw.fill(0);  // arr becomes [0, 0, 0]

// 22. flat()
// Flattens nested arrays into a single array to the specified depth.
let arrq = [1, [2, [3, 4]]];
let flatArr = arrq.flat(2);  // flatArr is [1, 2, 3, 4]

// 23. flatMap()
// Maps each element using a mapping function and flattens the result into a new array.
let arrp = [1, 2, 3];
let flatMapped = arrp.flatMap(x => [x, x * 2]);  // flatMapped is [1, 2, 2, 4, 3, 6]