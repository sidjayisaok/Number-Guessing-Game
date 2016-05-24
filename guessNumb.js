function guessNumb() {
	//variables used
	var diffLvl = document.getElementById("input2").value;
	var compNumb = Math.ceil(Math.random()*diffLvl);
	var getNumb=document.getElementById("input").value;
	var myNumb = parseInt(getNumb);

	//conditionals for the variables
	if (myNumb === compNumb){
		document.getElementById("demo").innerHTML = "<h3>You guessed right!</h3>";
	}
	else if (myNumb > diffLvl){
		alert("please choose a number smaller than the range")
	}
	else{
		document.getElementById("demo").innerHTML = "You're wrong! The number is " + compNumb + " while you picked " + myNumb;
	}
	
	//bug check
	console.log("Computer picked " + compNumb + " : player picked " + myNumb );
};