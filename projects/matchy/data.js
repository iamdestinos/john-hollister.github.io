/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create animal object equal to empty
var animal = {

};
//create species property with dot notation
animal.species = 'penguin';
//create name property using bracket notation
animal['name'] = 'Peter';
//create noises property equal to empty array
animal.noises = [];
//console.log animal object
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create var noises equal to empty array
var noises = [];
//give noises first element using bracket notation
noises[0] = 'ker-raw';
//add another noise using array function
noises.push('kraaw');
//add to beginning of noises using array function
noises.unshift('krew');
//add new element to noises using bracket syntax
noises[noises.length] = 'raaw';
//console.log length of noises
console.log(noises.length);
//console.log last element in array noises
console.log(noises[noises.length - 1]);
//console.log whole array noises
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assign noises property in animal to noises array using bracket notation
animal['noises'] = noises;
//add another noise to noises property on animal
animal.noises.push('coo');
//console.log animal
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create var animals equal to empty array
var animals = [];
//push animal on animals
animals.push(animal);
//console.log animals
console.log(animals);
//create var duck
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
//push duck to animals
animals.push(duck);
//console.log animals
console.log(animals);
//create two more animal objects and push to animals array
//noises property should have at least two values
var swan = {
  species: 'swan',
  name: 'Sara',
  noises: ['honk', 'quack']
};
animals.push(swan);
var hen = {
  species: 'chicken',
  name: 'Hilda',
  noises: ['cluck-cluck', 'bakaw']
};
animals.push(hen);
//console.log animals and length of animals
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare var friends
//chose array since it serves as a list of values rather than an object's key value pairs
var friends = [];
//write a function getRandom
/*
I: array of values
O: a number
*/
function getRandom(array) {
  return Math.floor(Math.random() * array.length);
}
//get a random animal and add its name to friends
friends.push(animals[getRandom(animals)].name);
//console.log friends
console.log(friends);
//add friends to an animal in animals using bracket notation
animals[0]['friends'] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}