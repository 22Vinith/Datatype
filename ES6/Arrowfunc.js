// Arrow function
// This is one of the most exciting features of ES6. =>It's not just a shorthand for the keyword function, it brings other benefits. Arrow function shares the same this with the surrounding code, which can help you to solve the problem of this pointing. Experienced JavaScript developers are familiar with patterns such as var self = this; or var that = this that refer to peripheral this. But with = > this mode is not needed.

// 1.2.1 structure of arrow function
// Arrow function's arrow = > before is an empty bracket, a single parameter name, or multiple parameter names enclosed in brackets, and after the arrow can be an expression (as the return value of the function), or the function body enclosed in curly brackets (you need to return the value by yourself, otherwise it is undefined).

// Examples of arrow functions
// ()=>1
// v=>v+1
// (a,b)=>a+b
// ()=>{
//     alert("foo");
// }
// e=>{
//     if (e == 0){
//         return 0;
//     }
//     return 1000/e;