
let yourAge = 1;
let ageResult;

if (yourAge < 0 || yourAge > 200) {
    ageResult = "Vampire";
}else if (yourAge <= 1) {
    ageResult = "Baby";
}else if (yourAge <= 3) {
    ageResult = "Toddler";
}else if (yourAge <= 12) {
    ageResult = "Kid";
}else if (yourAge < 18) {
    ageResult = "Teenager";
}else if (yourAge >= 18) {
    ageResult = "Adult";
}
console.log("You are a ", ageResult);