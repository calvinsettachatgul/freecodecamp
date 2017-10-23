// https://www.freecodecamp.org/challenges/sum-all-primes

/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()
*/
function sumPrimes(num) {
    function isPrime(num){
        var square_limit = Math.floor(Math.sqrt(num));
        console.log(square_limit);
    }
    isPrime(num);
return num;
}

console.log(sumPrimes(10));
