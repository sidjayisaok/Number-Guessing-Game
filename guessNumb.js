
//set the scoreboard parameters
var win = 0;
var lose = 0;

	//display scoreboard
	document.querySelector('#demo').innerHTML =	
	  '<p>Wins: ' + win + '</p>' +
	  '<p>Losses: ' + lose + '</p>';


function guessNumb() {
	//variables used
	var diffLvl = document.getElementById("input2").value;
	var compNumb = Math.ceil(Math.random()*diffLvl);
	var getNumb=document.getElementById("input").value;
	var myNumb = parseInt(getNumb);

	//conditionals for the variables
	//this eliminates an instant win scenario
	if ((myNumb === 0) && (compNumb === 0)){
		alert("There can't be two zeroes")
	}
	//in case player picks a guess larger than the range
	else if ((myNumb > diffLvl) || (myNumb === 0) || (compNumb === 0) ){
		alert("please choose another number, or make the range larger than the guess")
	}
	else if (myNumb === compNumb){
		//track wins
		win++;
		//display victory message
		document.getElementById("demo").innerHTML = "<h3><p>You guessed right!</p></h3>" + "<p>Wins: " + win + "</p>" +
		"<p>Losses: " + lose + "</p>";
	}
	else{
		//track losses
		lose++;
		//display information
		document.getElementById("demo").innerHTML = "<p>You're wrong! The number is " + compNumb + " while you picked " + myNumb + "</p>" +
		 "<p>Wins: " + win + "</p>" +
		 "<p>Losses: " + lose + "</p>";
	}
	  //set losing condition
	  if(lose===5){
		  document.getElementById("demo").innerHTML= "<h3>You're out of guesses! You lose!</h3>";
	  }

};
