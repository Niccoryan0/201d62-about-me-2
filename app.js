'use strict' // requires you to use correct notation. Syntax checker is less forgiving. cd

// 5 questions about myself

// welcome message
var welcome = prompt('Welcome, please tell me your name. ');
alert('hello ' + welcome);
console.log('userName ' + welcome);
// 1. Am I am web developer
var webDeveloper = prompt('Am I a web developer? ');
console.log('Am I a web developer: ' + webDeveloper);
if (webDeveloper === 'yes') {
  console.log( 'yes I am a web developer');
  // console.log('I am a web developer');
} else {
  alert('Nope, I am a web developer' );
  console.log('Nope, I am a web developer' );
  // console.log('I am a web developer' );
};
// 2. Do I have a dog? ... Named maddie
var haveDog = prompt('Do I have a dog?');
console.log('haveDog: ' + haveDog);
if (haveDog === 'yes') {
  alert('I have a dog named Maddie');
  console.log('I have a dog named Maddie');
} else {
  alert('I have a dog named Maddie')
  console.log('I have a dog named Maddie')
};
// 3. Did I have a prior career in education?
var priorCareer = prompt('Did I have a prior career in education?');
console.log('I had a career in education: ' + priorCareer);
if (haveDog === 'yes') {
  alert('I did have a career in education');
  console.log('I did have a career in education');
} else {
  alert('I did have a career in education')
  console.log('I did have a career in education')
};
// 4. Did I break my thumb by tripping on my own foot?
var brokenThumb = prompt('Did I break my thumb by tripping on my own foot??');
console.log('I broke my thumb: ' + brokenThumb);
if (brokenThumb === 'yes') {
  alert('I did break my ');
  console.log('I did break my ');
} else {
  alert('Unfortunately, I did break my thumb.')
  console.log('Unfortunately, I did break my thumb.')
};
// 5. Is my goal to become a front end react developer
var careerGoal = prompt('Is Is my goal to become a front end react developer');
console.log('I want to be a frontend react developer');
if(careerGoal === 'yes') {
  alert('I want to be a frontend react developer ');
  console.log('I want to be a frontend react developer ');
};


// y starts with