"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

 // function sayHello(name) {
 //   return "Hello " + name;
 // }
 // console.log(sayHello("Codeup"));


/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */


 // var helloMessage = function sayHello(myNameIs) {
 //   return "Hello " + myNameIs;
 // }
 // console.log(helloMessage);
 // console.log(helloMessage("Hunter"));


// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */



// var number = Math.floor(Math.random()* 239042039042) + 50;
//  function isOdd(number) {
//     return (number % 2 ==0) ? (number + ' is even!') : (number + ' is odd!');
// } console.log(isOdd(number));




/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */
var bill;
var percentage;


do {
  bill = prompt("What's the total bill?");
} while (isNaN(bill));
do {
  percentage = prompt("What's the tip percentage?");
} while (isNaN(percentage));

function calculateTip(percentage, bill) {
    var toDecimal = (percentage * .01);
    var tipAmt = (parseFloat(toDecimal)) * (parseFloat(bill));
    return(tipAmt.toFixed(2));
    // return tipAmt;
 }
 alert("You should tip $" +(calculateTip(percentage, bill))+".");
/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip*/

 // do {
 //      number = prompt("Please enter a number between 1 and 10.");
 //  }   while (isNaN(number) || number < 1 || number > 10);
 //
 //      for (var i = 1; i <= 10; i++) {
 //        product = number * i;
 //        console.log(number + "X" + i + "=" + product);
 //    }
