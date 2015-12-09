$(document).ready(function() {

	setInterval(function() {
		var date = new Date ();
		var currenthours = date.getHours();
		var currentminutes = date.getMinutes();
		var currentseconds = date.getSeconds();

	
	if(currenthours <= 12){

	} else if(currenthours > 12){
		currenthours -= 12;
	};

	if (currenthours < 10){
        currenthours = "0" + currenthours;
       };
	
	if (currentminutes < 10){
        currentminutes = "0" + currentminutes;
        };

    if (currentseconds < 10){
        currentseconds = "0" + currentseconds;
        };


	$("#hour").text(currenthours);
	$("#minutes").text(currentminutes);
	$("#seconds").text(currentseconds);


}, 1000);


	





});

// 	document.getElementById('result').innerHTML = (parseInt(num1) + parseInt(num2)); 
// }