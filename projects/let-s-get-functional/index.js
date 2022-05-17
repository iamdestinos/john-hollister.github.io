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

/*
I: array
O: number
*/
var averageBalance = function(array){
    //invoke reduce on input array
    let totalBal =  _.reduce(array, function(accumulator, current, index, collection){
        //var balance is equal to empty array
        let balance = [];
        //iterate through current balance using for loop
        for(let i = 1; i < current.balance.length; i++) {
            //determine if current char is not a ,
            if(current.balance[i] !== ',') {
                balance.push(current.balance[i]);
            }
        }
        //reassign balance to joined array
        balance = balance.join('');
        //reassign balance to number using Number method
        balance = Number(balance);

        //add current object balance to accumulator
        accumulator += balance;
        return accumulator;
    }, 0);
    //var avgBal is equal to totalBal divided by array length
    let avgBal = totalBal / array.length;
    //return avgBal
    return avgBal;
};
averageBalance(customers);

/*
I: array and char
O: number
*/
var firstLetterCount = function(array, char){
    //invoke reduce on input array
    let count = _.reduce(array, function(accumulator, current, index, collection){
        //determine if current object name properties first char is equal to char
        if(current.name[0].toLowerCase() == char.toLowerCase()) {
            //if true increment accumulator
            accumulator++;
        }
        return accumulator;
    }, 0);

    //return count
    return count;
};

/*
I: array, string, character
O: number
*/
var friendFirstLetterCount = function(array, customer, letter){
    //invoke reduce on input array
    let count = _.reduce(array, function(accumulator, current, index, collection){
        //determine if current object name is equal to customer
        if(current.name === customer) {
            //if true, iterate through current objects friends array
            for(let i = 0; i < current.friends.length; i++) {
                //determine if current friend name starts with input letter
                if(current.friends[i].name[0].toLowerCase() == letter.toLowerCase()) {
                    //if true, increment accumulator
                    accumulator++;
                }
            }
        }
        //return accumulator
        return accumulator;
    }, 0);

    //return count;
    return count;
};

/*
I: array, string
O: array
*/
var friendsCount = function(array, name){
    //invoke reduce on input array
    
    let friends = _.reduce(array, function(accumulator, current, index, collection){
       /*
        let friendsList = [];
        for(let i = 0; i < current.friends.length; i++){
            friendsList.push(current.friends.name);
        }
        if(friendsList.includes(name)){
            accumulator.push(current.name);
        }
        return accumulator;
        */
        
        //iterate through current objects friends array
        for(let i = 0; i < current.friends.length; i++) {
            //determine if current friends name is same as input name
            if(current.friends[i].name == name) {
                //if true, add current name property to accumulator array
                accumulator.push(current.name);
            }
            //return accumulator;
        }
        return accumulator;
        
    }, []);

    //return friends
    return friends;
};

var topThreeTags = function(array){
    //let tags be empty object
    var tag = array.reduce(function(accumulator, current, index, collection){
        //iterate through current object's tags
        for(let i = 0; i < current.tags.length; i++){
            //determine if accumulator has a key named current tag
            if(accumulator[current.tags[i]]){
                accumulator[current.tags[i]] += 1;
            } else {
                accumulator[current.tags[i]] = 1;
            }
        }
        return accumulator;
    }, {});
    //variables of top 3 tags
    let first = array[0].tags[0];
    let second = array[0].tags[0];
    let third = array[0].tags[0];

    /*
    //iterate through input array
    for(let i = 0; i < array.length; i++){
        //iterate through tags array in current object
        for(let j = 0; j < array[i].tags; j++){
            //determine if current tag exists in tags object
            if(!tag[array[i].tags[j]]){
                //if true, create prop in tags equal to one
                tag[array[i].tags[j]] = 1;
            }  else {
                //else add one to prop in tags
                tag[array[i].tags[j]]++;
            }
        }
    }
    */

    //iterate through tags object
    for(let key in tag){
        if(tag[key] > tag[first]){
            first = key;
        }
    }
    for(let key in tag){
        if(tag[key] >= tag[second] && key !== first){
            second = key;
        }
    }
    for(let key in tag){
        if(tag[key] >= tag[third] && key !== first && key !== second){
            third = key;
        }
    }

    //put three tag variables into an array
    let output = [first, second, third];

    return output;
};

var genderCount = function(array){
    let output = array.reduce(function(accumulator, current, index, collection){
        //determine if current gender is a named prop in accumulator
        if(accumulator[current.gender]){
            accumulator[current.gender]++;
        } else {
            accumulator[current.gender] = 1;
        }
        return accumulator;
    }, {});
    return output;
};

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
