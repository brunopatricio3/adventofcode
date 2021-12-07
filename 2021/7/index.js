// Advent of Code - 2021 Challenge 
// Day 7: The Treachery of Whales

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(",").map(Number);

function auxStepCalculation(number) {
    if (number === 0){
        return 0;
    } else {
        return (number + auxStepCalculation(number-1));
    }
}

function fuelConsumption(hasCompensation){
    let storedDistances = [];
    for(let i = 0; i< input.length ; i++){
        let minumumDistance=0;
        for(let j = 0; j< input.length ; j++){
            if(input[i] !== input[j]){
                let distance = Math.abs(input[i] - input[j]);
                hasCompensation ? minumumDistance+=auxStepCalculation(distance) : minumumDistance+=distance;
            }
        }
        storedDistances.push(minumumDistance)
        storedDistances.sort((a, b) => a - b);
    }
    return storedDistances[0];
}

console.log("Fuel consumption: " + fuelConsumption(false));
console.log("Fuel consumption with compensation: " + fuelConsumption(true));