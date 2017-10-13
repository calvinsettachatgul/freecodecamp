// https://www.freecodecamp.org/challenges/convert-html-entities
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()

*/

 
function convertHTML(str) {
    // &colon;&rpar;
    var html_entities = {
                            "&": "&amp;", 
                            "<": "&lt;", 
                            ">": "&gt;", 
                            "\"": "&quote;", 
                            "'": "&apos;", 
                            
                        }
    console.log(html_entities["&"]);
    console.log(html_entities["<"]);
    console.log(html_entities[">"]);
    console.log(html_entities["\""]);
    console.log(html_entities["'"]);
    str_arr = str.split("");
    var new_str_arr = str_arr.map(function(char){
        if(html_entities[char]){
            return html_entities[char];
        }else{
            return char;
        }
    });
    return new_str_arr.join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML('Dolce & "Gabbana"'));

