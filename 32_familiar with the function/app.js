

function sayHi(name) {
    if (name) {
        console.log("Hello "+name);
    }else{
        console.log("How are you");
    }
}

sayHi("Rahim");
sayHi("");
sayHi("");
sayHi();

// Return function

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }

    return false;
}

console.log(isEven(12));
console.log(isEven(15));
console.log(isEven(45));
console.log(isEven(16));