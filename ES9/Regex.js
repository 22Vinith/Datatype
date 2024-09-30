// Regular Expressions (Regex) in JavaScript are patterns used to match character combinations in strings. 
//They are useful for tasks like pattern matching, validation, and string replacement.

// Simple Examples of Regex in JavaScript:

// 1. Test if a String Contains a Specific Pattern
// The test() method checks if a string matches the pattern.

// Example: Check if a string contains a digit

let regex = /\d/; // \d matches any digit (0-9)
let str = "Hello123";
console.log(regex.test(str)); // Output: true
// \d: Matches any digit.
// test(): Returns true or false.

// 2. Extract Numbers from a String
// The match() method returns an array of all matched substrings.

// Example: Extract all digits from a string

let regex4 = /\d+/g; // \d+ matches one or more digits, 'g' flag for global match
let str98 = "Order 123, Item 456";
let result = str98.match(regex4);
console.log(result); // Output: ["123", "456"]
// \d+: Matches one or more digits.
// g: Global flag, finds all matches, not just the first one.

// 3. Validate an Email Address
// Example: Simple email validation

let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = "example@test.com";
console.log(emailPattern.test(email)); // Output: true

// ^: Start of the string.
// [a-zA-Z0-9._%+-]+: Matches the username part of the email.
// @: Literal "@" symbol.
// [a-zA-Z0-9.-]+: Matches the domain part.
// \.: Escapes the dot, matches a literal ".".
// [a-zA-Z]{2,}: Matches the domain extension, minimum 2 characters.
// $: End of the string.

// 4. Replace Substrings Using Regex
// The replace() method can replace parts of a string that match a pattern.

// Example: Replace all spaces with dashes

let str43 = "Hello World This Is Regex";
let result12 = str43.replace(/\s/g, '-'); // \s matches whitespace characters
console.log(result12); // Output: "Hello-World-This-Is-Regex"

// \s: Matches any whitespace character (space, tab, etc.).
// g: Global flag to replace all occurrences.

// 5. Check if a String Starts or Ends with a Pattern
// Example: Check if a string starts with "Hello"

let regex6 = /^Hello/;
let str0 = "Hello World";
console.log(regex6.test(str0)); // Output: true
// ^Hello: Matches "Hello" at the start of the string.

// Example: Check if a string ends with "World"

let regex5 = /World$/;
let str8 = "Hello World";
console.log(regex5.test(str8)); // Output: true
// World$: Matches "World" at the end of the string.
// 6. Split a String by Commas or Spaces
// You can use regex with the split() method to divide a string into an array of substrings.

// Example: Split a string by commas or spaces

let regex1 = /[,\s]+/; // Matches commas or spaces
let st4r = "apple, banana orange,grape";
let result1 = st4r.split(regex1);
console.log(result1); // Output: ["apple", "banana", "orange", "grape"]
// [,\s]+: Matches one or more commas or whitespace characters.

// 7. Check if a String Contains Only Letters

// Example: Validate that a string contains only alphabetic characters

let regex2 = /^[a-zA-Z]+$/;
let str1 = "HelloWorld";
console.log(regex2.test(str1)); // Output: true
// ^[a-zA-Z]+$: Matches only letters from the start (^) to the end ($) of the string.
// Summary of Key Regex Symbols:
// ^: Start of string.
// $: End of string.
// \d: Matches any digit.
// \w: Matches any alphanumeric character (word characters).
// \s: Matches any whitespace.
// [abc]: Matches any of the characters a, b, or c.
// +: Matches one or more of the preceding element.
// *: Matches zero or more of the preceding element.
// g: Global flag, finds all matches.
// i: Case-insensitive flag.
// These examples showcase common uses of regex in JavaScript for validation, string manipulation,
// and pattern matching.