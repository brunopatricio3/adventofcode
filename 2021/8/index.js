// Advent of Code - 2021 Challenge 
// Day 8: Seven Segment Search

//Part 1

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n");

let signalPatters = [];
let outputValues = [];

for(let i=0; i< input.length ; i++){
    signalPatters.push(input[i].split(" | ")[0].split(" "));
    outputValues.push(input[i].split(" | ")[1].split(" "));
}

function analyseOutput(){
    const oneCode="cf";
    const fourCode="bcdf";
    const sevenCode="acf";
    const eightCode="abcdefg";
    
    let arrayNumbers=[oneCode,fourCode,sevenCode,eightCode];
    let numberOfCodesInOutput=0;

    for(let i = 0 ; i < arrayNumbers.length ; i++){
        for(let j = 0 ; j < outputValues.length ; j++){
            for(let k = 0 ; k < outputValues[j].length ; k++){
                if(arrayNumbers[i].length === outputValues[j][k].length){
                    numberOfCodesInOutput++;
                }
            }
        
        }
    }
    return numberOfCodesInOutput;
}

console.log("Number of codes in output: ", analyseOutput());