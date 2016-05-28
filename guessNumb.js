
//set the scoreboard parameters
var win = 0;
var lose = 0;
	
	//display scoreboard
	document.querySelector('#demo').innerHTML =	  //'#example' "example" '.example'
	  '<p>Wins: ' + win + '</p>' +
	  '<p>Losses: ' + lose + '</p>';


function guessNumb() {
	//variables used
	var diffLvl = document.getElementById("input2").value;
	var compNumb = Math.ceil(Math.random()*diffLvl);
	var getNumb=document.getElementById("input").value;
	var myNumb = parseInt(getNumb);

	//conditionals for the variables
	//in case play picks a guess larger than the range
	if ((myNumb > diffLvl) || (myNumb === 0) || (compNumb === 0) || ((myNumb === 0) && (compNumb === 0))){
		alert("please choose another number")
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


