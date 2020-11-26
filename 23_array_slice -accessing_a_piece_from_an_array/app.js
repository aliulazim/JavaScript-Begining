
let list = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
];

// let chunk = list.slice(1,6);


// Last 3 element slice

// let length =list.length-3;
// let chunk = list.slice(length);

// Other waye
// let chunk = list.slice(-3);
let chunk = list.slice(-5,-3);

console.log(list, chunk);