
// Arrays for calculations
var enteringNum = [];
var arrayOne = [];
var arrayTwo = [];

// Creating number keys
var numbers = document.getElementsByClassName("number");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(){
// Clears display to enter new number
    if (enteringNum.length ==0) {
      calculator.left.value = "";
      enteringNum.push(this.value);
      calculator.left.value += this.value;
    } else {
      enteringNum.push(this.value);
      calculator.left.value += this.value;
    }
  });
};
// Creating operator keys
var operators = document.getElementsByClassName("operator");
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function(){
    arrayOne.push(calculator.left.value);
    arrayTwo.push(this.value);
    console.log(arrayTwo);
    calculate();
  });
};

//Clear key is special
var clearKey = document.getElementById('clear');
clearKey.addEventListener('click', function(){
  arrayOne = [];
  arrayTwo = [];
  calculator.left.value = 0;
  enteringNum = [];
});

function add(num1, num2) {
  var sum = parseInt(num1) + parseInt(num2);
  return sum;
}


function calculate() {
  if (arrayOne.length == 1){
    calculator.left.value = arrayOne[0];
    enteringNum = [];
  } else if (arrayTwo[0]=="+") {
    var num1 = parseInt(arrayOne[0]);
    var num2 = parseInt(arrayOne[1]);
    add (num1, num2);
    console.log("nothing's happening.");
  }

};
