(function(){
    "use strict";
    //
    // // // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    // //
    // var names = ['John', 'Paul', 'George', 'Ringo'];
    // // // TODO: Create a log statement that will log the number of elements in the names array.
    // console.log(names.length);
    // //
    // // // TODO: Create log statements that will print each of the names array elements individually.
    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);
    //
    // for (var i = 0; i < names.length; i++) {
    //   console.log(names[i]);
    // }
    //
    // names.forEach(function (element) {
    //   console.log(element);
    // });

    var a = 1;
    var temperatures = new Array ();
    var array2 = new Array ();
    var measure;
    for (var i = 0; i < 5; i++){
      temperatures[i] = prompt('number');
      } console.log(temperatures);
      measure = prompt('If you want to convert Fahrenheit to Celsius, type "Celsius". \n If you want to convert to Celsius to Fahrenheit, type "Fahrenheit".' );
      console.log(measure);

      if (measure == 'Fahrenheit'){
        temperatures.forEach(function (numbers, index) {
          numbers = parseInt(numbers -32 * 5/9);
          // temperatures[index] = numbers;

          array2.push(numbers);
          // array2[] = value;

        })
      } else {
        temperatures.forEach(function (numbers, index) {
          numbers = parseInt(numbers * 9/5 + 32);
          array2.push(numbers);
        })
      };
      console.log(temperatures);
      console.log(array2);

})();
