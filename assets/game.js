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


$( document ).ready(function() {
    


$('#red').on('click', function() {
    playerCount = playerCount + 2; 
    $('#winNumb').text("Your number is " + playerCount);
    return playerCount;
    
  });

  $('#blue').on('click', function() {
    playerCount = playerCount + 5; 
    $('#winNumb').text("Your number is " + playerCount);
    return playerCount;
    
  });

  $('#green').on('click', function() {
    playerCount = playerCount + 10; 
    $('#winNumb').text("Your number is " + playerCount);
    return playerCount;
    
  });

  $('#yellow').on('click', function() {
    playerCount = playerCount + 25; 
    $('#winNumb').text("Your number is " + playerCount);
    return playerCount;
    
  });
});




//Update the Player score//







// Create an if statement that determines if the player has won the game or lost //

if (playerCount > winningNumber) {
    $("#losses") = losses +1;
}

else if (playerCount === winningNumber) {
    $("#wins").text("Wins: " + 1); 
    $("wintotal") + 1;
}


//Reset the game but somehow keep the players total wins//