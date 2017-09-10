// Falsy Bouncer
// Remove all falsy values from an array.
// 
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// 
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
// 
// Here are some helpful links:
// 
// Boolean Objects
// Array.prototype.filter()

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  new_arr = arr.filter (function(el){
	    return (Boolean(el) != false);
  })
  return new_arr;
}

console.log( bouncer([7, "ate", "", false, 9]));
console.log( bouncer([false, null, 0, NaN, undefined, ""]));
