/**
 * FUNCTIONS:
 * 
 * 0. Functions are blocks of code that are designed to carry out a particular task and will be executed when called upon
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

// 2. Parameters are the values serving as inputs in a function definition
function example2(value){ //value is the one parameter of function example2
    console.log(value);
}
// when invoking a function the inputs are arguments
example2('This is an argument'); //arguments are the actual values passed when invoking a function

// 3. For a named function the syntax is the function keyword, the function name, any parameters, and the code block
function example3(parameter){ //function keyword, name, and any parameters
    //code block
    return parameter;
}

// 4. It is possible for a function to be assigned to a variable like this:
var func = function(){ //when defined using a variable a function does not need a name
    console.log('func');
}

// 5. When it comes to specifying inputs, the datatype of the parameters are not specified, however,
// outputs from a function can be specified as the output can be a variable of a specific data type
// in the function. So in a function like so:
function example4(param){
    let output = []; //the variable intended for output is assigned as an array
    output.push(param);
    return output; //and since the returned value is the output variable, the datatype of the output of the function will always be an array
}

// 6. The scope of a function is a function, or local scope, it can access any global variable, but anything scoped globally cannot access variables/values in the function scope
var ex = 2;
function example5(input){
    let ex2 = 5;
    ex = input + ex; //the function can access variable ex since ex is globally scoped
    console.log(ex);
}
example5(5); //will work without issue
console.log(ex2); //this will cause an error as ex2 is only defined within the function scope

// 7. Functions form closures around the data they house, any variables/values stored within will 
// be lost once the function has run its course. However, if a value within the function is referenced elsewhere
// in the code, it is possible for the closure to persist.
function exampleCount(){
    let counter = 0;
    return function(){ //here the function is returning an anonymous function that adds to the function variable counter and returns it
        counter++; 
        return counter;
    }
}

var countX = exampleCount(); // countX will result in function(){ counter++; return counter;}
countX(); //will result in count += 1, or 1
countX(); //will result in count += 1, or 2
var count = countX(); //count will equal the returned value of 3