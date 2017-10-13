// https://www.freecodecamp.org/challenges/spinal-tap-case
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()
*/


function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    re_delim = /[\s_-]/g
    var match_delim = str.match(re_delim);
    console.log(match_delim);
    return str;
}

spinalCase("Teletubbies say Eh-oh");

