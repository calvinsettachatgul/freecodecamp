// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// 
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// 
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// 
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
// 
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
// 
// Here are some helpful links:
// 
// String.prototype.charCodeAt()
// String.fromCharCode()
// Run tests (ctrl + enter)

function rot13(str) { // LBH QVQ VG!

	var cap_alpha = /[A-Z]/g;
	var str_arr = str.split("");
	var result_str = [];
	
	// iterate through the string array
	for (var i = 0; i < str_arr.length; i++){

		// check if each letter is a capital letter
		var new_char_code;
		if( str_arr[i].match(cap_alpha) ){
			// convert the letter to 13 unicode values ahead
			new_char_code = str_arr[i].charCodeAt(0) - 13;
			console.log(new_char_code);
			if  (new_char_code < 65) {
				new_char_code = 90 - (65 - new_char_code) + 1 ;
			}
			console.log("new_char_code", new_char_code);
			console.log( String.fromCharCode(new_char_code));
			result_str.push( String.fromCharCode(new_char_code));
		}
		else{
			result_str.push( str_arr[i]);
		}
			
	}
	 
	return result_str.join("");
}

// Change the inputs below to test

console.log( rot13("SERR PBQR PNZC"));
