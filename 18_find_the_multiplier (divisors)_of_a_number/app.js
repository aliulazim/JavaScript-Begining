
let n = 1245;
let range = Math.ceil(Math.sqrt(n));

let divisors = "";

 for (let i = 1; i <= range; i ++){
     if (n%i == 0) {
         if (i == n/i) {
             divisors += i + " ";

         }else{
             divisors += i + " " + (n/i) + " ";
         }
     }
 }
 console.log(divisors);