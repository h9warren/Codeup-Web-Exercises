

(function(){
	do {
		var number = prompt("Pick a number 1-10.");
	} while
		(isNaN(number) || number < 1 || number>10 );

	do {
		var jobName = prompt("Enter a job name.");
	} while (typeof jobName != string);

	do {
		var newJob = prompt("Enter a new job.");
	} while (typeof newJob != string);
	do {
		var newCity = prompt("Enter the name of a city.");
	} while (typeof newCity != string);
	do {
		var personName = prompt("Enter a person's name.");
	} while (typeof personName != string);
	do {
		var littleTown = prompt("Enter a small town.");
	} while (typeof littleTown != string);
	do {
		var girlfriend = prompt("Enter a person's name.");
	} while (typeof girlfriend != string);
	do {
		var bodyPart = prompt("Enter a body part.");
	} while (typeof bodyPart != string);

	array = {number, jobName, newJob, newCity, personName, littleTown, girlfriend};

	console.log((array[0]) + "years after the end of Rush Hour 2, James Carter is no longer a" + (array[1]) + ", but a" + (array[2]) +  "on the streets of" + (array[3]) + ". Lee is now the bodyguard for his friend" (array[4]) + ". Lee is still upset with Carter about an incident in" + (array[5]) +  "when Carter accidentally shot Lee`s girlfriend," + (array[6]) +  "Isabella Molina, in the" (array[7]) + ".");

})();
