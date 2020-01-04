var wins = 0;
var losses = 0;
var totalWins = 0;
var playerCount = 0




// Generate a random number and who it to user (range 19-120)//
function randomNumber(min, max) {
    var randNumb = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNumb;

}

var winningNumber = randomNumber(19, 120);
console.log(winningNumber);


// Create a .onclick function that adds a number to the player score for each button.

$("#redButton").on("click", function() {
    playerCount++;
    alert("The counter after the red button was pushed is " + playerCount);
    console.log(playerCount);
});





//Update the Player score//







// Create an if statement that determines if the player has won the game or lost //




//Reset the game but somehow keep the players total wins//