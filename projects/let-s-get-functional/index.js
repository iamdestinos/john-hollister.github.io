// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./john-hollister.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) { //use filter function
    //
    let males = _.filter(array, function(element){ //element = current customer object
        //
        if(element.gender === 'male') {
            return element.gender === 'male';
        }
    });

    //
    return males.length;
};

/*
I: array
O: number
C: use reduce function
*/
var femaleCount = function(array) {
    //var females equals reduce function
    let numFemales = _.reduce(array, function(accumulator, current, index, collection){
        //determine if current is female
        if(current.gender === 'female'){
            accumulator += 1;
        }
        return accumulator;
    }, 0);

    //return numFemales
    return numFemales;
};

/*
I:
O:
*/
var oldestCustomer = function(array){
    //invoke reduce function on input array
    let oldest = _.reduce(array, function(accumulator, current, index, collection){
        //determine if the current object age property is greater than accumulator's age property
        if(current.age > accumulator.age) {
            //
            accumulator = current;
        }
        return accumulator;
    });

    //return oldest
    return oldest.name;
};

/*
I: array
O: string
*/
var youngestCustomer = function(array){
    //invoke reduce function on input array
    let youngest = _.reduce(array, function(accumulator, current, index, collection){
        //determine if current age property is less than accumulator age property
        if(current.age < accumulator.age) {
            accumulator = current;
        }
        return accumulator;
    });

    //return youngest name property
    return youngest.name;
};

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
