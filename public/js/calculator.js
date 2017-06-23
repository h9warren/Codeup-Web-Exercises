var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
document.getElementById("equals").addEventListener('click', compute);
document.getElementById("clear").addEventListener('click', clear);
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(){
    if (calculator.operator.value == "") {
    calculator.left.value += this.value;
  } else {
    calculator.right.value += this.value;
  }
    console.log(this.value);
  });
};
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function(){
    if (calculator.left.value != "" || calculator.left.value == "=" ) {
      calculator.operator.value = this.value;
    }
    console.log(this.value);
  });
};

function compute () {
  if (calculator.left.value != "" && calculator.right.value != "" && calculator.operator.value == "+") {
    var sum = parseInt(calculator.left.value) + parseInt(calculator.right.value);
    console.log(sum);
    calculator.left.value = (sum);
    calculator.right.value = "";
    calculator.operator.value = "";
    return(sum);
}   else if (calculator.left.value != "" && calculator.right.value != "" && calculator.operator.value == "-") {
    var difference = parseInt(calculator.left.value) - parseInt(calculator.right.value);
    console.log(difference);
    calculator.left.value = (difference);
    calculator.right.value = ("");
    calculator.operator.value = ("");
    return(difference);
}   else if (calculator.left.value != "" && calculator.right.value != "" && calculator.operator.value == "*") {
    var product = parseInt(calculator.left.value) * parseInt(calculator.right.value);
    console.log(product);
    calculator.left.value = (product);
    calculator.right.value = ("");
    calculator.operator.value = ("");
    return(product);
}   else if (calculator.left.value != "" && calculator.right.value != "" && calculator.right.value != "0" && calculator.operator.value == "/") {
    var divisor = parseInt(calculator.left.value) / parseInt(calculator.right.value);
    console.log(divisor);
    calculator.left.value = (divisor);
    calculator.right.value = ("");
    calculator.operator.value = ("");
    return(divisor);
}   else if (calculator.left.value != "" && calculator.right.value == "0" && calculator.operator.value == "/") {
    var divByZero = "eRR";
    console.log(divisor);
    calculator.left.value = ("eRR");
    setTimeout(clear, 2000)
    calculator.right.value = ("");
    calculator.operator.value = ("");
    return(divByZero);
};
};

function clear () {
  calculator.left.value = "";
  calculator.right.value = "";
  calculator.operator.value = "";
};









// document.getElementById("one").addEventListener('click', function(){
//   calculator.left.value+='1';
// });
// document.getElementById("two").addEventListener('click', function(){
//   calculator.left.value+='2';
// });
// document.getElementById("three").addEventListener('click', function(){
//   calculator.left.value+='3';
// });
// document.getElementById("four").addEventListener('click', function(){
//   calculator.left.value+='4';
// });
// document.getElementById("five").addEventListener('click', function(){
//   calculator.left.value+='5';
// });
// document.getElementById("six").addEventListener('click', function(){
//   calculator.left.value+='6';
// });
// document.getElementById("seven").addEventListener('click', function(){
//   calculator.left.value+='7';
// });
// document.getElementById("eight").addEventListener('click', function(){
//   calculator.left.value+='8';
// });
// document.getElementById("nine").addEventListener('click', function(){
//   calculator.left.value+='9';
// });
// document.getElementById("zero").addEventListener('click', function(){
//   calculator.left.value+='0';
// });
//
// document.getElementById("plus").addEventListener('click', function(){
//   var left = document.getElementById("left").value;
//   console.log(left);
// });
// document.getElementById("minus").addEventListener('click', function(){
//   var left = document.getElementById("left").value;
//   console.log(left);
// });
// document.getElementById("product").addEventListener('click', function(){
//   var left = document.getElementById("left").value;
//   console.log(left);
// });
// document.getElementById("divide").addEventListener('click', function(){
//   var left = document.getElementById("left").value;
//   console.log(left);
// });
// document.getElementById("clear").addEventListener('click', function(){
//   var left = document.getElementById("left").value;
//   console.log(left);
// });
// document.getElementById("equals").addEventListener('click', function(){
//   var left = document.getElementById("left").value;
//   console.log(left);
// });


























//   var leftNumber;
//
//     document.getElementById("1").addEventListener('click', function(){
//       calculator.left.value+='1';
//     });
//     document.getElementById("2").addEventListener('click', function(){
//       calculator.left.value+='2';
//     });
//     document.getElementById("3").addEventListener('click', function(){
//       calculator.left.value+='3';
//     });
//     document.getElementById("4").addEventListener('click', function(){
//       calculator.left.value+='4';
//     });
//     document.getElementById("5").addEventListener('click', function(){
//       calculator.left.value+='5';
//     });
//     document.getElementById("6").addEventListener('click', function(){
//       calculator.left.value+='6';
//     });
//     document.getElementById("7").addEventListener('click', function(){
//       calculator.left.value+='7';
//     });
//     document.getElementById("8").addEventListener('click', function(){
//       calculator.left.value+='8';
//     });
//     document.getElementById("9").addEventListener('click', function(){
//       calculator.left.value+='9';
//     });
//     document.getElementById("0").addEventListener('click', function(){
//       calculator.left.value+='0';
//     });
//     document.getElementById("+").addEventListener('click', function() {
//       var storeNumber = document.getElementById("left").value;
//       leftNumber = storeNumber;
//       console.log(storeNumber);
//     if (storeNumber > 0) {
//       document.getElementById("1").addEventListener('click', function(){
//         calculator.right.value+='1';
//       });
//       document.getElementById("2").addEventListener('click', function(){
//         calculator.right.value+='2';
//       });
//       document.getElementById("3").addEventListener('click', function(){
//         calculator.right.value+='3';
//       });
//       document.getElementById("4").addEventListener('click', function(){
//         calculator.right.value+='4';
//       });
//       document.getElementById("5").addEventListener('click', function(){
//         calculator.right.value+='5';
//       });
//       document.getElementById("6").addEventListener('click', function(){
//         calculator.right.value+='6';
//       });
//       document.getElementById("7").addEventListener('click', function(){
//         calculator.right.value+='7';
//       });
//       document.getElementById("8").addEventListener('click', function(){
//         calculator.right.value+='8';
//       });
//       document.getElementById("9").addEventListener('click', function(){
//         calculator.right.value+='9';
//       });
//       document.getElementById("0").addEventListener('click', function(){
//         calculator.right.value+='0';
//       });
//
//     }
//   });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
// //
// //
// //
// //
// //
// //
// //     if operator {
// //
//
// //
// //     }
// // }
// //
// //
// //
// // var operate = function () {
// //   var storeNumber = document.getElementById("left").value;
// //   document.getElementById('return').innerText = storeNumber;
// //   numbers.value = "0";
// //   console.log(storeNumber);
// // }
