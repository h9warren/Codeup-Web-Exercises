// var x = 1
// while (x < 65536) {
//   x *= 2; console.log(x);
// }

var allCones = Math.floor(Math.random() * 50) + 50;
var cones = Math.floor(Math.random() * 5) + 1;

do {
  // console.log(allCones);
    if (cones > allCones){
      console.log("fuck you we don't have that many cones.");
      cones = Math.floor(Math.random() * 5) + 1;
      continue;
  }
  allCones = allCones - cones;
  console.log(cones + ' cones were sold!');
  cones = Math.floor(Math.random() * 5) + 1;
  console.log('There are ' + allCones +' more cones left.');
} while (allCones > 0);
  console.log('There are no more cones left.');
