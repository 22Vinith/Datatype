// ES5 does not support native modularity, and modules are added as an important part of ES6. 
// The function of the module is mainly composed of export and import. Each module has its own scope. 
// The mutual calling relationship between modules is to specify the exposed interfaces of modules through export,
//  and to reference the interfaces provided by other modules through import. At the same time, 
//  it also creates a namespace for the module to prevent function naming conflicts.

// 1.export

// //Derived variables
// export var name = 'Rainbow'
 
// var name = 'Rainbow';
// var age = '24';
// export {name, age};
 
 
// //Derived constant
// export const sqrt = Math.sqrt;
 
// //derived function
// export function myModule(someArg) {
//   return someArg;


//  1.2 import
// import {myModule} from 'myModule';//Structure assignment is used
// import {name,age} from h.js