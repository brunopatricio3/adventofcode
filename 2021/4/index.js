// Advent of Code - 2021 Challenge 
// Day 4: Giant Squid

//Part 1

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n");

let playOrder = String(input[0]).split(",");
let boardList = []
let hasWinner = false;

function gameStart(){
    boardCreation();
    for(let i = 0; i< playOrder.length ; i++){
        if(hasWinner) return;
        let n = playOrder[i];
        //Check for all boards
        for(let j=0; j < boardList.length; j++){
            //Check for board dimension 1
            for(let k=0; k< boardList[j].length ; k++){
                //Check for board dimension 2
                for(let l=0; l< boardList[j][k].length ; l++){
                    if(n == boardList[j][k][l]){
                        boardList[j][k][l] = boardList[j][k][l] + "*";
                        checkWinner(n);
                    }
                } 
            }
        }
    }
}

function boardCreation(){
    let tempArr=[]
    for(let i=2; i< input.length ; i++){
        if(input[i] !== ''){
            tempArr.push(input[i].split(' ').filter((val) => val != '').map(Number))
        }

        if(tempArr.length === 5){
            boardList.push(tempArr)
            tempArr=[];
        } 
    }
}

function checkForRows(numberBeingChecked){
    let rowchecker = 0;
    for(let i=0; i < boardList.length; i++){
        //Check for board dimension 1
        for(let j=0; j< boardList[i].length ; j++){
            //Check for board dimension 2
            rowchecker = 0;
            for(let k=0; k< boardList[i][j].length ; k++){
                if(String(boardList[i][j][k]).includes('*')){
                    rowchecker++;
                    if(rowchecker === 5){
                        console.log("We have a winner at row", boardList[i][j])
                        console.log("The board is:", boardList[i] )
                        hasWinner=true;
                        winningBoardValue(boardList[i], numberBeingChecked)
                        break;
                    }
                }
            } 
        }
    }
}

function checkForColumns(numberBeingChecked){
    let columnchecker = 0;
    for(let i=0; i < boardList.length; i++){
        //Check for board dimension 1
        for(let j=0; j< boardList[i].length ; j++){
            //Check for board dimension 2
            columnchecker = 0;
            let tempArr = [];
            for(let temp=0 ; temp < boardList[i][j].length ; temp++){
                tempArr.push(boardList[i][temp][j]);
            }
            for(let k=0; k< tempArr.length ; k++){
                if(String(tempArr[k]).includes('*')){
                    columnchecker++;
                    if(columnchecker === 5){
                        columnchecker = 0;
                        console.log("We have a winner at column", tempArr)
                        console.log("The board is:", boardList[i] )
                        hasWinner=true;
                        winningBoardValue(boardList[i], numberBeingChecked)
                        break;
                    }
                }
                
            } 
        }
    }
}

function checkWinner(numberBeingChecked){
    if(!hasWinner){
        checkForRows(numberBeingChecked);
        checkForColumns(numberBeingChecked);
    }
}

function winningBoardValue(board, numberBeingChecked){
    let finalNumber = 0;
    for(let i=0; i < board.length; i++) {
        for(let j=0; j< board[i].length ; j++){
            if(!String(board[i][j]).includes('*')){
                finalNumber += board[i][j];
            }
        }
    }
    console.log("Final Value:",finalNumber * numberBeingChecked);
}

gameStart();