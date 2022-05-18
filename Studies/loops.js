/**
 * LOOPS:
 * 
 * 0. When an action or a series of actions should be performed multiple times, a loop can be used.
 * Loops will perform actions within their block of code a number of times until a condition is met.
 * 
 * 1. while, for, for-in loops are the three different types of loops used in javascript
 * 
 * 2. be able to loop any number of times, forward counting up to some limit, backword counting
 * down to 0
 * 
 * 3. It is possible to loop over an array, forwards and backwards using for loops.
 * 
 * 4. With for-in loops, it is possible to loop over objects.
 */

// 1. While loops are loops that will continuously go through the actions in their code block while a given condition is true
var x = 0;
while(x < 5){
    console.log(`${x} is less than 5`);
    x++; //it is important to ensure the while loop has actions that will eventually cause the condition to be false, or else the loop will carry on infinitely
}
// for loops will run a specific number of times based on a start value and an end value
for(let i = 0; i < 10; i++){ //variable i serves as the starting value that is compared to the conditional
    console.log(i); //before running the code block i is checked with the conditional and if true the block runs
                    //and after each iteration of running the code block i is updated, in this case by increment
}
// for-in loops loop through object properties and will only iterate once for each object property
var obj = {prop1: 1, prop2: 2, prop3: 3};
for(let key in obj){ //the key variable serves as the key in a key-value pair in object obj
    console.log(key); //when key is referenced, it refers to the current key being iterated over
}

// 2. In order to loop any number of times a for loop is commonly used
// to count up to some limit, a for loop is often written as:
var x = 10; //x can be changed to alter the number of loops
for(let i = 0; i < x; i++){ //with i starting from zero, it will keep iterating through and incrementing until it is equal to variable x
    console.log(i);
}
//to count from a number and go down to zero, a for loop is often written as:
var y = 10; //y can be changed to alter the number of loops
for(let i = y; i > 0; i--){ //having i start as a value greater than zero and having the conditional check if its greater than zero allow the loop to count down so long as i will decrement instead of incrementing
    console.log(i);
}

// 3. A common usage of for loops is to loop over an array to access the individual values within.
// Usually a for loop starts from the beginning of an array and loops through to the end like so:
var arr = [true, false, 'word', 12];
for(let i = 0; i < arr.length; i++){ //make sure i starts at 0 since array indexes always start at 0 
    //i can be compared to the length property of an array so it only iterates for the number of values in an array
    console.log(arr[i]);
}
//If a loop would like to be done from the end of an array back to the beginning it can be done as:
var arr = [true, false, 'word', 12];
for(let i = arr.length - 1; i >= 0; i--){ //i is the length property minus 1 because the indexes start at 0, and thus the last index isn't the length property but one less
    //the conditional makes sure 0 will pass since 0 is the first index in the array, the conditional could also pass as i > -1
    //remember to decrement as the iteration is starting from the highest number and going down
    console.log(i);
}

// 4. Using for-in loops it is possible to loop over an object and access each value in it like so:
var obj = {prop1: true, prop2: false, prop3: 'word', prop4: 12};
for(let key in obj){
    console.log(obj[key]); //remember to use bracket notation for the key variable since if it was dot notation it would try and print a key value pair with a key named key each iteration
}