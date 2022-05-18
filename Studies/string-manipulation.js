/**
 * STRING-MANIPULATION:
 * 
 * 0. 
 * 
 * 1. with operators
 * 
 * 2. with string methods
 */

// 1. manipulating strings with operators use the addition operator
var example = 'hello';
var example2 = example + ' world'; //results in 'hello world'
//It is also possible to use the += operator
var example = 'add these';
example += ' together'; // results in 'add these together'

// 2. Strings have a number of methods that allow them to be manipulated
// There are three methods to extract a part of a string
// slice extracts part of a string and returns it in a new string
var example = 'hello world';
var slice = example.slice(1); //results in 'ello world'
var slice2 = example.slice(1, 3); //results in 'el'
// substring, like slice extracts part of a string and returns it in a new string
var example = 'hello world';
var sub = example.substring(0, 5); //results in 'hello'
//substr is similar to slice but the second parameter is the length of the extracted part
var example = 'hello world';
var str = example.substr(6, 5); //results in 'world'
// replace will replace the first instance of a specific value with another value
var example = 'hello world world';
var rep = example.replace('world', 'there'); //results in 'hello there world'
//toUpperCase and toLowerCase will return a string with all characters in uppercase or lowercase forms
var example = 'Hello World';
var upper = example.toUpperCase(); //results in 'HELLO WORLD'
var lower = example.toLowerCase(); //results in 'hello world'
// concat will join two or more strings together
var text1 = 'hello';
var text2 = 'world';
var text3 = text1.concat(' ', text2); //results in 'hello world'