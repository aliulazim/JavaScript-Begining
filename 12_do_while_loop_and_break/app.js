let i = 0;

do{
    i ++; // when use i++ console up then 
    console.log(i);
    
    
}while (i < 10);

console.log("\n reset \n");

i = 0;

do {
    i++;
    console.log(i);
    if (10 == i) {
        break;
    }
    
} while (true);