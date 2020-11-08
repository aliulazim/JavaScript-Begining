let i = 0;

while (i ++ < 5) {
    console.log(i);
    
}

i = 0;

console.log("\n reset \n");

while (++ i < 5) {
    console.log(i);
    
}

console.log("\n reset \n");

// let y = 4;
// let x = y++;
// console.log(x, y); // 4, 5



let y = 4;
let x = ++y;
console.log(x, y); // 5, 5


x = y++ ;
x = y;
y = y+1;