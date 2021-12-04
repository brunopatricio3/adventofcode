// Advent of Code - 2021 Challenge 
// Day 2: Dive! - Chart Values Calculation

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n");

let x = 0;
let y = 0;
let xArray = [];
let yArray = [];

for(let i=0; i< input.length; i++){
    let splitArray = input[i].split(' ');

    switch(splitArray[0]){
        case "forward": x += Number(splitArray[1]); break;
        case "up": y -= Number(splitArray[1]); break;
        case "down": y += Number(splitArray[1]); break;
    }
    xArray.push("H. position: " + x);
    yArray.push(y);
}



const util = require('util')
console.log(util.inspect(xArray, { maxArrayLength: null }))