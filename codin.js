var words = ["googology", "knuth's-up-arrow-notation", "googolplexianth"]; //Word Storage

var word = words[Math.floor(Math.random() * words.length)];
//Word Picker (Random Number * list length)Floor))

var answers = [];
//answers storage

//for the amount of letters in our word make an underscore
for (var i = 0; i < word.length; i++) {
  answers[i] = "_";
}

var remainingLetters = word.length;

//main game loop
while (remainingLetters > 0) {
  alert(answers.join(" "));

  var guess = prompt("Enter your Guess");

  if (guess === null) {
    alert("You didn't type anything?"); //user enters null
  } else if (guess.length !== 1) {
    alert("You can only guess one letter"); //user enters multiple letters
  } else {
    guess = guess.toLowerCase(); //lowercase answers

    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answers[j] = guess;
        remainingLetters--;
        // checks and adds correct guessed letters
      }
    }
  }
}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
