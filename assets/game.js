var wins = 1;
var losses = 1;
var totalWins = 0;
var playerCount = 0;
// Generate a random number and who it to user (range 19-120)
function randomNumber(min, max) {
    var randNumb = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNumb;

}
var winningNumber = randomNumber(19, 120);
console.log(winningNumber);
// Create a .onclick function that adds a number to the player score for each button.


$( document ).ready(function() {
    

$('#red').on('click', function() {
    playerCount = playerCount + Math.floor(Math.random() * (12 - 1 + 1)) + 1;  
    $('#winNumb').text("Your number is " + playerCount);
        if (playerCount === winningNumber){
        alert("PERFECT!");
        $('#loss').text("L: ");
        $('#wins').text("W: " + wins++);
        winningNumber = randomNumber(19, 120);
    }
        else if (playerCount > winningNumber) {
        $('#loss').text("L: " + losses++);
        playerCount = 0;
    }

    return playerCount;
    
  });

  $('#blue').on('click', function() {
    playerCount = playerCount + Math.floor(Math.random() * (12 - 1 + 1)) + 1; 
    $('#winNumb').text("Your number is " + playerCount);
        if (playerCount === winningNumber){
        alert("PERFECT!");
        $('#loss').text("L: ");
        $('#wins').text("W: " + wins++);
        winningNumber = randomNumber(19, 120);
    }
        else if (playerCount > winningNumber) {
        $('#loss').text("L: " + losses++);
        playerCount = 0;
    }
    return playerCount;
    
  });

  $('#green').on('click', function() {
    playerCount = playerCount + Math.floor(Math.random() * (12 - 1 + 1)) + 1;  
    $('#winNumb').text("Your number is " + playerCount);
        if (playerCount === winningNumber){
        alert("PERFECT!");
        $('#loss').text("L: ");
        $('#wins').text("W: " + wins++);
        winningNumber = randomNumber(19, 120);
    }
        else if (playerCount > winningNumber) {
        $('#loss').text("L: " + losses++);
        playerCount = 0;
    }
    return playerCount;
    
  });

  $('#yellow').on('click', function() {
    playerCount = playerCount + Math.floor(Math.random() * (12 - 1 + 1)) + 1;  
    $('#winNumb').text("Your number is " + playerCount);
        if (playerCount === winningNumber){
        alert("PERFECT!");
        $('#loss').text("L: ");
        $('#wins').text("W: " + wins++);
        winningNumber = randomNumber(19, 120);
    }
        else if (playerCount > winningNumber) {
        $('#loss').text("L: " + losses++ );
        playerCount = 0;
    }
    return playerCount;
    
  });
});
//Update the Player score


// Create an if statement that determines if the player has won the game or lost



//Reset the game but somehow keep the players total wins

function reset() {
    playerCount = 0;
}