var wordBank = ['red', 'blue', 'green', 'giddey'];
var wins = 0;
var losses = 0;
var wrongletter = [];
var guessesleft = 9;
var underscores = [];
var userguesses = [];
var randword;
// https://www.legendsofamerica.com/we-slang/
function startgame() {
    // pick of random word for hangman

    wordBank.length[]
    
    randword = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randword);

    for (var i = 0; i < randword.length; i++) {
        underScores.push('_');
    }
    // printing underscores to the screen
    document.getElementById('word-blanks').accessKey

    // reset
    wrongletter = [];
    guessesleft = 9;

    // HTML
    document.getElementById('guesses-left').textContent = guessesleft;

    document.onkeyup = function (event) {
        userGuesses = event.hey;
        console.log(userguesses);
    }

    // call of function to start game
    startgame();
}