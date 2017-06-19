// "use strict";
// var x = 2
//
// while (x <= 65536){
//   console.log(x);
//   x *= 2;
// }
//
// var allCones = Math.floor(Math.random() * 50) + 50;
// var cones = Math.floor(Math.random() * 5) + 1;
//
// do {
//     if (cones > allCones){
//         console.log("Fuck off with your " + cones + " cones.");
//         cones = Math.floor(Math.random() * 5) + 1;
//         console.log("I only have " + allCones);
//         continue;
//     }
//     console.log(cones + ' cones sold!');
//     allCones = allCones - cones;
//     cones = Math.floor(Math.random() * 5) + 1;
//     console.log("Now there are " + allCones + " cones left.");
//   }  while (allCones > 0);
//
//
// var number = prompt("Please enter a number between 1 and 10.");
// var product;
//
// do {
//       number = prompt("Please enter a number between 1 and 10.");
//   }   while (isNaN(number) || number < 1 || number > 10);
//
//       for (var i = 1; i <= 10; i++) {
//         product = number * i;
//         console.log(number + "X" + i + "=" + product);
//     }
//
// var number;
//
//   for (var i = 1; i <= 10; i++) {
//     number = Math.floor(Math.random()*180) + 20;
//       if (number % 2 == 0) {
//
//         console.log(number + ' is even!');
//       } else {
//         console.log(number + ' is odd!');
//       }
//
//   }
//
//   var number;
//
//   for (var i = 1; i<=10; i++) {
//     numberMod = i % 10;
//     numberString = numberMod.toString();
//     console.log(numberString.repeat(i));
//   }

  for (var i = 100; i >=5; i-=5) {
    console.log(i);
  }

  for (var i = 1; i <= 49; i+=2){
      if (i == 27) {
        console.log('Yikes! Skipping number: ' + i);
      }

      console.log('Here is an odd number: ' + i);
  }
