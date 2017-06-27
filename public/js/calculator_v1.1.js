// var value[];
// var field =
//
// if field !=""
// let me type a new number;
//
// number keys --> field
//
// if operator key
// var operation = operator pressed
// if value[0] == "" || operation == "="
// push field.value value[0]()
// clear field
// else if value[0] !=""
// push field.value[1]()
// switch(operation){
//   case +: value[0] + value[1] =  var sum
//   value[0]=sum
//   value[1]=""
//   push value[0].field
//   case -: value[0] - value[1] = var diff
//   value[0]=diff
//   value[1]=""
//   push value[0].field
//   case *: value[0] * value[1] = var mult
//   value[0]= mult
//   value[1]=""
//   push value[0].field
//   case /: value[0] / value[1] = var div
//   value[0]=div
//   value[1]=""
//   push value[0].field
//   case =: value[0]
// }



var values = [];
var field;
var operation;
var operationArray = [];
var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
var displayed = [0,0];

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', numberGen);
};

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', handleOperator);
};

function computer () {
  console.log(operation);
  console.log(values);
};

function numberGen(){
  if (displayed[1]!=0) {
    clear();
    displayed[1]=0;
    calculator.left.value += this.value;
  } else {
    calculator.left.value += this.value;

  }
};

function clear () {
  calculator.left.value = "";
};
function result () {
  calculator.left.value = (values[0]);
  displayed[1] = values[0];
};

function handleOperator() {
  operation = this.value;
  operationArray.push(operation);
  console.log(operationArray);
  if (values.length == 0) {
    values.push(calculator.left.value);
    console.log(values);
    // clear();
    result();

  } else if (values.length >0) {
    operation = this.value;
    values.push(calculator.left.value);
    console.log(values);
    var calculation = operationArray[0];
    switch (calculation) {
      case "+":
        var sum = (parseInt(values[0]) + parseInt(values[1]));
        values[0] = sum;
        values.pop ();
        console.log(values);
        // clear ();
        result ();
        break;
      case "-":
        var diff = (parseInt(values[0]) - parseInt(values[1]));
        values[0] = diff;
        values.pop ();
        console.log(values);
        // clear ();
        result ();
        break;
      case "*":
        var mult = (parseInt(values[0]) * parseInt(values[1]));
        values[0] = mult;
        values.pop ();
        console.log(values);
        // clear ();
        result ();
        break;
      case "/":
        var divide = (parseInt(values[0]) / parseInt(values[1]));
        values[0] = divide;
        values.pop ();
        console.log(values);
        // clear ();
        result ();
        break;
      // case "=":
      //   var divide = (parseInt(values[0]) / parseInt(values[1]));
      //   values[0] = divide;
      //   values.pop ();
      //   console.log(values);
      //   // clear ();
      //   result ();
      //   break;
    }
  }
  };






















// document.getElementById("equals").addEventListener('click', compute);
// document.getElementById("clear").addEventListener('click', clear);

// function compute () {
//   if (calculator.left.value != "" && calculator.right.value != "" && calculator.operator.value == "+") {
//     var sum = parseInt(calculator.left.value) + parseInt(calculator.right.value);
//     console.log(sum);
//     calculator.left.value = (sum);
//     calculator.right.value = "";
//     calculator.operator.value = "";
//     return(sum);
// }   else if (calculator.left.value != "" && calculator.right.value != "" && calculator.operator.value == "-") {
//     var difference = parseInt(calculator.left.value) - parseInt(calculator.right.value);
//     console.log(difference);
//     calculator.left.value = (difference);
//     calculator.right.value = ("");
//     calculator.operator.value = ("");
//     return(difference);
// }   else if (calculator.left.value != "" && calculator.right.value != "" && calculator.operator.value == "*") {
//     var product = parseInt(calculator.left.value) * parseInt(calculator.right.value);
//     console.log(product);
//     calculator.left.value = (product);
//     calculator.right.value = ("");
//     calculator.operator.value = ("");
//     return(product);
// }   else if (calculator.left.value != "" && calculator.right.value != "" && calculator.right.value != "0" && calculator.operator.value == "/") {
//     var divisor = parseInt(calculator.left.value) / parseInt(calculator.right.value);
//     console.log(divisor);
//     calculator.left.value = (divisor);
//     calculator.right.value = ("");
//     calculator.operator.value = ("");
//     return(divisor);
// }   else if (calculator.left.value != "" && calculator.right.value == "0" && calculator.operator.value == "/") {
//     var divByZero = "eRR";
//     console.log(divisor);
//     calculator.left.value = ("eRR");
//     setTimeout(clear, 2000)
//     calculator.right.value = ("");
//     calculator.operator.value = ("");
//     return(divByZero);
// };
// };
//
// function clear () {
//   calculator.left.value = "";
//   calculator.right.value = "";
//   calculator.operator.value = "";
// };
//
//
//
//
//
//
//
//
//
// // document.getElementById("one").addEventListener('click', function(){
// //   calculator.left.value+='1';
// // });
// // document.getElementById("two").addEventListener('click', function(){
// //   calculator.left.value+='2';
// // });
// // document.getElementById("three").addEventListener('click', function(){
// //   calculator.left.value+='3';
// // });
// // document.getElementById("four").addEventListener('click', function(){
// //   calculator.left.value+='4';
// // });
// // document.getElementById("five").addEventListener('click', function(){
// //   calculator.left.value+='5';
// // });
// // document.getElementById("six").addEventListener('click', function(){
// //   calculator.left.value+='6';
// // });
// // document.getElementById("seven").addEventListener('click', function(){
// //   calculator.left.value+='7';
// // });
// // document.getElementById("eight").addEventListener('click', function(){
// //   calculator.left.value+='8';
// // });
// // document.getElementById("nine").addEventListener('click', function(){
// //   calculator.left.value+='9';
// // });
// // document.getElementById("zero").addEventListener('click', function(){
// //   calculator.left.value+='0';
// // });
// //
// // document.getElementById("plus").addEventListener('click', function(){
// //   var left = document.getElementById("left").value;
// //   console.log(left);
// // });
// // document.getElementById("minus").addEventListener('click', function(){
// //   var left = document.getElementById("left").value;
// //   console.log(left);
// // });
// // document.getElementById("product").addEventListener('click', function(){
// //   var left = document.getElementById("left").value;
// //   console.log(left);
// // });
// // document.getElementById("divide").addEventListener('click', function(){
// //   var left = document.getElementById("left").value;
// //   console.log(left);
// // });
// // document.getElementById("clear").addEventListener('click', function(){
// //   var left = document.getElementById("left").value;
// //   console.log(left);
// // });
// // document.getElementById("equals").addEventListener('click', function(){
// //   var left = document.getElementById("left").value;
// //   console.log(left);
// // });
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
//
//
//
//
//
//
//
// //   var leftNumber;
// //
// //     document.getElementById("1").addEventListener('click', function(){
// //       calculator.left.value+='1';
// //     });
// //     document.getElementById("2").addEventListener('click', function(){
// //       calculator.left.value+='2';
// //     });
// //     document.getElementById("3").addEventListener('click', function(){
// //       calculator.left.value+='3';
// //     });
// //     document.getElementById("4").addEventListener('click', function(){
// //       calculator.left.value+='4';
// //     });
// //     document.getElementById("5").addEventListener('click', function(){
// //       calculator.left.value+='5';
// //     });
// //     document.getElementById("6").addEventListener('click', function(){
// //       calculator.left.value+='6';
// //     });
// //     document.getElementById("7").addEventListener('click', function(){
// //       calculator.left.value+='7';
// //     });
// //     document.getElementById("8").addEventListener('click', function(){
// //       calculator.left.value+='8';
// //     });
// //     document.getElementById("9").addEventListener('click', function(){
// //       calculator.left.value+='9';
// //     });
// //     document.getElementById("0").addEventListener('click', function(){
// //       calculator.left.value+='0';
// //     });
// //     document.getElementById("+").addEventListener('click', function() {
// //       var storeNumber = document.getElementById("left").value;
// //       leftNumber = storeNumber;
// //       console.log(storeNumber);
// //     if (storeNumber > 0) {
// //       document.getElementById("1").addEventListener('click', function(){
// //         calculator.right.value+='1';
// //       });
// //       document.getElementById("2").addEventListener('click', function(){
// //         calculator.right.value+='2';
// //       });
// //       document.getElementById("3").addEventListener('click', function(){
// //         calculator.right.value+='3';
// //       });
// //       document.getElementById("4").addEventListener('click', function(){
// //         calculator.right.value+='4';
// //       });
// //       document.getElementById("5").addEventListener('click', function(){
// //         calculator.right.value+='5';
// //       });
// //       document.getElementById("6").addEventListener('click', function(){
// //         calculator.right.value+='6';
// //       });
// //       document.getElementById("7").addEventListener('click', function(){
// //         calculator.right.value+='7';
// //       });
// //       document.getElementById("8").addEventListener('click', function(){
// //         calculator.right.value+='8';
// //       });
// //       document.getElementById("9").addEventListener('click', function(){
// //         calculator.right.value+='9';
// //       });
// //       document.getElementById("0").addEventListener('click', function(){
// //         calculator.right.value+='0';
// //       });
// //
// //     }
// //   });
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //     if operator {
// // //
// //
// // //
// // //     }
// // // }
// // //
// // //
// // //
// // // var operate = function () {
// // //   var storeNumber = document.getElementById("left").value;
// // //   document.getElementById('return').innerText = storeNumber;
// // //   numbers.value = "0";
// // //   console.log(storeNumber);
// // // }
