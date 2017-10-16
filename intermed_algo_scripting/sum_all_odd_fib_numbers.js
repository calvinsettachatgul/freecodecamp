// https://www.freecodecamp.org/challenges/sum-all-odd-fibonacci-numbers
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:
*/

function sumFibs(num) {
    var prev = 1;
    var curr = 1;
    var next = curr + prev;
    var result = 1;
     while (curr < num){
        if ( curr % 2 == 1){
            result += curr;
        }
        prev = curr;
        curr = next;
        next = curr + prev;
     }

    return result;
}



console.log(sumFibs(10));

