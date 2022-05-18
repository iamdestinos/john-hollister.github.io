/**
 * OPERATORS:
 * 
 * 0. Operators are symbols used to perform operations on values and variables.
 * 
 * 1. Assignment operators assign values to variables.
 * 
 * 2. Arithmetic operators perform various mathematical operations.
 * 
 * 3. Comparison operators compare values and return a boolean.
 * 
 * 4. Logical operators determine logic between variables or values.
 * 
 * 5. Unary operators (!, typeof, -)are operators used on only a single operand.
 * 
 * 6. Ternary operator (a ? b: c) assign a value to a variable based on a condition. 
 */

// 1. The basic assignment is the = symbol
var example = true; // = is assignment

// 2. Arithmetic operators perform various mathematical operations
var add = 2 + 2; // addition has value result in 4
var sub = 10 - 4; //subtraction has value result in 6
var mult = 4 * 4; //multiplication has value result in 16
var div = 4 / 2; //division has value result in 2
var mod = 5 % 4; //modulo has value result in remainder, or 1
//arithmetic operators can be combined with the assignment operator to assign a value based on the original value
var example = 10;
example += 5; //add 5 to example results in variable being equal to 15
example -= 4; //subtract 4 from example results in variable being equal to 11
example *= 2; //multiple 2 and example results in variable being equal to 22
example /= 11; //divide example with 11 results in variable being equal to 2
example %= 1; //modulo example with 1 results in variable being equal to 0

// 3. Comparison operators are used to compare equality or differences between values, resulting in a boolean
// Equality operator === compares the values to see if they are absolutely equal
var isEqual = 10 === 10; //results in variable being true as 10 is equal to 10
var isEqual = 10 === '10'; //results in variable being false as one 10 is a number and the other a string
// Equality operator == compares to see if loosely equal
var isEqual = 10 == '10'; //results in variable being true
// Greater than operator > and less than operator < check if compared values truly are greater than or less than each other
var greater = 10 > 5; //returns true as 10 is greater than 5
var greater = 5 > 10; //returns false as 5 is not greater than 10
var less = 5 < 10; //returns true as 5 is less than 10
var less = 10 < 5; //returns false as 10 is not less than 5
// Greater/Less than can be combined with an = to see if the comparison is greater/less than OR equal to a value
var comp = 10 > 10; //results in false as 10 is not greater than 10
var comp = 10 >= 10; //results in true as 10 is equal to 10 
var comp = 10 <= 10; //results in true as 10 is equal to 10

// 4. Logical Operators determine logic between variables or values
// the and operator && checks if both comparisons are true
var and = 5 < 10 && 5 < 7; //results in true as 5 is less than 10 and 7
var and = 5 < 10 && 5 < 4; //results in false as 5 is not less than 4
// the or operator || checks if either comparison is true
var or = 5 < 10 || 5 < 7; //results in true as 5 is less than both 10 and 7
var or = 5 < 10 || 5 < 4; //results in true as 5 is less than 10
var or = 5 < 3 || 5 < 4; //results in false as 5 is not less than 3 or 4
//the not operator ! checks if the inversion of a comparison is true
var not = !(10 === 10); //results in false as while 10 is equal to 10, the not operator is checking if the statement is not true

// 5. Unary operators are operators used on a single operand
// The unary plus operator + converts string representations of numbers, booleans, and null to number values
var example = +'3'; //variable results in value of 3 as a number
var example = +true; //variable results in value of 1
var example = +false; //variable results in value of 0
var example = +null; //variable results in value of 0
//if a value cannot be converted to a number it results in NaN
var example = +'not number'; //variable results in NaN
//unary negation - performs the same action as unary plus but it will also negate the value
var negate = -'3'; //variable results in numerical value -3
var negate = -true; //variable results in -1
var negate = -false; // variable results in 0
var negate = -null; // variable results in 0
//increment ++ increases a numerical value in a variable by one
var count = 1;
count++;
console.log(count); //prints => 2
//decrement -- decreases a numerical value by one
var count = 1;
count--;
console.log(count); //print => 0
//The logical operator not ! is also an unary operator
var example = !true; //results in false
//the typeof returns a string indicating the data type of a value
var ex = typeof 3; //results in 'number'
var ex = typeof 'example'; //results in 'string'
var ex = typeof true; // results in 'boolean'
var ex = typeof null; //results in 'object'
var ex = typeof NaN; //results in 'number'
var ex = typeof function(val){return val}; //returns 'function'
var ex = typeof []; //results in 'object' 
var ex = typeof {}; //results in 'object'
var ex = typeof new Date(); //results in 'object'
var ex = typeof undefined; //results in 'undefined'
//the delete operator is used to remove properties from an object
var obj = {apples: 1, oranges: 2};
delete obj.apples;
console.log(obj); //prints => {oranges: 2}

// 6. The Ternary operator is a simplified form of an if/else
var example = 5 < 10 ? 'yes': 'no'; //results in 'yes' as 5 < 10 is true
var example = 5 > 10 ? 'yes': 'no'; // results in 'no' as 5 > 10 is false