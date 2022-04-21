// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
/*
I: three strings
O: object
*/
function makeContact(id, nameFirst, nameLast) {
    //create output object
    var output = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
    //return output
    return output;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //imagine contacts holds array of contact objects
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
        },
        //find contact take full name and return contact if found or undefined if not
        findContact: function(fullName) {
            //iterate through contacts array
            for (var i = 0; i < contacts.length; i++) {
                //create var contactName equal to current contact first and last name
                var contactName = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                //determine if full name is same as full name of current contact
                if (fullName == contactName) {
                    //if true return current contact
                    return contacts[i];
                }
            }
            //
        },
        //remove contact removes contact from array
        removeContact: function(contact) {
            //iterate through contacts array
            for (var i = 0; i < contacts.length; i++) {
                //determine if current contact is same as contact input
                if (contact == contacts[i]) {
                    //if true remove current contact in contacts array
                    contacts.splice(i, 1);
                }
            }
        },
        //put full name of each contact in string
        printAllContactNames: function() {
            //create var string
            var string = '';
            //iterate through contacts array
            for (var i = 0; i < contacts.length; i++) {
                //add first and last name of current contact to string
                string += contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                //determine if current contact is not last in array contacts
                if (i !== contacts.length - 1) {
                    string += '\n';
                }
            }
            //return string
            return string;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
