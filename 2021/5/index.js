// Advent of Code - 2021 Challenge 
// Day 5: Hydrothermal Venture

//Part 1

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n");
let formattedInput = [];
let board = [];
let INPUT_LENGTH = 1000;

for(let i=0; i< input.length ; i++){
    formattedInput.push(input[i].split(" -> "));
}

createBoard();

function createBoard(){
    let tempArr=[];
    for(let i=0; i< INPUT_LENGTH*INPUT_LENGTH ; i++){
        tempArr.push(0);
        if(tempArr.length === INPUT_LENGTH){
            board.push(tempArr);
            tempArr=[];
        } 
    }
    tablePopulation();
}

function tablePopulation(){
    let x1, x2, y1, y2 = 0;
    for(let i = 0; i < formattedInput.length; i++){
        x1 = formattedInput[i][0].split(',')[0];
        y1 = formattedInput[i][0].split(',')[1];
        x2 = formattedInput[i][1].split(',')[0];
        y2 = formattedInput[i][1].split(',')[1];

        if(x1 === x2){
            // console.log("X=X", x1, y1, x2, y2 )

            let biggerNumber;
            let smallerNumber;
            if(y1 > y2){
                biggerNumber = y1;
                smallerNumber = y2;
            } else {
                biggerNumber = y2;
                smallerNumber = y1;
            }

            let calcBiggerNumb = JSON.parse(JSON.stringify(biggerNumber-1));
            for( let j =0 ; j < ((biggerNumber-smallerNumber) + 1); j++){
                board[calcBiggerNumb--][x1]++;
            }
        }

        if(y1 === y2){
            // console.log("Y=Y", x1, y1, x2, y2 )

            let biggerNumber;
            let smallerNumber;
            if(x1 > x2){
                biggerNumber = x1;
                smallerNumber = x2;
            } else {
                biggerNumber = x2;
                smallerNumber = x1;
            }

            let calcBiggerNumb = JSON.parse(JSON.stringify(biggerNumber-1));
            for( let j =0 ; j < ((biggerNumber-smallerNumber) + 1); j++){
                // console.log("nr", calcBiggerNumb)
                board[y1][calcBiggerNumb--]++;
            }
        }
    }
    lineIntersection();
}

function lineIntersection(){
    let nrIntersections = 0;

    for(let i = 0; i < board.length ; i++){
        for(let j = 0; j < board[i].length ; j++){
            if(board[i][j] > 1){
                // const util = require('util')
                // console.log(util.inspect(board, { maxArrayLength: null }))
                // console.log("board[i][j]", i,j);
                nrIntersections++;
            }
        } 
    }
    console.log("Number of intersections:", nrIntersections);
}