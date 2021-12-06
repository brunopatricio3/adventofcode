// Advent of Code - 2021 Challenge 
// Day 6: Lanternfish

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(",").map(Number);

function getNumberFishes(nrDays){
    let totalFishes = 0;
    let schoolFishesArray = [0,0,0,0,0,0,0,0,0];
    let positionZero;
    
    //Create initial state
    for(let i = 0 ; i < input.length ; i++){
        schoolFishesArray[input[i]]++;
    } 

    for(let i = 0 ; i < nrDays ; i++){       
        positionZero = schoolFishesArray.shift();
        schoolFishesArray[8] = positionZero;
        schoolFishesArray[6] = schoolFishesArray[6] + positionZero;
    } 
    
    for(let i = 0 ; i < schoolFishesArray.length ; i++){
        totalFishes += schoolFishesArray[i];
    }

    return "Number of lanternfish after " + nrDays + " days: " +  totalFishes;
}

console.log(getNumberFishes(80));
console.log(getNumberFishes(256));