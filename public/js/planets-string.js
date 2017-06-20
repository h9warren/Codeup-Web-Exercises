(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    var newString = planetsArray.join("<br>");
    //       Why might this be useful?
    console.log(newString);
    document.write(newString);

    // Bonus: Create a second string that would display your planets in an undordered list.
    var secondArray = newString.split("<br>");
    var secondString;
    console.log(secondArray);

    for (var i=0; i < secondArray.length ; i++){
      secondArray[i]="<li>" + secondArray[i] + "</li>";
    }
    secondString = secondArray.join("");
    var planetList = "<ul>" + secondString + "</ul>";
    document.write(secondString);
    console.log(secondString);
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
})();
