// Advent of Code - 2021 Challenge 
// Day 8: Seven Segment Search

//Part 1

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n");

let signalPatters = [];
let outputValues = [];

for(let i=0; i< input.length ; i++){
    signalPatters.push(input[i].split(" | ")[0].split(" "))
    outputValues.push(input[i].split(" | ")[1].split(" "))
}

function auxCheckForLetters(string, substring) {
    var letters = [...string];
    // console.log(letters)
    return [...substring].every(x => {
        var index = letters.indexOf(x);
        if (~index) {
            letters.splice(index, 1);
            return true;
        }
    });
}

function analyseOutput(){
    const oneCode="cf";
    const threeCode="acdfg";
    const sevenCode="acf";
    const eightCode="abcdefg";
    let arrayNumbers=[oneCode,threeCode,sevenCode,eightCode];
    let n=0;

    
    for(let i = 0 ; i < signalPatters.length ; i++){
        for(let j = 0 ; j < outputValues.length ; j++){
            for(let k = 0 ; k < outputValues[i].length ; k++){
                console.log("o",outputValues[j][k])
                console.log("i",signalPatters[i][j])
                console.log(auxCheckForLetters(outputValues[j][k], signalPatters[i][j]));
                if(auxCheckForLetters(outputValues[j][k], signalPatters[i][i])){
                    n++
                };
            }
        }
    }
    return n;
}

// console.log("io", auxCheckForLetters(outputValues[0][i], signalPatters[0][j]))

console.log("n",analyseOutput())

// console.log(input)
// console.log(signalPatters)
// console.log(outputValues)
// console.log(signalPatters)
// console.log(outputValues)
