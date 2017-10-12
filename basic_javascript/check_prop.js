print = require( 'pretty-print');
// Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
// 
// Example
// 
// var myObj = {
//   top: "hat",
//   bottom: "pants"
// };
// myObj.hasOwnProperty("top");    // true
// myObj.hasOwnProperty("middle"); // false
// Instructions
// Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".

var myObj = {
	firstName : "calvin",
	lastName : "settachatgul", 
}

console.log(myObj);

print(myObj);

console.log( myObj.hasOwnProperty("firstName"));

function checObj(checkProp) {
	if( myObj.hasOwnProperty( checkProp)){
		return myObj[checkProp];
	}
	else{
		return "Not Found";
	}
}

console.log( "firstName",checObj( 'firstName'));
console.log( "middleName",  checObj( 'middleName'));
