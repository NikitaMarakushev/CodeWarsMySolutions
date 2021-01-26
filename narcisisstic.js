//Function for summing
function sum() {
    var sum = 0;
    for (i=0; i<arguments.length; i++) {
      sum += arguments[i];
    }
    return sum
}

//Main function
function narcissistic(value) {
    if (value > 0 ) {

      let size = value.toString().length;
      
      if (size === 1) {

          return true;
        } else {

          var result = sum.apply(null, ((value.toString().split('')).map(Number)).map(n => n ** size));

           if (result  === value) {

              return true;

           }else {

              return false;

           }
        }
    } else if (value === 0) {
    
      return "Error, zero is not allowed";
      
    } else {
    
      return "Error, no-positive numbers are not allowed!";
      
    }
  }
