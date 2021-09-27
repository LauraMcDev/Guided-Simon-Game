var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("level" + level);
    nextSequence();
    started = true;
  }
});



$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

});

//call this function after a user has clicked and chosen their answer, passing
//in the index of the last answer in the user's sequence.
function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

  if (userClickedPattern.length === gamePattern.length) {

    setTimeout(function() {
    nextSequence();
    }, 1000);
  }

}  else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
setTimeout(function() {
    $("body").removeClass("game-over");
}, 200);

  $("h1").text("Game Over, Press Any Key to Restart");

  startOver();
  }
}



function nextSequence() {

userClickedPattern = [];

  //generate random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(80).fadeIn(80);

  playSound(randomChosenColour);

  level++;

  $("#level-title").text("Level " + level);

}

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

/* jQuery solution:
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed").delay(100).removeClass("pressed");
} */

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");

  }, 100);

}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
