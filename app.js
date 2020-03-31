'use strict'; // forces the browser to throw errors when you write your code as an error

// Ice cream questions
// yes no question
//do you like it
var likesIceCream = confirm("Do you like ice cream ");
console.log("Likes ice cream : " + likesIceCream);
//if they like it continue through the rest of the app

// LikesIceCream = true
//TODO:  if(likesIceCream === true)
// if(true)
// if(likesIceCream)x //onlly options are t or f, no need to manually check it
if (likesIceCream === true) {
  console.log("yay they like it");
} else {
  console.log("lets give them a smoothie");
}

var favoriteFlavor = prompt('what is your fav flav?');
if(favoriteFlavor=== 'mint chip'){
  console.log('bryant likes that too');
  {}
}else if (favoriteFlavor === 'oreo' || favoriteFlavor === 'Oreo'){
  console.log('Linsey likes that too');
}else if (favoriteFlavor === 'chocolate'){
  console.log('Chris likes that too');
} else {
console.log('I want to try' + favoriteFlavor + ', I haven\'t had it before');
};

//Logical operator && all of them have to be true
if(likesIceCream === false && favoriteFlavor == 'butterscotch')
  console.log('you are so weird');

// console.log( 1 === 1);
// console.log( 1 === 2);
// console.log(true);

true; // false is a boolean
false; // false is a boolean
//if they don't, offer them an alternative smopthie

//multiple possible answers x2
       //favorite flavor
// what size would you like to order (provide options)




//*********************** */
//primatives
//boolean 
true;
false;
//string
'';  // falsy
'abc'; //truthy
'null'; // truthy
'undefined'; //truthy
//numbers
123; //truthy
1.23//truthy
0// only falsy

