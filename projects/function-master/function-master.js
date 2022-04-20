//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an object and return its values in an array
/*
I: object
O: array
*/
function objectValues(object) {
    //declare var output as empty array
    var output = [];
    //iterate through object keys
    for (let key in object) {
        output.push(object[key]);
    }
    //return output
    return output;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an object and return all keys as a string separated by a space
/*
I: object
O: string
*/
function keysToString(object) {
    //create var output as empty array
    var output = [];
    //iterate through object keys
    for (let key in object) {
        //add key to output
        output.push(key);
    }
    //return output and join output
    return output.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an object and return all key string values in a string separated by a space
/*
I: object
O: string
C: what if the object contains a key value that is not a string?
*/
function valuesToString(object) {
    //declare output var equal to empty array
    var output = [];
    //iterate through object
    for (let key in object) {
        //determine if key value is a string
        if (typeof object[key] === 'string') {
            //if true add key value to output
            output.push(object[key]);
        }
    }
    //return output and join output
    return output.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take one argument and return if input is an array or object
/*
I: an array or an object
O: string
*/
function arrayOrObject(collection) {
    //determine if input collection is an array
    if (Array.isArray(collection)) {
        //if true return 'array'
        return 'array';
    } else {
        //if not return 'object'
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take a string of one word and return it with first letter capitalized
/*
I: string
O: string
*/
function capitalizeWord(string) {
    //declare var output equal to string.split
    var output = string.split('');
    //capitalize first letter in output array
    output[0] = output[0].toUpperCase();
    //return output joined together
    return output.join('');
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take a string of words and return the string with all words capitalized
/*
I: string
O: string
*/
function capitalizeAllWords(string) {
    //declare var output equal to input string split
    var output = string.split(' ');
    //iterate through output array
    for (let i = 0; i < output.length; i++) {
        //reassign current value to capitalizeWord output
        output[i] = capitalizeWord(output[i]);
    }
    //return output joined
    return output.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an object with a name property and return 'Welcome <name>!'
/*
I: object
O: string
*/
function welcomeMessage(object) {
    // declare var output equal to 'Welcome <name>!'
    var output = "Welcome ";
    output += capitalizeWord(object.name);
    output += '!';
    //return output
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an object with a name and species property and return '<name> is a <species>'
function profileInfo(object) {
    //declare var output
    var output = capitalizeWord(object.name);
    output += ' is a ';
    output += capitalizeWord(object.species);
    //return output
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an object and if it has a noises array return it as a string with words separated by a space
//if object does not have noises array return 'there are no noises'
/*
I: object
O: string
*/
function maybeNoises(object) {
    //determine if object has a noises property with a filled array
    if (object.noises !== undefined && object.noises.length > 0) {
        //if true, return noises property joined as a string
        return object.noises.join(' ');
    } else {
        //if false return 'there are no noises'
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take a string of words and return true if word is in string, otherwise return false
/*
I: two strings
O: boolean
*/
function hasWord(string, word) {
    //let words equal array of string values split by a space
    let words = string.split(' ');
    //let isWord equal false
    let isWord = false;
    //iterate through aray words
    for (let i = 0; i < words.length; i++) {
        //determine if current value of words is same as input word
        if (words[i] == word) {
            //if true change isWord to true
            isWord = true;
        }
    }
    //return isWord
    return isWord;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take a name and object and add name to object's friends array then return object
/*
I: string and object
O: object
*/
function addFriend (name, object) {
    //add name to object's friends array
    object.friends.push(name);
    //return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}