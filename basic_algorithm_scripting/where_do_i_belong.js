
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
	var sorted_arr = arr.sort(function(a, b){
		return a > b;
	});	
	 console.log(sorted_arr);
	result_index = sorted_arr.length;
	

	for( var i = 0; i < sorted_arr.length ; i++){
		var curr = sorted_arr[i];
		var next  = sorted_arr[i+ 1];
		if (curr == num){
			result_index = i
		}
		else if( curr < num && next >= num){
			result_index = i+ 1;
		}
	}
	
	return result_index;
}

// console.log( getIndexToIns([40, 60], 50));
// console.log( getIndexToIns([41, 60, 50,  61], 52));
// console.log( getIndexToIns([3, 10, 5], 3));
console.log( getIndexToIns([2, 5, 10], 15));


