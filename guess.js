function playGuessingGame(numToGuess, TotalGuesses = 10) {
  var init = TotalGuesses;
  var guess = prompt("Enter a number between 1 to 100");
  while (TotalGuesses > 1) {
    TotalGuesses--;
    // if guess is not a number or whitespace guess trails are not counted
    if (guess == null) {
      return 0;
    } else if (isNaN(guess) || isWhitespace(guess)) {
      TotalGuesses++;
      guess = prompt("please enter a number");
    } else {
      if (guess == numToGuess) {
        alert(
          "Succesfull guess after " +
            (init - TotalGuesses) +
            " in " +
            init +
            " trials"
        );
        return init - TotalGuesses;
      } else if (guess > numToGuess) {
        guess = prompt(guess + " is too large guess a smaller number");
      } else if (guess < numToGuess) {
        guess = prompt(guess + " is too small guess a larger number");
      }
    }
  }
  return 0;
}
function isWhitespace(input) {
  // Check if the input is a whitespace character.
  var whitespaceCharacters = [" ", "\t", "\n", "\r"];
  for (var i = 0; i < whitespaceCharacters.length; i++) {
    if (input === whitespaceCharacters[i]) {
      return true;
    }
  }
}
