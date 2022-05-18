/**
* DATA TYPES:
* 
* 0. When storing information in a variable, how it is
* stored is determined by the data type. The most commonly
* used data types are numbers, strings, booleans,
* arrays, and objects.
* 
* 1. Numbers are a data type which store a numerical value.
* 
* 2. Strings are a series of characters contained in quotes.
* 
* 3. Booleans are either true or false.
* 
* 4. Arrays are an ordered list of various values.
* 
* 5. Objects contain values in an unordered series of
* key-value pairs.
* 
* 6. Functions are code blocks that perform a particular
* series of actions.
* 
* 7. When a variable lacks a value, the variable and
* its type is undefined.
* 
* 8. Null is similar to undefined, but an intentional
* absence of a value.
* 
* 9. NaN, or Not-a-Number, is a value for when a number
* data type is trying to store a value that isn't a
* numerical value.
* 
* 10. Infinity is when a numerical value exceed the
* upper or lower limit for a number.
* 
* 11. Primitive data types/Complex data types
* 
* 12. BY COPY/BY REFERENCE
*/

// 1. Numbers are a data value that store a numerical data type
var num = 2; //usually a nunber is an integer value
var decimal = 0.91; //can be a decimal value
var exp = 1.2987E+10; //can be anumber with an exponential value

// 2. Strings are a data value made up of a series of characters
var string = 'This is a string'; //can use single quotes
var string2 = "This is also a string"; //or double quotes

// 3. Booleans are either true or false
var boolean = true;
var boolean2 = false;
var boolean3 = 1 < 10; //comparison expressions result in a boolean

// 4. Arrays are an ordered list of various values
var array = [1, 'arrays can store any kind of value', false, []];
// Arrays are accessed by index values starting from 0
console.log(array[0]); //prints first value in array => 1
console.log(array[2]); //prints third value in array => false

// 5. Objects store values in an unordered list of
// key-value pairs
var obj = {prop1: 1, prop2: 'objects can store any kind of value', prop3: true, prop4: []};
//values are accessed by either bracket or dot notation
console.log(obj.prop1); //prints value at key prop1 => 1
console.log(obj['prop3']); //prints value at key prop3 => true

// 6. Functions are blocks of code that perform a series of actions
function test(){
  console.log('Whenever test is called this happens');
}
test(); //will print the message in function block

// 7. When a variable lacks a value, it is undefined
var example;
console.log(example); //prints value of example => undefined
//a value can also be reassigned as undefined
var example2 = 1;
example2 = undefined;
console.log(example2); //prints => undefined

// 8. Null is an intentional absence of value
var nullEx = null;
console.log(nullEx); //prints => null

// 9. NaN, or Not-a-Number, is when a non-numerical
//value is assigned or used in a numerical type
var value1 = 10;
var value2 = 'string';
console.log(value1 / value2); //causes error because value2 is NaN

// 10. Infinity is when a numerical values exceeds the
//upper limit for what can be stored
var num = 1.797693134862315E+308;
var inf = num * 1.001;
//and -infinity is a numerical value that exceeds the lower limit for what can be stored
var negInf = num * -1.001;

// 11. Primitive (simple) data types are data types
// that aren't objects and have no methods.
//They are:
var num = 10; // numbers
var string ='strings'; //strings
var boolean = true; //booleans
var und = undefined; //undefined
var nul = null; //null

// 12. Complex data types are large data types
// capable of storing an ever increasing amount of values
//the complex data types are:
var array = [num, string, boolean, und, null]; //arrays
var obj = {number: num, string: string, bool: boolean}; //objects

// 13. When copying a value in a variable, there are
// two different ways the value is copied. When copying
// a simple data type, it is copy by value, where a
// distinct copy is made
var example1 = 101;
var copy1 = example1;
example1 += 10;
console.log(example1); //prints => 111
console.log(copy1); //prints => 101
//When copying a complex data type however, the copy
// is a copy by reference, which are sharing the same link
var example2 = [1, 2, 3];
var copy2 = example2;
example2[2] = 0;
console.log(example2); //prints => [1, 2, 0]
console.log(copy2); //prints => [1, 2, 0]