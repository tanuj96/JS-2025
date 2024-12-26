

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

(function square(num){
    console.log(num * num)
})(6);