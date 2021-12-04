// Advent of Code - 2021 Challenge 
// Day 4: Giant Squid

//Part 1

const fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\r\n");

let playOrder = String(input[0]).split(",");
let boardList = []
let hasWinner = false;

let defaultBoard= [];
let completedBoards=[];
let lastCheckedNumber;
let winnerBoardDefault=[];

function gameStart(){
    boardCreation();

    defaultBoard = JSON.parse(JSON.stringify(boardList));

    for(let i = 0; i< playOrder.length ; i++){
        if(hasWinner) return;
        let n = playOrder[i];
        //Check for all boards
        for(let j=0; j < boardList.length; j++){
            if (winnerBoardDefault.includes(j)){
                continue;
            }
            //Check for board dimension 1
            for(let k=0; k< boardList[j].length ; k++){
                //Check for board dimension 2
                for(let l=0; l< boardList[j][k].length ; l++){
                    if(n == boardList[j][k][l]){
                        // console.log(defaultBoard[i])
                        boardList[j][k][l] = boardList[j][k][l] + "*";
                        checkWinner(n, j);
                    }
                } 
            }
        }
    }

    // console.log(winnerBoardDefault)

    let lastBoard = completedBoards[completedBoards.length-1];
    let lastFinalNumber = 0;
    for(let i=0; i < lastBoard.length; i++) {
        for(let j=0; j< lastBoard[i].length ; j++){
            if(!String(lastBoard[i][j]).includes('*')){
                // console.log(lastBoard[i][j])
                lastFinalNumber += lastBoard[i][j];
            }
        }
    }
    console.log("lastFinalNumber",lastFinalNumber)
    console.log("lastCheckedNumber",lastCheckedNumber)

    console.log("Final Value:",lastFinalNumber * lastCheckedNumber);
    console.log("Last winning board:", lastBoard)
}

function boardCreation(){
    let tempArr=[]
    for(let i=2; i< input.length ; i++){
        if(input[i] !== ''){
            tempArr.push(input[i].split(' ').filter((val) => val != '').map(Number))
        }

        if(tempArr.length === 5){
            boardList.push(tempArr);
            tempArr=[];
        } 
    }
}

function checkForRows(numberBeingChecked, boardIndex){
    let rowchecker = 0;
    for(let i=0; i < boardList.length; i++){
        if (winnerBoardDefault.includes(i)){
            continue;
            
        }
        //Check for board dimension 1
        for(let j=0; j< boardList[i].length ; j++){
            //Check for board dimension 2
            rowchecker = 0;
            for(let k=0; k< boardList[i][j].length ; k++){
                if(String(boardList[i][j][k]).includes('*')){
                    rowchecker++;
                    if(rowchecker === 5){
                        rowchecker= 0
                        winnerBoardDefault.push(boardIndex);
                        completedBoards.push(boardList[boardIndex]);
                        lastCheckedNumber = numberBeingChecked;
                        winningBoardValue(boardList[i], numberBeingChecked, winnerBoardDefault);
                        break;
                    }
                }
            } 
        }
    }
}

function checkForColumns(numberBeingChecked, boardIndex){
    let columnchecker = 0;
    for(let i=0; i < boardList.length; i++){
        //Check for board dimension 1
        if (winnerBoardDefault.includes(i)){
            continue;
        }
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
                        winnerBoardDefault.push(boardIndex);
                        completedBoards.push(boardList[boardIndex]);
                        lastCheckedNumber = numberBeingChecked;
                        winningBoardValue(boardList[i], numberBeingChecked);
                        break;
                    }
                }
            } 
        }
    }
}

function checkWinner(numberBeingChecked, boardIndex){
    if(!hasWinner){
        checkForRows(numberBeingChecked, boardIndex);
        checkForColumns(numberBeingChecked, boardIndex);
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
}

gameStart();