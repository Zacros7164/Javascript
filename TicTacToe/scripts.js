// ======GLOBALS======
// init game as player 1's turn
let whosTurn = 1;
// make an array for both players, and push each new square into the appropriate array
let player1Squares = [];
let player2Squares = [];
// Array of all winning combos
const winningCombos = [
    ["A1","B1","C1"], //row 1
    ["A2","B2","C2"], //row 2
    ["A3","B3","C3"], //row 3
    ["A1","B2","C3"], //col 1
    ["A3","B2","C1"], //col 2
    ["A1","A2","A3"], //col 3
    ["B1","B2","B3"], //diag 1
    ["C1","C2","C3"], //diag 2
]

let gameOn = true;




// console.log("sanity check"

// 1. set up board -- CHECK
// 2. User should be able to click on a button -- CHECK
// When the click happens, the square should have that players mark
// 3. if its X's turn, put an X in, otherwise put an O in --CHECK
// 4. In order to accomplish 3, we ned to know who's turn it is -- CHECK
// After x goes, it becomes O's turn, and vice versa
// 5. Keep other player from taking a square -- CHECK
// 6. See if someone won, if so congratulate them
// 7. Stop the game if someone won, otherwise keep going

// squares is an array with 9 objects in it
// each element is an HTML button element
const squares = document.getElementsByClassName("square");
// const squares = document.getElementsByTagName("button"); // gives same results becuase we only have 9 buttons atm
// console.log(squares);

for(let i=0;i<squares.length;i++){
    // console.log(squares[i]) 
    // now that we have all the squares individually (squares[i]), we can add an event listener to each one
    // to add event listener:
    // 1. What to listen to
    // 2. add the MSInputMethodContext(addEventListener)
    // 3. first arg is what event to listen for
    // 4. second arg is what function to run if event happens
    squares[i].addEventListener("click", function(event) {
        // every JS event will give you the Event Object
        // console.log(event);
        // "this" is equivalent of python's "self"
        // console.dir(this);
        // check to see if the square is taken ...
        if(gameOn){
        
            if(this.innerHTML === "-"){
                // its not TrackEvent, so see whose turn it is
                if(whosTurn === 1){
                    // if player 1, put "X" and give player 2 control
                    this.innerHTML = "X"; //update the DOM
                    whosTurn = 2;//Update JS
                    // update the DOM
                    document.getElementById("message").innerHTML = "It's O's turn"
                    player1Squares.push(this.id);
                    checkWin(player1Squares,1)
                }else{
                    // if player 2, put "O" and give control back to player 1
                    this.innerHTML = "O";
                    whosTurn = 1;
                    document.getElementById("message").innerHTML = "It's X's turn"
                    player2Squares.push(this.id);
                    checkWin(player2Squares,2)
                }
            }else{
                document.getElementById("message").innerHTML = "Sorry, that square is taken"
            }
        }
        // console.log(player1Squares);
        // console.log(player2Squares);
    })
}

function checkWin(playerSquares, whoMarked) {
    // console.log("Checking to see who won...")
    // console.log(playerSquares);
    // console.log(whoMarked);
    // we know who just went (whoMarked)
    // and we know what squares they have (playerSquares)
    // Outer Loop - check each winning combo
    for(let i=0; i < winningCombos.length; i++){
        // console.log(winningCombos[i])
        // keep track of how many squares in THIS combo
        let squareCount = 0;
        // inner loop- check each square inside THIS winning combo
        // winningCombos[i] = the winning combo we are on (3 squares)
        for(let j = 0; j < winningCombos.length; j++){
            // winningCombos[i][j] = the square in the winning combo we are on
            const winningSquare = winningCombos[i][j]
            if(playerSquares.includes(winningSquare)){
                // player has this square!!!!
                squareCount++;
            }
        }
        if(squareCount === 3){
            // document.getElementById("message").innerHTML = `Player ${whoMarked} has won!`
            endGame(winningCombos[i], whoMarked);
        }
    }
}

function endGame(winningCombo, whoWon){
    gameOn = false;
    // if we get to this function, someone Won, so the game is over
    document.querySelector("#message").innerHTML = `Congrats to Player ${whoWon}`
    // we know which squares are the winning numbers
    for(let i = 0; i < winningCombo.length; i++){
        const winningSquare = winningCombo[i];
        const squareElem = document.getElementById(winningSquare);
        // console.log(squareElem);
        squareElem.className += " winning-square"
    }
}

function reset(){
    // 1. Get rid of x's and o's 
    // 2. remove winning class
    for(let i=0; i<squares.length; i++){
        squares[i].innerHTML = "-";
        squares[i].className = "square";
    }
    // 3. reset message 
    document.querySelector("#message").innerHTML = "It's X's turn";
    // 4.reset player arrays 
    player1Squares = [];
    player2Squares = [];
    // 5. set whosTurn
    whosTurn = 1;
    // 6. reset gameOn
    gameOn = true;

}