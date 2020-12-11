
function reverseString(data) {
    let reversedString = data.split("").reverse().join("");
    return reversedString;
}


let sentence = "Hello World";
let sentence2 = "Hello pluto";
let reversedSentence = reverseString(sentence);
let reversedSentence2 = reverseString(sentence2);

console.log(reversedSentence, reversedSentence2);