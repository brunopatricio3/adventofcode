// Advent of Code - 2021 Challenge 
// Day 1: Sonar Sweep

//Part 1

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n").map(Number);

let numberArray = input; 

let numberIncreases = 0;

for(let i=0; i< numberArray.length; i++){
    if(numberArray[i+1]>numberArray[i]){
        numberIncreases++;
    }
}

console.log("Number of increases:",numberIncreases);

//Part 2
let numberSumIncreases = 0;

for(let j=0; j< numberArray.length; j++){
    let firstSum = numberArray[j] + numberArray[j+1] + numberArray[j+2];
    let secondSum = numberArray[j+1] + numberArray[j+2] + numberArray[j+3];

    if(secondSum>firstSum){
        numberSumIncreases++;
    }
}

console.log("Number of sum increases:",numberSumIncreases);