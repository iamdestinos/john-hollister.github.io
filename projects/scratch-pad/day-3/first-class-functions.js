// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I: a string or number
    //O: function that tests if given value is greater than base
    return function(value) {
        var isGreater = base < value;
        return isGreater;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I: string or number
    //O: function that tests if value is less than base
    return function(value) {
        var isLess = base > value;
        return isLess;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //I: single character
    //O: function that tests if given string has same character as input at start
    return function(string) {
        //determine if char startsWith shares char at start of string
        if (startsWith.toLowerCase() == string[0].toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //I: single character
    //O: function tests if string ends with input character
    return function(string) {
        //determine if char endsWith and last character in string ar same
        if (string[string.length - 1].toLowerCase() == endsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //I: array of strings and a function
    //O: array of modified strings

    //var output equals empty array
    var output = [];
    //iterate through input array
    for (var i = 0; i < strings.length; i++) {
        //modify currently accessed value
        //add value to output
        output.push(modify(strings[i]));
    }
    //return output
    return output;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //I: array of strings and a test function
    //O: boolean

    //create count variable equal to zero
    var count = 0;
    //iterate through input array
    for (var i = 0; i < strings.length; i++) {
        //have currently value of strings get tested
        //determine if test passes
        if (test(strings[i])) {
            //increment count
            count++;
        }
    }
    //determine if all strings passed
    if (count == strings.length) {
        //if passed return true
        return true;
    } else {
        //if not return false
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
