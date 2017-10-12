// https://www.freecodecamp.org/challenges/diff-two-arrays

/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()

*/


function diffArray(arr1, arr2) {
    var newArr = [];
    let present = {};
    
    var combined_arr = arr1.concat(arr2)
    console.log(combined_arr);

    combined_arr.forEach(function(el){
        if(present[el] == el){
            present[el] = false;
        }else{
            present[el] = el;
        }

    })

    Object.keys(present).forEach(function(el){
        if(present[el] !== false){
            newArr.push(present[el]);
        }
    })

    // Same, same; but different.
    return newArr;
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));

