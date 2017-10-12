// https://www.freecodecamp.org/challenges/introducing-else-statements

function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5 ) {
    result = "Bigger than 5";
  }else{
    result = "5 or smaller";
  }
  
  // Only change code above this line
  return result;
}

// Change this value to test

console.log( "testElse(4)",testElse(4) );
console.log( "testElse(5)",testElse(5) );

// there is something buggy about this test that it does not pass the directions say combine into a single if else statement. Does that mean there should not be a return result line?
// I don't know why the FCC test cases are not passing for 5 or less
// there are some comments on the discussion forum about a bug
