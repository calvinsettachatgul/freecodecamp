print = require("pretty-print");

console.log("Running Basic Javascript...");
console.log("Executes whenever there is a file change using grunt.");
////
function golfScore (par, strokes){
	result = '';
	if ( strokes == 1){
		result = "Hole-in-one!";	
	}
	else if ( strokes - par <= -2){
		result = "Eagle";
	}
	else if (strokes - par <= -1){
		result = "Birdie";
	}
	else if (strokes == par){
		result = "Par";
	}
	else if (strokes - par == 1){
		result = "Bogey";
	}
	else if (strokes - par == 2){
		result = "Double Bogey";
	}
	else{
		result = "Go Home!";
	}

	return result;
}

function caseInSwitch(val){
	var answer = "";
	
	switch(val){
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
		
	}
	return answer;
}

//console.log( caseInSwitch(1));
/*
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"
*/

function switchOfStuff(val) {
  var answer = "";
	switch( val){
		case "a":
			answer = "apple";
			break;
		case "b":
			answer = "bird";
			break;
		case "c":
			answer = "cat";
			break;
		default:
			answer = "stuff";
			break;
	}

  // Only change code below this line
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
// console.log( switchOfStuff(1));


function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
	switch (val){
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Mid";
 			break; 
		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
// sequentialSizes(1);


function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
//  if (val === "bob") {
//    answer = "Marley";
//  } else if (val === 42) {
//    answer = "The Answer";
//  } else if (val === 1) {
//    answer = "There is no #1";
//  } else if (val === 99) {
//    answer = "Missed me by this much!";
//  } else if (val === 7) {
//    answer = "Ate Nine";
//  }
	switch (val){
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The Answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed me by this much!";
			break;
		case 7:
			answer = "Ate Nine";
			break;
	}

  // Only change code above this line  
  return answer;  
}

// Change this value to test
// console.log( chainToSwitch(7));

function isLess(a, b) {
  // Fix this code
	return a < b;
}

// Change these values to test
// isLess(10, 15);

var count = 0;

function cc(card){
	
	var instruction;
	instruction = "";
	switch (card){
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                        count++;
                        break;
                case 10:
                case "J":
                case "Q":
                case "K":
                case "A":
                        count--;
                        break;
		default:
			break;
        }

	 if (count > 0){
		return count + " Bet";
	 }
	 else {
		return count + " Hold";
	 }
		
}

// console.log( cc(2)); +1
// console.log( cc("J")); -1 
// console.log( cc(9)); 0
// console.log( cc(2)); +1
// console.log( cc(7)); 1

var myDog = {
	name: "Pee Wee",
	legs: 4,
	tails: 1,
	friends: "Popcorn"
};


var lookup = {
     "alpha":  "Adams",
     "bravo":  "Boston",
     "charlie" : "Chicago",
     "delta": "Denver",
     "echo": "Easy",
     "foxtrot" : "Frank"
};


// Example
//var ourArray = [];
//
//for (var i = 0; i < 10; i += 2) {
//  ourArray.push(i);
//}
//
//// Setup
var myArray = [];

// for (var i = 1; i < 10 ; i += 2){
// 	myArray.push(i);
// }
// console.log(myArray);

// Only change code below this line.




// change our initialization and final-expression so we can count backward by twos by odd numbers.
// var myArray = [];
// for ( var i = 9; i > 0 ; i -= 2){
// 	myArray.push(i);
// }


// Iterate Through an Array with a For loop
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

// var total = 0
// 
// var myArr = [ 2, 3, 4, 5, 6];
// 
// for ( var i=0; i < myArr.length ; i++){
// 	total += myArr[i];
// }
// 
// console.log(total);


//Setup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["Javascript", "Gaming", "Foxes"]
//     }
// ];
// 
// 
// function lookUpProfile(firstName, prop){
// // Only change code below this line
// 	var foundPerson = false;
// 	for( var i = 0 ; i < contacts.length ; i++){
// 		if (contacts[i].firstName == firstName){
// 			foundPerson = contacts[i];
// 			break;
// 		}
// 			
// 	}
// 	if (foundPerson){
// 		if (foundPerson.hasOwnProperty(prop)){
// 			return foundPerson[prop];
// 		}
// 		else {
// 			return "No such property";
// 		}
// 	}
// 	else{
// 		return "No such contact";
// 	}
// 
// // Only change code above this line
// }
// 
// Change these values to test your function
// console.log (lookUpProfile("Akira", "likes"));


// var testString = "There are 3 cats but 4 dogs.";
// var expression = /\d+/g;
// var digitCount = testString.match(expression).length;
// 
// console.log(digitCount);


// Setup
// var testString = "How many spaces are there in this sentence?";
// 
// // Only change code below this line.
// 
// var expression = /\s+/g;  // Change this line
// 
// // Only change code above this line
// 
// // This code counts the matches of expression in testString
// var spaceCount = testString.match(expression).length;
// 
// 
// console.log(spaceCount);


// var car = {
//   "wheels":4,
//   "engines":1,
//   "seats":5
// };
// 
// var motorBike = {
// 	"wheels": 4, 
// 	"engines": 1, 
// 	"seats": 2, 
// };
// 
// print( motorBike);

// condense arrays with reduce 
// https://www.freecodecamp.org/challenges/condense-arrays-with-reduce


// var array = [4,5,6,7,8];
// var singleVal = 0;
// 
// // Only change code below this line.
// 
// 
// singleVal = array.reduce( function(prev, curr){
//   return prev + curr;
// }, 0);

// filter arrays with filter
// https://www.freecodecamp.org/challenges/filter-arrays-with-filter


// var oldArray = [1,2,3,4,5,6,7,8,9,10];
// 
// // Only change code below this line.
// 
// var newArray = oldArray.filter(function(val){
// 	return val <= 6;
// });
// 
// console.log(newArray);

// https://www.freecodecamp.org/challenges/sort-arrays-with-sort
