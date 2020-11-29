
let list = [
    "sun",  //0 = -7
    "mon",  //1 = -6
    "tue",  //2 = -5
    "wed",  //3 = -4
    "thu",  //4 = -3
    "fri",  //5 = -2
    "sat",  //6 = -1
];

let length = list.length;

// for(let i = 0; i < length; i++){
//     console.log("Element at", i ,"Offset is", list[i]);
// }

// Reverse Crount
console.log("\n", "ResReverse Crountt", "\n\n");
for(let i = length-1; i >= 0; i--){
     console.log("Element at", i ,"Offset is", list[i]);
}


// Other weay

console.log("\n", "Right Crountt", "\n\n");

for (i in list) {
    console.log("Element at", i ,"Offset is", list[i]);
    
}