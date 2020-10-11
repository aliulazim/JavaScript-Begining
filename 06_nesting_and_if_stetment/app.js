// Nesting

let personOne = "Jamal";
let personTwo = "Kamal";
let areTheyBrother = true;

if("Jamal" == personOne){
    if ("Kamal" == personTwo) {
        if (areTheyBrother) {
            console.log("Jamal and Kamal are Brothers");
        }else{
            console.log("They are not Brother");
        }
    }
}


// Short Nesting

if ("Jamal" == personOne && "Kamal" == personTwo && areTheyBrother){
    console.log("Jamal and Kamal are Brothers");
}
else{
    console.log("They are not Brother");
}



//  || Oparetor
// 2 3 5 7


let n = 8;

if (n < 10) {
    
    if (2 == n || 3 == n || 5 == n || 7 == n){
        console.log("This Number", n, "is smaller than 10 it's a prime Number");
    }
    else{
        console.log("This Number", n, "is smaller than 10 it's Not a prime Number");
    }

}
else
    {
        console.log("This Number", n, "is greater than 10 ");
    }

  // Short Nesting
  
  let x = 7;

  if (x < 10 && (2 == x || 3 == x || 5 == x || 7 == x)) {
    console.log("This Number", x, "is smaller than 10 it's a prime Number");
  }else if (x < 10) {
    console.log("This Number", x, "is smaller than 10 it's Not a prime Number");
  } else {
    console.log("This Number", x, "is greater than 10 ");
  }