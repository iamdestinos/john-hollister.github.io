
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//using loops, console.log a triangle
function triangles(number) {
  //var string is equal to #
  var string = '#';
  //iterate loop
  for (let i = 0; i < number; i++) {
    //print current string
    console.log(string);
    string += '#';
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//print numbers 1-100
//if divisible by 3, print Fizz
//if divisible by 5, print Buzz
//if divisible by both, print FizzBuzz
function fizzBuzz(start, end) {
  //iterate through 1 to 100
  for (let i = start; i <= end; i++) {
    //determine if divisible by 3 and 5
    if(i % 3 === 0 && i % 5 === 0) {
      //if true print FizzBuzz
      console.log('fizzbuzz');
    } else if(i % 3 === 0) {
      //if divisible by 3 print Fizz
      console.log('fizz');
    } else if(i % 5 === 0) {
      //if divisible by 5 print Buzz
      console.log('buzz');
    } else {
      //print number
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//draw a chessboard of input size
function drawChessboard(size) {
  //create var chessboard equal to empty string
  var chessboard = '';
  //iterate loop
  for (let i = 1; i <= size; i++) {
    //iterate another loop
    for (let j = 1; j <= size; j++) {
      //determine if i is odd or even
      if(i % 2 === 1) {
        //if odd then first square in row is a space/odd j value is a space
        //determine if j is even or odd
        if(j % 2 === 1) {
          //if j is odd, add space to chessboard
          chessboard += ' ';
        } else {
          //if j is even, add # to board
          chessboard += '#';
        }
      } else if(i % 2 === 0) {
        //if i is even then first square in row is #/even j value is a space
        //determine if j is even or odd
        if(j % 2 === 0) {
          //if j is even add space to chessboard
          chessboard += ' ';
        } else {
          //if j is odd add # to chessboard
          chessboard += '#';
        }
      }
    }
    //add new line to string after every iteration of loop j
    chessboard += '\n';
  }
  /*
  for (let i = 1; i <= size * size; i++) {
    //determine if current value is even or odd
    if(i % 2 === 0) {
      //if even, add # to string
      chessboard += '#';
    } else if(i % 2 === 1) {
      //if odd add a space to string
      chessboard += ' ';
    }
    //determine if value of i is divisible to size
    if (i % size === 0) {
      //if true add new line to string
      chessboard += '\n';
    }
  }
  */
  //console.log chessboard
  console.log(chessboard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
