// https://www.freecodecamp.org/challenges/pig-latin
/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
*/

function translatePigLatin(str) {
    
    var vowel_re = /[aeio]/; 
    if (str[0].match(vowel_re)){
        return str + "way";
    }else{
        var vowel_index = str.search(vowel_re);
        var consonant_cluster = str.substr(0, vowel_index);
        return str.substr(vowel_index) + consonant_cluster + 'ay';
    }
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("apple"));
