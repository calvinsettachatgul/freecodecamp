// https://www.freecodecamp.org/challenges/spinal-tap-case
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()
*/


function spinalCase(str) {
    re_delim = /[\s_-]/g;
    var match_delim = str.match(re_delim);
    var new_str = str.replace(re_delim, "-");
    var re_conson = /([a-z])([A-Z])/g;
    var match_cons = new_str.match(re_conson);
    if(match_cons){
        match_cons.forEach(function(cons){
            new_str = new_str.replace(cons, cons[0] + "-" + cons[1]);
        });
    }   
    return new_str.toLowerCase();
}

console.log(spinalCase("The_Andy_Griffith_Show"));

