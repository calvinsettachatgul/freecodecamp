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

    let present_arr1 = {};
    let present_arr2 = {};

    arr1.forEach(function(el){
        present_arr1[el] = true;
    })

    arr2.forEach(function(el){
        present_arr2[el] = true;
    })


    Object.keys(present_arr1).forEach(function(el){
        if(present_arr2[el] !== true){
            newArr.push(parseInt(el));
        }; 
    })
    Object.keys(present_arr2).forEach(function(el){
        if( present_arr1[el] !== true){
            newArr.push(parseInt(el));
        }; 
    })

    // Same, same; but different.
    return newArr;
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));

