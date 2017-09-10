// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// 
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
// 
// Here are some helpful links:
// 
// Arguments object
// Array.prototype.filter()

function destroyer(arr) {
	 var not_include = Object.values(arguments).slice(1);
	 var new_arr = arr.filter(function(el){
	 	return !not_include.includes(el);
	 })
	  return new_arr;
}

console.log (destroyer([1, 2, 3, 1, 2, 3], 2, 3) );

