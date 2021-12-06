// Advent of Code - 2021 Challenge 
// Day 5: Lanternfish

//Part 1

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(",").map(Number);

const DAYS_BEFORE_BIRTH = 6;
const NEWFISH_DAYS_BEFORE_BIRTH = 8;

let fishArray = input;
let numberOfDays = 80;

for(let i=0; i < numberOfDays; i++){
    for(let j=0 ; j< fishArray.length ; j++){
        
        fishArray[j]--;
    
        if(fishArray[j] < 0){
            fishArray[j] = DAYS_BEFORE_BIRTH;
            fishArray.push(NEWFISH_DAYS_BEFORE_BIRTH+1);
        }
    }
}

console.log("Number of lanternfish after 80 days", fishArray.length )



