/**
 * CONTROL FLOW:
 * 
 * 0. Control Flow is how a computer runs javascript code from top to bottom. Since there are instances
 * where blocks of code should only run if certain criteria are met, control flow can be altered in
 * order to have different actions carried out based on conditions.
 * 
 * 1. If statements have a block of code acted upon only if a listed condition is true.
 * 
 * 2. Else if statements are carried out only if a given if statement is false and a new condition is met.
 * 
 * 3. Else statements are carried out in cases where an if statement and any else if statements are false.
 * 
 * 4. Switch statements perform different actions based on different conditions.
 */

// 1. If statements are a block of code that will run if a condition is true when the if statement is reached.
var x = 1;
if(x === 1){ //if and only if variable x is equal to numerical value 1 will the code block run
    console.log('x is equal to one');
}
if(x === 2){ //since variable x is equal to 1, this statement will not run and be passed over
    console.log('x is equal to two');
}

// 2. Else if statements are after an if statement and are checked only when an if condition is false
var x = 2;
if(x === 1){ //since x is not equal to 1, this will not run
    console.log('x is equal to one');
} else if(x === 2){ //since the above if statement did not pass, it is checked to see if this is true
    console.log('x is equal to two'); //since this if statement is true, it will run
}

if(x === 2){ //since this condition is true, this block of code will run
    console.log('this is true');
} else if( x < 5){ //though this condition is true, it will not be checked or passed since the above if statement is true
    console.log('x is less than 5');
}

// 3. Else statements serve as a default that pass when the if statement and any else if statements are all false
var x = 1;
var y = 1;
if(x > y){
    console.log('x is greater than y');
} else if(x < y){
    console.log('x is less than y');
} else { //since the above if and else if conditions are false, the else statement runs
    console.log('x is equal to y');
}

if(x === y){
    console.log('x and y are equal');
} else { //since the if statement is true, else will not run
    console.log('x and y are not equal');
}

// 4. switch statements take in a value and perform actions based on various conditions
switch(input){ //in switch statements an input value is checked with each case listed 
    case 0: //if the input is equal to 0, these actions are performed
        console.log('input is zero');
        break; //a break statement stops the code block and has it move on from the switch block of code
        //without a break statement the code would run through all actions until the end of the switch block
    case 1: //if input is equal to zero, actions start from here
        console.log('input is one');
        break;
    default: // if no case matches the input, perform these actions
        console.log('input is neither zero nor one');
        //since default will be on the bottom of the switch code block, no break statement is needed
}