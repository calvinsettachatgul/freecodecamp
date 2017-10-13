// https://www.freecodecamp.org/challenges/missing-letters

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str){
    var lett_ind = str.charCodeAt(0);
    console.log(lett_ind);
    var result = '';
    str.split("").some(function( lett){
       var lett_from_ind = String.fromCharCode(lett_ind);
       if(lett_from_ind !== lett){
           result += lett_from_ind;
       }
        lett_ind++;
        return (lett_from_ind !== lett);
    });
    return !result? undefined : result;
}


console.log(fearNotLetter("abce") == 'd');
console.log(fearNotLetter("abcdefghjklmno") == 'i');
