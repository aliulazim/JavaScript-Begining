
let students = [];

addStudents(students,"Rahim","Karim","Rahima");
console.log(students.length);
addStudents(students,"Shamim");
console.log(students.length);
addStudents(students,"Shamim","Shamima");
console.log(students.length);

// hoisting
function addStudents(storage, ...people){
    for (let i = 0; i < people.length; i++) {
        storage.push(people[i]);
        
    }

}


function dummy(n,m, ...params) {
    console.log(params.length);
    console.log(params);
    console.log(params[1]);
    
}

dummy(1,4,8,95,88);
dummy(1,3,8,95,88,99);
dummy(1,11,95,88);