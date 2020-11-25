let myList = ["apple", "banana","orange"];

myList[myList.length] = "grape";

myList.push("pineapple"); // last
myList.push("plum");  // last
myList.unshift("jackfruit"); // first

myList.pop();  // last iterm remove
myList.shift();  // fist item remove

console.log(myList);