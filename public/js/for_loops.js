


var number = prompt("Hey you, enter a number from 1-10.");
var product = 1;

for (var i = 1; i < 10; i++){

  if (number < 1 || number > 10) {
    continue;
  } product = number * i ;
  console.log(number+ 'x' + i + '=' + product );
}



var number = 1;

for (var i = 0; i <10; i++) {
    number = Math.floor(Math.random() * 180) + 20;

    if (number % 2 == 0) {
    console.log(number + ' is even');
  } else {
    console.log(number + ' is odd');
  }
}

for (var i = 0; i <10; i++){

}


var number = 0;
for (var i = 1; i <= 10; i++) {
  // number = i;
  // number += 1;
  number = i % 10;
  number = number.toString();
  console.log(number.repeat(i));
}



var start = 100;
var stop = 5;

for (var i = 1; start > 0; i++) {
    console.log(start);
    start = start - stop;
}
