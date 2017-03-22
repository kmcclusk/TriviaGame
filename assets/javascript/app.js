$(document).ready(function(){

var questionsList = [
	{
		question: "What are the two types of coffee beans?",
		answer: "arabica and robusta",
		choices: ["arabic and robust", "arabica and robusta", "aromatic and robustious"]
	},
	{
		question: "What country drinks the most coffee per capita?",
		answer: "Finland",
		choices: ["United States","Finland","France"]
	},
	{
		question: "The drinks Mocha and Java recieve their name from ______.",
		answer: "their ports of origin",
		choices: ["their ports of origin","their characteristic flavoring","their roasting processes"]
	},
	{
		question: "What type of plant do coffee beans grow on?",
		answer: "bush",
		choices: ["tree","bush","vine"]
	},
	{
		question: "In what country is coffee believed to have originated?",
		answer: "Ethiopia",
		choices: ["Ethiopia","Italy","Brazil"]
	},
	{
		question: "What country exports the most coffee?",
		answer: "Brazil",
		choices: ["Ethiopia","Italy","Brazil"]
	},
	{
		question: "The Cappuccino recieves its name from the drinks resemblance to what?",
		answer: "Clothing worn by the Capuchin monks",
		choices: ["a person with light brown skin(puccino)","Fur of the Capuchin monkey","Clothing worn by the Capuchin monks"]
	},
	{
		question: "Why did sixteenth century Muslim rulers ban coffee?",
		answer: "because of its stimulating effects",
		choices: ["because of its stimulating effects","because of the black market coffee trade","because of gambling in coffee houses"]
	},
	{
		question: "Starbucks originated where?",
		answer: "Seattle, Washington",
		choices: ["Portland, Oregon","Seattle, Washington","Tacoma, Washington"]
	},
	{
		question: "Which country was the first to make drip coffee?",
		answer: "France",
		choices: ["France","Italy","Turkey"]
	},
	{
		question: "Which composer wrote an opera about a girl who was addicted to coffee?",
		answer: "Bach",
		choices: ["Beethoven","Bach","Mozart"]
	}
];

var questionIndex = 0;

var scoreCounter = 0;
var skipped = 0;

var timer = 30;
var secCount;



function startGame() {
	setupQuestionDisplay();
	questionTimer();
	$("#reset").hide();
}


function setupQuestionDisplay() {
	$("#questionText").text(questionsList[questionIndex].question);
	for (var i = 0; i < 3; i++){
		$("#option" + (i + 1)).text(questionsList[questionIndex].choices[i]);
	}	
}


function nextQuestion() {
	if (questionIndex < 10) {
		questionIndex++;
		timer = 30;
		setupQuestionDisplay();
		questionTimer();
	} else {
		gameOver();
	}
}


function correctAnswer(){
	scoreCounter++;
	nextQuestion();
}


function questionTimer() {
	secCount = setInterval(decrementTimer, 1000);
	function decrementTimer() {
		if (timer === 0) {
			clearInterval(secCount);
			timeUp();
		}
		if (timer > 0) {
			timer--;
		}
		$("#timedisplay").text(timer);
	}
}


function timeUp(){
	skipped++;
	nextQuestion();
}


function gameOver() {
$("#finalscore").text(scoreCounter + "/" + (questionIndex + 1) + " " + "CORRECT");
$("#skippedAnswer").text(skipped + " " + "unanswered");
$("#reset").show();
$("#questionText").hide();
$(".options").hide();
$("#timedisplay").hide();
	if (scoreCounter > 9){
		$("#finalmessage").text("BREW-vo, you're a real coffee expert!");
	} else {
		$("#finalmessage").text("That's GROUNDS for embarassment. Better luck next time.");
	}
}


function reset() {
	$("#reset").text("reset");
	questionIndex = 0;
	scoreCounter = 0;
	timer = 0;
	setupQuestionDisplay();
}


$(".btn").on("click", function() {
	if ($(this).text() === questionsList[questionIndex].answer){
		clearInterval(secCount);
		correctAnswer();
	} else {
		clearInterval(secCount);
		nextQuestion();
	}
});

startGame();

});