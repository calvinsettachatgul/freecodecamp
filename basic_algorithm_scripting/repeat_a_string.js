// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.
// 
// Here are some helpful links:
// 
// Global String Object
// Run tests (ctrl + enter)


function repeatStringNumTimes(str, num) {
  // repeat after me
  var counter = num;
  var result = '';
  
  while (counter > 0){
    result += str;
    counter--;
  }
  return result;
}

console.log( repeatStringNumTimes("abc", 3));

