// https://www.freecodecamp.org/challenges/search-and-replace


function myReplace(str, before, after) {

    var str_arr = str.split(" ");
    var replace_index = -1;
    for( var i = 0; i < str_arr.length ; i++){
        if(str_arr[i] === before){
           replace_index = i;
        }    
    }
    console.log(replace_index);

    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

