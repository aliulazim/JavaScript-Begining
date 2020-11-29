

let list = [
    "sun",  //0 = -7
    "mon",  //1 = -6
    "tue",  //2 = -5
    "wed",  //3 = -4
    "thu",  //4 = -3
    "fri",  //5 = -2
    "sat",  //6 = -1
];

// let chunk = list.splice(1,4);
let chunk = list.splice(-5,4);
console.log(list,chunk);