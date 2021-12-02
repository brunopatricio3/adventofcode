// Advent of Code - 2021 Challenge 
// Day 2: Dive!

//Part 1

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n");

let horizontalPosition = 0;
let depth = 0;

for(let i=0; i< input.length; i++){
    let splitArray = input[i].split(' ');

    switch(splitArray[0]){
        case "forward": horizontalPosition += Number(splitArray[1]); break;
        case "up": depth -= Number(splitArray[1]); break;
        case "down": depth += Number(splitArray[1]); break;
    }
}

let finalDepthValue = horizontalPosition * depth;

console.log("Final Depth:",finalDepthValue)

//Part 2

let aim = 0;
let finalHorizontalPosition = 0;
let finalDepth= 0;

for(let j=0; j< input.length; j++){
    switch(splitArray[0]){
        case "forward": 
            finalHorizontalPosition += Number(splitArray[1]); 
            if(aim !== 0){
                finalDepth += (aim * Number(splitArray[1]))
            }
            break;
        case "up": aim -= Number(splitArray[1]); break;
        case "down": aim += Number(splitArray[1]); break;
    }
}

let trueFinalDepthValue = finalHorizontalPosition * finalDepth;

console.log("True Final Depth:",trueFinalDepthValue)
