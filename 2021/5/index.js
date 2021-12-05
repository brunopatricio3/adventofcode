// Advent of Code - 2021 Challenge 
// Day 5: Hydrothermal Venture

//Part 1

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n");
let formattedInput = [];
let board = [];

// console.log(board)
for(let i=0; i< input.length ; i++){
    formattedInput.push(input[i].split(" -> "))
}
// console.log(formattedInput);

createBoard()

function createBoard(){
    let tempArr=[]
    for(let i=0; i< input.length * input.length ; i++){
            tempArr.push(0)

        if(tempArr.length === input.length){
            board.push(tempArr);
            tempArr=[];
        } 
    }
    tablePopulation()
}

function tablePopulation(){
    let x1, x2, y1, y2 = 0
    for(let i = 0; i < formattedInput.length; i++){
        x1 = formattedInput[i][0].split(',')[0];
        y1 = formattedInput[i][0].split(',')[1];
        x2 = formattedInput[i][1].split(',')[0];
        y2 = formattedInput[i][1].split(',')[1];

        if(x1 === x2){
            let biggerNumber;
            let smallerNumber;
            if(y1 > y2){
                biggerNumber = y1;
                smallerNumber = y2;
            } else {
                biggerNumber = y2;
                smallerNumber = y1;
            }

            let calcBiggerNumb = JSON.parse(JSON.stringify(biggerNumber));

            for( let j =0 ; j < ((biggerNumber-smallerNumber) + 1); j++){
                console.log("X being checked calc", x1, calcBiggerNumb )
                board[calcBiggerNumb--][x1]++;
            }
        }

        if(y1 === y2){
            let biggerNumber;
            let smallerNumber;
            if(x1 > x2){
                biggerNumber = x1;
                smallerNumber = x2;
            } else {
                biggerNumber = x2;
                smallerNumber = x1;
            }

            let calcBiggerNumb = JSON.parse(JSON.stringify(biggerNumber));

            for( let j =0 ; j < ((biggerNumber-smallerNumber) + 1); j++){
                board[y1][calcBiggerNumb--]++;
            }
        }
    }
    console.log(board)
}
