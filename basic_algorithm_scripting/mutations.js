// https://www.freecodecamp.org/challenges/mutations



function mutation(arr) {
  
    for (var j = 0 ; j< arr[1].length ; j++){
      
      if( arr[0].toLowerCase().indexOf(arr[1].charAt(j).toLowerCase()) === -1){
                return false;
        }

    }

  return true;


}

mutation(["hello", "hey"]);


console.log (mutation(["hello", "hey"]));

