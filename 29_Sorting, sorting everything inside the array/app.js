// String sorting

let list = [
    "w",
    "f",
    "a",
    "c",
    "b",
    "d",
    "z",
];

list.sort();
console.log(list);


// Number sorting

let numList = [
  3,5,11,25,44,85,50,1,9,12,17,27,30,6,70,7
];

let length = numList.length-1;

for(let i = 0; i < length; i ++){
    for(let j = 0; j < length; j ++){
        if (numList[j] > numList[j+1]) {
            [ numList[j], numList[j+1] ] = [ numList[j+1], numList[j] ];
        }
    }
};

console.log(numList);


