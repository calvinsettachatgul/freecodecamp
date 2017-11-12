// https://www.freecodecamp.org/challenges/smallest-common-multiple

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:
*/

function smallestCommons(arr){
    var min =  Math.min(arr[0], arr[1]);
    var max =  Math.max(arr[0], arr[1]);
    var counterMin = 1; 
    var counterMax = 1; 
    var min_prod = min * counterMin
    var max_prod= max * counterMax
    while( min_prod !== max_prod){
        if( min_prod < max_prod){
            counterMin += 1;
        }
        else if( max_prod < min_prod){
            counterMax += 1;
        }
        min_prod = min * counterMin;
        max_prod = max * counterMax;
    }
    
    return min_prod;
    
}

console.log( smallestCommons([4, 10]));

