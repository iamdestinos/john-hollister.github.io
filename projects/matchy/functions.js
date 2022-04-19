/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare function search
/*
I: array of objects, string value
O: object of search value OR null
*/
function search(array, string) {
    //declare output var
    var output;
    //iterate through array
    for (let i = 0; i < array.length; i++) {
        //determine if string input and name property of selected object are the same
        if (string == array[i].name) {
            //if true output is equal to current place in array
            output = array[i];
        }
    }
    //determine if output has a value
    if (output !== undefined) {
        //if output has value return output
        return output;
    } else {
        //if output has no value return null
        return null;
    }
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare function replace
/*
I: array of objects, string, object
O: N/A
*/
function replace(animals, name, replacement) {
    //iterate through array animals
    for (let i = 0; i < animals.length; i++) {
        //determine if input name is same as name property of current object
        if (name == animals[i].name) {
            //if true reassign current value of animals to replacement
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare function remove
/*
I: array of objects, string
O: N/A
*/
function remove(animals, name) {
    //iterate through array animals
    for (let i = 0; i < animals.length; i++) {
        //determine if string name is same as name property of current object
        if (name == animals[i].name) {
            //if true, remove current value of animals
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare function add
/*
I: array of objects, object
O: N/A
*/
function add(animals, animal) {
    //declare var nameExists and assign false
    let nameExists = false;
    //declare var speciesExist and assign false
    let speciesExist = false;
    //declare var nameUnique and assign true
    let nameUnique = true;
    //determine if animal has name property with length greater than 0
    if (animal.name.length > 0) {
        //if true reassign nameExists to true
        nameExists = true;
    }
    //determine if animal has species property with length greater than 0
    if (animal.species.length > 0) {
        //if true reassign speciesExist to true
        speciesExist = true;
    }
    //iterate through animals array
    for (let i = 0; i < animals.length; i++) {
        //determine if name property is shared with any object in animals
        if (animals[i].name == animal.name) {
            //if name property is shared reassign nameUnique to false
            nameUnique = false;
        }
    }
    //if all previous determine is true, add animal to animals
    if (nameExists && speciesExist && nameUnique) {
        animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
