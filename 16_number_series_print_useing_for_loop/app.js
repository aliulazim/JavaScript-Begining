// Number Series 


/*
    s0 = 1 2 3 4 5 6 7 8 9......Normal
    s1 = 2 4 6 8 10 12 14 ..... Normal series * 2
    s2 = 1 4 7 10 13 16 ......... One number  + 3 Defoult Number 1
    s3 = 0 3 8 15 24 35 48 ...... Normal series(*2) Squre then -1 
    s4 = 1 4 3 8 5 12 7 16 9 20 .... Odd Number Defoult and Even num *2
    s5 = 0 1 1 2 3 5 8 13 ......... (Fibonacci Series) Previus Two number Sum (0 1 Defoult)




*/




// Print s1 = 2 4 6 8 10 12 14 ..... Normal series * 2  


let series = "";
let n;
for(let i =1; i < 10; i++){
    n = i * 2;
    series = series + n + " ";
}
console.log("Series 1 =", series);

// Print s2 = 1 4 7 10 13 16 ......... One number  + 3 Defoult Number 1

series = " 0 ";
n = 1;

for(let i =1; i < 10; i++){
    n = n + 3;
    series = series + n + " ";
}
console.log("Series 2 =", series);


// Print s3 = 0 3 8 15 24 35 48 ...... Normal series(*) Squre then -1 

series = "";
for (let i = 1; i <10; i ++){
    n = i*i-1;
    series = series + n + " " ;

}
console.log("Series 3 =", series);


// Print s4 = 1 4 3 8 5 12 7 16 9 20 .... Odd Number Defoult and Even num *2


series = " ";

for ( let i = 1; i <= 10; i ++){
    n = i;
    if ( n % 2 == 0) {
        n = i * 2;
    }
    series = series + n + " ";
}

console.log("Series 4 =", series);


// Print s5 = 0 1 1 2 3 5 8 13 ......... (Fibonacci Series) Previus Two number Sum (0 1 Defoult)


series = " 0 1 ";
n = 0;
let x = 0;
let y = 1;

for (let i = 1; i < 10 ; i ++ ){
    n = x + y;
    x = y ;
    y = n;
    series = series + n + " ";
}
console.log("Series 5 =", series);










