// 1. length
// Returns the length (number of characters) in the string.


let str1 = "Hello";
console.log(str1.length);  // Output: 5
// 2. charAt()
// Returns the character at a specified index in a string.


let str2 = "Hello";
console.log(str2.charAt(1));  // Output: "e"
// 3. toUpperCase()
// Converts all characters in a string to uppercase.


let str3 = "hello";
console.log(str3.toUpperCase());  // Output: "HELLO"
// 4. toLowerCase()
// Converts all characters in a string to lowercase.


let str4 = "HELLO";
console.log(str4.toLowerCase());  // Output: "hello"
// 5. includes()
// Determines whether a string contains a specified substring. Returns true or false.


let str5 = "Hello, world!";
console.log(str5.includes("world"));  // Output: true
// 6. indexOf()
// Returns the index of the first occurrence of a specified value. Returns -1 if the value is not found.


let str6 = "Hello, world!";
console.log(str6.indexOf("world"));  // Output: 7
// 7. slice()
// Extracts a portion of a string and returns it as a new string without modifying the original.


let str7 = "Hello, world!";
console.log(str7.slice(0, 5));  // Output: "Hello"
// 8. substring()
// Similar to slice(), but doesn't accept negative indices. Returns a portion of the string between two indices.


let str8 = "Hello, world!";
console.log(str8.substring(0, 5));  // Output: "Hello"
// 9. replace()
// Replaces the first occurrence of a specified value with another value.


let str9 = "Hello, world!";
let newStra = str9.replace("world", "Earth");
console.log(newStr);  // Output: "Hello, Earth!"
// 10. replaceAll()
// Replaces all occurrences of a specified value with another value.


let str0 = "Hello, world! Hello, world!";
let newStr = str0.replaceAll("world", "Earth");
console.log(newStr);  // Output: "Hello, Earth! Hello, Earth!"
// 11. trim()
// Removes whitespace from both ends of a string.


let str66 = "  Hello, world!  ";
console.log(str66.trim());  // Output: "Hello, world!"
// 12. split()
// Splits a string into an array of substrings based on a specified delimiter.


let str44 = "apple,banana,orange";
let fruits = str44.split(",");
console.log(fruits);  // Output: ["apple", "banana", "orange"]
// 13. concat()
// Concatenates two or more strings and returns a new string.


let str11 = "Hello";
let str22 = "World";
let result = str11.concat(", ", str22, "!");
console.log(result);  // Output: "Hello, World!"
// 14. repeat()
// Repeats the string a specified number of times.


let strr = "Hello";
console.log(strr.repeat(3));  // Output: "HelloHelloHello"
// 15. startsWith()
// Checks if the string starts with a specified substring. Returns true or false.


let strv = "Hello, world!";
console.log(strv.startsWith("Hello"));  // Output: true
// 16. endsWith()
// Checks if the string ends with a specified substring. Returns true or false.


let strrr = "Hello, world!";
console.log(strrr.endsWith("world!"));  // Output: true
// 17. padStart()
// Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. Pads from the start.


let strb = "5";
console.log(strb.padStart(3, "0"));  // Output: "005"
// 18. padEnd()
// Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. Pads from the end.


let strs = "5";
console.log(strs.padEnd(3, "0"));  // Output: "500"
