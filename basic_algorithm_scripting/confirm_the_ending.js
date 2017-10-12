// https://www.freecodecamp.org/challenges/confirm-the-ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// 
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
// 
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
// 
// Here are some helpful links:
// 
// String.prototype.substr()
// String.prototype.substring()


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var result = false;
  
  for(var i = 0; i < str.length; i++){
    if (str.substr(i, str.length - 1) == target){
        result = true;
    }
  }
  return result;
}

 console.log( confirmEnding("Bastian", "n") );

