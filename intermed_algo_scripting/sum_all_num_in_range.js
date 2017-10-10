// https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
*/


function sumAll(arr) {
    var sum = 0 
    var end_ind = Math.max(arr[0], arr[1]);
    var start_ind  = Math.min(arr[0], arr[1]);
    for (var i = start_ind ; i <= end_ind; i++){
        sum += i;
    };
    return sum;
}

// sumAll([1, 4]);

console.log( sumAll([1,4]) == 10 );
console.log( sumAll([0,2]) == 3 );
// console.log( sumAll([1,4]));
// console.log( sumAll([0, 2]));
