// ====================================================
// isNegative
// ====================================================

    function isNegative(number) {
      if (number < 0){
        return true;
      } else {
        return false;
      }
    };

// ====================================================
// average
// ====================================================

    function average(array){
      var array;
      var total = 0;
      for (var i = 0; i < array.length; i++) {
        total += parseInt(array[i]);
      }
      var averageNum = (total / (array.length));
      return(averageNum);
    };

// ====================================================
// countOdds
// ====================================================

    function countOdds(array){
      var array;
      var oddArray = [];
      for (var i = 0; i < array.length; i++){
        if (array[i] % 2 != 0) {
          oddArray.push(array[i]);
        }
      }
      return(oddArray.length);
    };

// ====================================================
// convertNameToObject
// ====================================================

    function convertNameToObject(nameString) {
      var nameArray = nameString.split(" ");
      var nameObject = {
        "firstName":nameArray[0],
        "lastName":nameArray[1]
      }
      return nameObject;
    };

// ====================================================
// fiveTo
// ====================================================

    function fiveTo(number){
      var max = number;
      var newArray = [];
      for (var i = 5; i < max; i++) {
        newArray.push(i);
      }
      return newArray;
    }

// ====================================================
// upperCaseLastNames
// ====================================================

  function upperCaseLastNames(names){
    names.forEach(function(name){
    var firstLetter = name.lastName[0].toUpperCase() + name.lastName.slice(1);
    name.lastName = firstLetter;
  }); return names;
};
