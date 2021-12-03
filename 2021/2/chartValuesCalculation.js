// Advent of Code - 2021 Challenge 
// Day 2: Dive! - Chart Values Calculation

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n");

let x = 0;
let y = 0;
let movementArray = [];

for(let i=0; i< input.length; i++){
    let splitArray = input[i].split(' ');

    switch(splitArray[0]){
        case "forward": x += Number(splitArray[1]); break;
        case "up": y -= Number(splitArray[1]); break;
        case "down": y += Number(splitArray[1]); break;
    }
    movementArray.push({ x, y });
}

console.log(movementArray)
