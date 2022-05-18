/**
 * FUNCTIONS:
 * 
 * 0.
 * 
 * 1. First a function must be defined before it can be executed or called on by invoking it.
 * 
 * 2. A function's parameters are the input values in the function definition while a function's
 * arguments are the values passed through the input when invoked
 * 
 * 3. syntax for a named function
 * 
 * 4. assign a function to a variable
 * 
 * 5. how to specify inputs and outputs
 * 
 * 6. scope: functions can see and modify variables from the global scope, the inverse is not true
 * 
 * 7. closures: functions form closures around the data they house. If an object returned from the
 * function and is referenced in the memory elsewhere, and the closure stays alive and can continue
 * to exist.
 */

// 1. Defining a function allows the code block to be invoked wherever it is needed by invoking it
// a function is defined like so:
function example(){ //using the function keyword followed by the name and parenthesis and curled brackets opens up for the code block
    console.log('This is from the example function'); // all code within the curled brackets will be acted upon whenever the function is called upon
}
//a function is then called, or invoked, like so:
example(); //if a function is only defined and never called upon, the code block will never have its statements passed

// 2. Parameters are the

//a function can also be defined like this:
var func = function(){ //when defined using a variable
    console.log('func');
}