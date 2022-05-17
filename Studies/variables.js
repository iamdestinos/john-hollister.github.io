/**
* VARIABLES:
*
* 0. To hold things in memory during the life cycle
* of a program, we can use variables. Variables are
* named identifiers that can point to values of a
* particular type, like a number, string, boolean,
* array, object, or another data-type. Variables are
* called so because once created, we can change the 
* value (and type of value) to which they point
*
* 1. To create a variable we use the keyword var 
* (or let or const), followed by a name (id or alias)
* for our variable.
*
* 2. There are two phases of using variables:
* declaration and initialization (assignment)
*
* 3. There are three variable declaration phrases:
* var, let, and const, that are influenced differently
* by scope.
*
* 4. Hoisting is javascript's behavior of moving
* declarations to the top of the scope.
*/

// 1. Declaration
// At the declaration phase, the variable myName is
// undefined because we have not initialized it to anything
var myName;
console.log(myName); //prints => undefined

// 2. Initialization or Assignment
// When you assign a value to an undeclared variable
myName = 'john';
console.log(myName); //prints => john

// 3. Re-assignment
// Changing or updating the value of a previously
//assigned variable
myName = 'bob';
console.log(myName); //prints => bob

// 4. Var keyword
// The var keyword is the basic variable keyword
// and is distinguished for always having a global
// scope.
if(true){
  var a = 'variables with var keyword are global';
}
console.log(a); //prints => variables with var keyword are global
// Variables declared with var can also be redeclared
// without issue
var b = 'first declaration';
var b = 'second declaration';
console.log(b); //prints => second declaration
// If a variable is declared without a keyword, it is
// treated like a variable using the var keyword.
if(true){
  c = 'c has no keyword';
}
console.log(c); // prints => c has no keyword

// 5. Let and Const keywords
// Let and const are variable keywords that have two
// prominent features different from keyword var.
// Firstly, let and const make the variable block scoped
if(true){
  let example = 'This variable is block scoped';
  const example2 = 'so is this one';
  console.log(example); // prints => This variable is block scoped
}
console.log(example2); //will cause error example2 does not exist
// Secondly, a variable declared with let or const
// cannot be redeclared like a variable using var.
//let d = 1;
//let d = true; //will cause an error
// The const keyword also has a unique feature where
// it cannot be reassigned at all
const ex = 'This variable cannot be reassigned';
ex = 'This will fail'; //will cause an error, const ex cannot be reassigned

// 6. Hoisting
// Hoisting is a behavior in javascript where all
// declarations are moved to the top of their scope.
// So in an example such as this:
var a = true;
if(a === true){
  var b = false;
  let c = 4;
  console.log(a);
}
function example(input){
  console.log(input);
}
// javascript will treat it as if it like this:
function example(input){ //functions are hoisted to the top of the code
  console.log(input);
}
var a; // followed by all var declarations
var b;
a = true;
if(a === true){
  let c; //let and const will only get hoisted to the top of their scope
  b = false;
  c = 4;
  console.log(a);
}