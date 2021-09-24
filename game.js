var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

});

function nextSequence() {
//generate random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(80).fadeIn(80);


  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

};



/* function playAudio() {
  var audio = new Audio("randomChosenColour.mp3");
  audio.play();
} */
