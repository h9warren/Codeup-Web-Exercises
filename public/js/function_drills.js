// Write a function called `identity(input)` that takes in an argument called input and returns that input.
function identity(input){
  return input;
}
  console.log(identity(1));


// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call.
function getRandomNumber(min, max){
  var min;
  var max;
  return Math.floor(Math.random() * max) + min;
}
  console.log(getRandomNumber(1, 100));


// Write a function called `first(input)` that returns the first character in the provided string.
function first(input) {
  return input.charAt(1);
}
  console.log(first('Pepperoni'));


// Write a function called `rest(input)` that returns everything but the first character of a string.
// function last(input) {
//   var lastChar = input.length-1;
//   return input.charAt(lastChar);
// }
//   console.log(last('Margarita Time'));

  function rest(input) {
    var string = input;
    var last = string.length;
    var rest = string.slice(1, last);
    return rest;
  }
  console.log(rest('Margarita Time'));


// Write a function called `reverse(input)` that takes a string and returns it reversed.
function reverse(input) {
  var stringArray = input.split();
  var reverseArray = stringArray.reverse();
  var forceString =  reverseArray.join();
  return forceString;
}
  console.log(reverse('hello'));


// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
function isNumeric(input) {
    if (isNaN(input)) {
      return 'This is not a number';
    } else {
      return 'This is a number';
    }
} console.log(isNumeric('pizza'));

// Write a function called `count(input)` that takes in a string and returns the number of characters.
function count(input) {
    var length = input.length;
    return length;
} console.log(count('ARMADILLO'));

// Write a function called `add(a, b)` that returns the sum of a and b
function add(a, b) {
  var a; var b
  var sum = a + b
  return sum;
} console.log(add(5,12));

// Write a function called `subtract(a, b)` that return the difference between the two inputs.
function subtract(a,b) {
  var diff = a - b;
  return diff;
}
  console.log(subtract(32, 89));


// Write multiply(a, b) that returns the product
function multiply(a,b) {
  var product = a * b;
  return product;
}
  console.log(multiply(5, 80));


// Write a divide(numerator, denominator) function that returns a divided by b
function divide(num, den) {
  var quotient = num / den;
  return quotient;
}
  console.log(divide(63,9));

// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`
function remainder(num, den) {
  var mod = num % den;
  return mod;
}
  console.log(remainder(65,7));


// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
function square(number) {
  var squared = number * number;
  return squared;
}
  console.log(square(100));

  // # Super Duper Gold-Star Bonus
  //
  // Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

  function sumOfSquares(a, b) {
    var aSquared = a * a;
    var bSquared = b * b;
    var sum = aSquared + bSquared;
    return sum;
}
  console.log(sumOfSquares(3, 6));


  // Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
function doMath(operator, a, b) {
    return operator(a,b)
}
  console.log((add, 3, 5));
