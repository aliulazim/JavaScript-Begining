let n = 5;
let factorial = 1;

for (let i = n; i > 1; i-- ) {
    factorial = factorial * i;
    // factorial *=i;
    
}
console.log(factorial);


console.log("\n rest \n");

// 1 - 10 all number factorial find


for (let j = 1; j <= 10; j++){
    factorial = 1;
    for(let i = j; i >1; i-- ){
        factorial = factorial * i;
        // factorial *=i;
    }
    console.log("Factorial of", j, "is", factorial);
}


console.log("\n rest \n");


//Other Esey Weay 1 - 10 all number factorial find 


factorial = 1;
for(let i = 1; i <= 10; i++){
    factorial = factorial * i;
    // factorial *=i;
    console.log("Factorial of", i, "is", factorial);




}