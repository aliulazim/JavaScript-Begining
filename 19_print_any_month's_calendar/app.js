
// Print Any Month's Of Calendar


let monthName = "December, 2020";
let days = 31;
let startingDay = 2;

console.log("\n\nCalendar of", monthName, "\n");
console.log("Sun    Mon    Tue    Wed    Thu    fri    Sat");


for (let i =0; i < 5; i++){ // colum
    let dayRow = "";
    for(let j = 1; j <= 7; j++) {
        let currentDay = 7 * i + j - startingDay;

        if (currentDay > days) {
            break;
        } else if (currentDay < 1) {
            currentDay = " ";
        }



        if (currentDay > 9) {
            dayRow += currentDay + "     ";
        }else{
            dayRow += currentDay + "      ";
        }

       

    }
    console.log(dayRow);
}