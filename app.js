'use strict'; // requires you to use correct notation. Syntax checker is less forgiving. cd

//TODO: fix alerts
var scoreCounter = 0;
// welcome message
var welcome = prompt('Welcome, please tell me your name. ');
// alert('hello ' + welcome);
alert('Welcome ' + welcome);

// TODO: Make a variable for incorrect responses
// Notes from Nicco: This function, at present, takes in two parameters, those parameters being question and correctAnswer. These two parameters are *passed into* or used within the function in the place of a question and a response to a correct answer. When called and given the appropriate arguments, it will run all the code contained within it.
function questionFunction(question, correctAnswer) {
  var userAnswer = prompt(question);

  if (userAnswer.toLowerCase().startsWith('y')) {
    alert(correctAnswer); // NL
    scoreCounter++;
  } else {
    alert('Nope, that\'s incorrect.');
  }
}
// TODO: IMPORTANT NOTE: question and correctAnswer are PARAMETERS
// the string itself is an argument, when we call the function
// we must give those parameters some ARGUMENTS, in this case
// the arguments are the strings that we enter when calling.
questionFunction('Am I a Web Dev?', 'Yes, I am a web developer');
questionFunction('Do I have a dog?', 'Yes, her name is Maddie.');
questionFunction('Did I have a prior career in education?', 'Yes I worked in special education.');
questionFunction('Did I break my thumb by tripping on my own foot??', 'Yes I sure did!');
questionFunction('Is my goal to become a front end react developer?', 'Becoming a front end react developer is my goal.');



// // 6. Guess my favorite number from these four options.
// //This code block checks if the guess is correct and loops through the 4 chances to guess
// var favoriteNumber = 10;
// var userAttempts = 4;
// var favoriteNumberQuestion = pr// 2. Do I have a dog? ... Named maddie
// var haveDog = prompt('Do I have a dog?');
// alert('haveDog: ' + haveDog);

// if (haveDog.toLowerCase().startsWith('y')) {
//   alert('I have a dog named Maddie');
//   console.log('I have a dog named Maddie');
//   scoreCounter++;
// } else {
//   alert('I have a dog named Maddie');
//   console.log('I have a dog named Maddie');
// }
//   'Guess my favorite number between 1 and 20: you have four tries'
// );

// for (i = 1; i < userAttempts; i++) {
//   console.log(favoriteNumberQuestion);
//   if (parseInt(favoriteNumberQuestion) === 10) {
//     alert('Congratulations!');
//     scoreCounter++;
//     break; //Stops the loop
//   } else if (parseInt(favoriteNumberQuestion) < 10) {
//     favoriteNumberQuestion = prompt('your guess was too low, please try again');
//     //too high
//   } else if (parseInt(favoriteNumberQuestion) > 10) {
//     favoriteNumberQuestion = prompt(
//       'your guess was too high, please try again'
//     );
//   }
//   //TODO: need to tell them that they did not guess correct and tell them the answer
// }
// alert('My favorite number is actually 10');

// // fix entering the names
// // add the options to choose
// // 7. What is my favorite harry potter book?
// // var favBook = 'Sorcerer Stone';
// var bookGuesses = 6;
// var harryPotterBooks = [
//   'Sorcerers Stone',
//   'Chamber of Secrets',
//   'Prizoner of Azkaban',
//   'Goblet of Fire',
//   'Order of the Phoenix',
//   'Half Blood Prince',
//   'Deathly Hallows'
// ];
// var favoriteBookIndex = 0;
// // TODO: reference multiple favorites

// var favBookQuestion = prompt(
//   'What is my favorite Harry Potter Book? from these choices: ' +
//     harryPotterBooks
// ).toLowerCase();

// for (var i = 0; i < bookGuesses; i++) {
//   // accessing the harry potter array at the favorite book index
//   // check an if statement if the favBookQuestion is strictly equal to the harryPotterBooks array accessed at the favoriteBookIndex(which is 0) and calling the toLowerCase() method on that String
//   if (favBookQuestion === harryPotterBooks[favoriteBookIndex].toLowerCase()) {
//     alert('Harry Potter and the Sorcerers Stone is my favorite book');
//     scoreCounter++;
//     break;
//   } else if (i < bookGuesses - 1) {
//     //This takes the amount of guesses index and make it i of 5
//     favBookQuestion = prompt('That is not the one, try again!');
//   } else {
//     alert(
//       'Whoops, my favorite Harry Potter book is actually Harry Potter and the Sorcerers'
//     );
//   }
// }

// alert('you got: ' + scoreCounter + ' points out of 7 available points');




// var ryansFavoriteCars = ['audi rs5', 'subaru wrx', 'ford focus rs'];
// var sadCarOptions = ['geo metro', 'hona oddysey', 'pinto', 'ford fiesta', 'saab'];



// // ask the question
// // check the response
// //if it is in the favorites they win 
// // if it is in the sadOnes
// //it it is neither, correct them sternly

// var usersFavoriteCar = prompt('What is Ryan\'s favorite car');
// //if it is correct
// // if it is in the favorite cars
// // a bunch of ors - in the conditional 
// // assume they were wrong
// // check each value with a loop and if right, change the assumption
// //stop looping
// //AFTER the loop, respond with out if statement



// // Flag - a boolean variable that starts (usually) false, and something in an iterative part if the code changes its boolean value- we use the flag after the iteration to check some truth

// for (var guesses = 0; guesses < 3; guesses++);

// var theyWereRight = false;

// for(var carIndex = 0; carIndex < ryansFavoriteCars.length; carIndex++) {
//   if (usersFavoriteCars === ryansFavoriteCars[carIndex]){
//     theyWereRight = true;
//     break;
//   }
// }
// // this will either be true or false no need to say true === true
// if(theyWereRight){
//   alert('nice job');
//   break;
// } else {
//   alert('try again');
// }


// // then make it repeat


// Call the functions here: