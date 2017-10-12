// https://www.freecodecamp.org/challenges/search-and-replace


function myReplace(str, before, after) {

    var str_arr = str.split(" ");
    var replace_index = -1;
    for( var i = 0; i < str_arr.length ; i++){
        if(str_arr[i] === before){
           replace_index = i;
        }    
    }

    if( before !== before.toLowerCase()){
        after = after[0] + after.substr(1);
    }
    
    str_arr.splice(replace_index, 1, after);

    return str_arr.join(" ");
}

console.log( myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

