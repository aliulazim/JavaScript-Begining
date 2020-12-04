let list = [
    "sun",
    NaN,
    "mon",
    '',
    null,
    "tue",
    "wed",
    ,
    ,
    "thu",
    undefined,
    "fri",
    null,
    "sat"
];

console.log(list);


let newList = [];

for(i in list){
    if (list[i]) {
        newList.push(list[i]);
    }
}

console.log(newList);


// Use filter mathod

let anotherList;

anotherList = list.filter(Boolean); 

console.log(anotherList);