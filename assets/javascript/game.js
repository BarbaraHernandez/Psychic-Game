var winTotal = 0;
var lossTotal = 0;
var guessLeft = 10;
var userGuess = "";
var compChoice = "";

var alphabet = ["a", "b", "c", "d", "e", "f" ,"g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//generate computer choice - custom restart function
function freshGame () {
    guessLeft = 10;
    //The following 2 lines were get a reference error, despite the fact that this exact terminology is used later on and is fine
    // guessesP.textContent = "Guesses Left: "+ guessLeft;
    //yourGuessesP.textContent = " ";
    compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("answer: " + compChoice);
    

}

//capture user guess
document.onkeyup = function (event){
    userGuess = event.key;
    console.log("Guess: " + userGuess);
    //win condition
    if (userGuess === compChoice) {
        winTotal++;
        winsP.textContent = "Wins: " + winTotal;
        freshGame();
    //bad guess condition
    } else if (userGuess !== compChoice && guessLeft>1){
        guessLeft --;
        guessesP.textContent = "Guesses Left: "+ guessLeft;
        //write guess to page
        yourGuessesP.textContent += userGuess + " ";
    //loss condition
    } else if (userGuess !== compChoice && guessLeft === 1){
        lossTotal ++;
        lossesP.textContent = "Losses: " + lossTotal;
        freshGame();
    }

    
}

freshGame();

