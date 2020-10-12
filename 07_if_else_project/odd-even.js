let x = 0;
let oddEvenResult;
let remainder = x % 2;

if (0 === x) {
    oddEvenResult = "This is a neutral number";
}else if (0 === remainder) {
    oddEvenResult = "This number is even";
}else{
    oddEvenResult = "This number is odd";
}
console.log(oddEvenResult);