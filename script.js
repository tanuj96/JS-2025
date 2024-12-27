//Functions in JS

//1. Function Declaration or Function Defination or Function Statement

// function sqaure(num){
//     return num * num;
// }

//-------------------------------------------------------------------------------

//2. Function Expression

// const square = function(num){  // here this function... is called anonymous function
//     return num * num;
// }

//-------------------------------------------------------------------------------

//3. First Class Functions

// -> functions can be used as variables like passed or returned from another function

// function sqaure(num){
//     return num * num;
// }

// function displaySquare(fn){
//     console.log("Square is "+fn(5));
// }

// displaySquare(sqaure);

//-------------------------------------------------------------------------------

//4. IIFE (immediately invoked function expressions)

// (function square(num){
//     console.log(num * num)
// })(6);

//-------------------------------------------------------------------------------

//5. IIFE O/P Based Question

// (function (x){
//     return (function (y){
//         console.log(x);  // 1 bcoz of closure
//     })(2);
// })(1);

//-------------------------------------------------------------------------------

//6. Function Scope

// // The following variables are defined in the global scope
// var num1 = 20;
//  num2 = 3;
//  name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// // A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // "Chamakh scored 5"

//-------------------------------------------------------------------------------

//7. Function Scope O/P Based Question

// for (let i = 0; i < 5; i++) {
//     setTimeout(function (){
//         console.log(i); // 0 1 2 3 4
//     },i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//     setTimeout(function (){
//         console.log(i); // 5 5 5 5 5
//     },i * 1000);
// }

//-------------------------------------------------------------------------------

//8. Function Hoisting

// functionName(); // Hello There!
// console.log(x); // undefined

// function functionName() {
//   console.log("Hello There!");
// }

// var x = 6;

//-------------------------------------------------------------------------------

//9. Hoisting O/P Question

// var x = 21;

// var fun = function () {
//   console.log(x);
//   var x = 20;
// };

// fun();

//-------------------------------------------------------------------------------

//9. Params vs Arguments

// function square(num){ // Params
//     console.log(num * num);
// }

// square(5); // Arguments

//-------------------------------------------------------------------------------

//10. Spread and Rest

// function square(...num) { // rest operator (rest operator should always be last parameter)
//   console.log(num[0] * num[1]);
// }

// var arr = [5, 6];
// square(...arr);  // spread operator

//-------------------------------------------------------------------------------

//11. Callback functions
   // A function which is passed as argument to another functions
document.addEventListener("click", function(params){

})














