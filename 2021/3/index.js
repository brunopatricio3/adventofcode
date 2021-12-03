// Advent of Code - 2021 Challenge 
// Day 3: Binary Diagnostic

//Part 1

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n");
let searchSize = input[0].length;
let gammaRate = "", epsilonRate = "";
let powerConsumption;

for(let i=0; i< searchSize; i++){
    let zeros = 0, ones = 0;

    for(let j=0; j< input.length; j++){
        input[j].charAt(i) === "0" ? zeros++ : ones++;  
    }

    zeros > ones ? gammaRate += "0" : gammaRate += "1";
    zeros < ones ? epsilonRate += "0" : epsilonRate += "1";    
}

powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

console.log("Power consumption", powerConsumption);

//Part 2

let oxygenGeneratorRating, carbonDioxideScrubberRating, lifeSupportRating;
let o2Array = input, co2Array = input;

function mostCommonValue(zeros, ones, index){
    if(ones >= zeros) {
        o2Array = o2Array.filter(function(item) {
            return item.charAt(index) === "1";
        })
    } else {
        o2Array = o2Array.filter(function(item) {
            return item.charAt(index) === "0";
        })
    }
}

function leastCommonValue(zeros, ones, index){
    if(co2Array.length > 1){
        if(ones < zeros) {
            co2Array = co2Array.filter(function(item) {
                return item.charAt(index) === "1";
            })
        } else {
            co2Array = co2Array.filter(function(item) {
                return item.charAt(index) === "0";
            })
        }
    }
}

for(let i=0; i< searchSize; i++){
    let zeros = 0, ones = 0;
    for(let j=0; j< o2Array.length; j++){
        o2Array[j].charAt(i) === "0" ? zeros++ : ones++;  
    }
    mostCommonValue(zeros, ones, i);

    zeros = 0;
    ones = 0;
    for(let k=0; k< co2Array.length; k++){
        co2Array[k].charAt(i) === "0" ? zeros++ : ones++;  
    }
    leastCommonValue(zeros, ones, i);
}

oxygenGeneratorRating = o2Array[0];
carbonDioxideScrubberRating = co2Array[0];
lifeSupportRating = parseInt(oxygenGeneratorRating, 2) * parseInt(carbonDioxideScrubberRating, 2);

console.log("Life Support Rating", lifeSupportRating);