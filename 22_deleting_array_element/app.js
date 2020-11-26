
let males = ["Shamim","Karim","Rahima","Rahim"];
let females = ["Shamima","Karima"];

// Last element delete and push

// let lastPerson = males.pop();
// females.push(lastPerson);

let personToRemove = males[2];
females.push(personToRemove);

delete(males[2]);


console.log(males.length,females.length);