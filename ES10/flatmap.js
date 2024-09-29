// flatMap()
// flatMap(callback(currentValue, index, array), thisArg): 
// The method returns a new array created by applying a mapping function to each element of the original array, followed by flattening the result by one level.

var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// Only "flatten" the array returned by the function in flatMap
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]