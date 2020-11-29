
let list = [
    "sun",  //0 = -7
    "mon",  //1 = -6
    "tue",  //2 = -5
    "wed",  //3 = -4
    "thu",  //4 = -3
    "fri",  //5 = -2
    "sat",  //6 = -1
];


// Deep Copy (1st array and 2nd array same cheange)
// let list2 = list;
// list2[1] = "No Day";

//Problem solve

// let list2 = list.slice();
//     list2[1] = "No Day";

//     // Other waye
//     let list2 = [...list] // ES6
//     list2[1] = "WoW Day";


    let list2 = Array.from(list);
    list2[1] = "Good Day";

    

console.log(list, list2);