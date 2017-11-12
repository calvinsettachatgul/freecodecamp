/*
https://www.freecodecamp.org/challenges/finders-keepers

Finders Keepers
Create a function that looks through an array (first argument) 
and returns the first element 
in the array that passes a truth test (second argument).

Array.prototype.filter()
*/


function findElement(arr, func) {
    var first;
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            first = arr[i];
            return first;
        }
    }
    return first;
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
