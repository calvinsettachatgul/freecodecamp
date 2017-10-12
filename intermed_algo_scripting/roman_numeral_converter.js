// https://www.freecodecamp.org/challenges/roman-numeral-converter

/*

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()

*/

function convertToRoman(num){

    var changing_num = num;
    var roman_num = '';
    var divider_idx = 0;
    var divide_result;
    var roman_key = [
                    [1000, "M"], 
                    [500, "D"], 
                    [100, "C"], 
                    [50, "L"], 
                    [10, "X"], 
                    [5, "V"], 
                    [1, "I"], 
                    ]

    divide_result = changing_num / roman_key[divider_idx][0];
    
    while( changing_num > 5) {
        divide_result = changing_num / roman_key[divider_idx][0];
        if (divide_result >= 1){
           changing_num /= roman_key[divider_idx][0] 
            roman_num += roman_key[divider_idx][1]
        }else{
            divider_idx++;
        }
        console.log(changing_num);
    }

    return roman_num;
}

console.log( convertToRoman(1000) === 'XII');
console.log( convertToRoman(1000));

