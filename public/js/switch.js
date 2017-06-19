"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

console.log(color);

switch (color) {
    case 'red':
      console.log("Red is the color of your sunburn.");
      break;
    case 'orange':
      console.log("Orange is the color of an orange.");
      break;
    case 'yellow':
      console.log("Yellow is the color of cheese.");
      break;
    case 'green':
      console.log("Green is the color of old cheese.");
      break;
    case 'blue':
      console.log("Blue is the color of really, really old cheese.");
      break;
    default:
      console.log("I don't know anything else by that color");
      break;
  }
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.



  var Cameron = 180;
  var Ryan = 250;
  var George = 320;

  if (Cameron > 200) {
    console.log('Cameron paid ' + (Cameron * .9)+'. The original total was '+ (Cameron) + '.');
  } else {
    console.log('Cameron paid ' + (Cameron) +'.');
  }
  if (Ryan > 200) {
    console.log('Ryan paid ' + (Ryan * .9)+'. The original total was '+ (Ryan) + '.');
  } else {
    console.log('Ryan paid ' + (Ryan) +'.');
  }
  if (George > 200) {
    console.log('George paid ' + (George * .9)+'. The original total was '+ (George) + '.');
  } else {
    console.log('George paid ' + (George) +'.');
  }


  var flipACoin = Math.floor(Math.random()*2);

  if (flipACoin == 0) {
    console.log("Buy a car.");
  } else if (flipACoin == 1) {
    console.log("Buy a house.");
  }

  (flipACoin == 0) ? console.log("Buy a car.") : console.log("Buy a house.")


  var luckyNumber = Math.floor(Math.random()*6);

  console.log(luckyNumber);

  switch(luckyNumber){
    case 0: var luckyZero = 60;
    console.log('You have to pay ' + (luckyZero) + '.');
    break;
    case 1: var luckyOne = (60 * .9);
    console.log('You have to pay ' + (luckyOne) + '.');
    break;
    case 2: var luckyTwo = (60 * .75);
    console.log('You have to pay ' + (luckyTwo) + '.');
    break;
    case 3: var luckyZero = 60;
    console.log('You have to pay ' + (luckyZero) + '.');
    break;
    case 4: var luckyFour = (60 * .5);
    console.log('You have to pay ' + (luckyFour) + '.');
    break;
    case 5: var luckyFive = (60 * 0);
    console.log('You have to pay ' + (luckyFive) + '.');
    break;
  }

  var total = 60;

  switch(luckyNumber){
    case 0:
    total *= 1;
    console.log('You have to pay ' + (total) + '.');
    break;
    case 1:
    total *= .9;
    console.log('You have to pay ' + (total) + '.');
    break;
    case 2:
    total *= .75;
    console.log('You have to pay ' + (total) + '.');
    break;
    case 3:
    total *= 1;
    console.log('You have to pay ' + (total) + '.');
    break;
    case 4:
    total *= .5;
    console.log('You have to pay ' + (total) + '.');
    break;
    case 5:
    total *= 0;
    console.log('You have to pay ' + (total) + '.');
    break;
  }

  var maybe = confirm("Would you like to enter a number?");
  var number = prompt("Enter a number!");
  var plusHundred = parseInt(number) + 100;

  if (isNaN(parseFloat(number))) {
    alert("That's not a number!")
  } else if (parseInt(number) % 2 != 0) {
    alert("The number is odd!");
    alert("Your number plus 100 equals " + plusHundred +'.');
  } else if (parseInt(number) % 2 == 0) {
    alert("The number is even!");
    alert("Your number plus 100 equals " + plusHundred +'.');
  } else if (parseInt(number) < 0) {
    alert("Your number is negative!");
  } else {
    alert("Your number is positive!");
  }

  if(isNaN(parseFloat(number))){
    alert("Hey, that's not a number!");
  } else {
    if (parseFloat(number) % 2 != 0){
      alert("Your number is odd! Your number plus 100 equals " + (plusHundred) + ".");
    } else {
      alert("Your number is even! Your number plus 100 equals " + (plusHundred) + ".");
    }
    if (parseFloat(number)<0){
      alert ("Your number is negative!");
    } else {
      alert ("Your number is positive!");
    }

    }
