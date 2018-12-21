// console.log("sanity check")

function submitForm(event){
    event.preventDefault()
    // get user input and toggle messages
    const userInput = $('#user-input').val()
    $('.intro-message').toggle()
    $('#message').toggle()
    // algorithm to create game board
    for(let i=0; i<userInput; i++){
        $('#container').append(`<div id="row${i}"></div>`)
        for(let j = 0; j< userInput; j++){
            $(`#row${i}`).append(`<button id="${i}${j}" class="square">-</button>`)
        }
    }
    // algorithm to add all winning combos to a single array
    let winCombos = []
    getWinCombos(userInput, winCombos)
    console.log(winCombos)
    
    // initialize game variables and being click listener loop
    const squares = $('.square');
    let gameOn = true;
    let whosTurn = 1;
    let player1Squares = [];
    let player2Squares = [];
    squares.each(function(i){
        $(this).click(function(){
            if(gameOn){
                if($(this).text() === "-"){
                    if(whosTurn === 1){
                        $(this).text("X");
                        whosTurn = 2;
                        $('#message').text("It's O's turn")
                        player1Squares.push($(this).attr('id'))
                        console.log(player1Squares)
                        checkWinRow(player1Squares, 1)
                        checkWinCol(player1Squares, 1)
                    }else{
                        $(this).text("O");
                        whosTurn = 1;
                        $('#message').text("It's X's turn");
                        player2Squares.push($(this).attr('id'))
                        console.log(player2Squares)
                        checkWinRow(player2Squares,2)
                        checkWinCol(player2Squares,2)
                    }
                }else{
                    $('#message').text("Sorry, that's not a valid move")
                }
            }
        })
    })


    function checkWinRow(playerSquares, whoMarked) {
        for(let i=0; i < userInput; i++){
            let squareCount = 0;
            // console.log(squareCount)
            for(let j = 0; j < userInput; j++){
                const winningSquare = winCombos[i][j]
                if(playerSquares.includes(winningSquare)){
                    squareCount++;
                    
                }
            }
            if(squareCount == userInput){
                endGame(winCombos[i], whoMarked);
            }
        }
    }
    function checkWinCol(playerSquares, whoMarked) {
        for(let i=0; i < userInput; i++){
            let squareCount = 0;
            // console.log(squareCount)
            for(let j = 0; j < userInput; j++){
                const winningSquare = winCombos[j][i]
                if(playerSquares.includes(winningSquare)){
                    squareCount++;
                    
                }
            }
            if(squareCount == userInput){
                endGame(winCombos[i], whoMarked);
                
            }
        }
    }

    function endGame(winningCombo, whoWon){
        // console.log("endGame ran")
        gameOn = false;
        $('#message').html(`Congrats to Player ${whoWon}`);
        for(let i = 0; i < winningCombo.length; i++){
            const winningSquare = winningCombo[i];
            const squareElem = document.getElementById(winningSquare);
            $(squareElem).addClass('winning-square')
            console.log("winCombos[i] is " + winCombos[i])
        }
    }
    
}

function getWinCombos(userNumber,winningArray){
    // for row winnning combos
    for(let i=0; i < userNumber; i++){
        let rowArray = []
        for(let j=0; j < userNumber; j++){
            rowArray.push(`${i}${j}`)
        }
        winningArray.push(rowArray)
    }

    // for column winning combos
    for(let i = 0; i < userNumber; i++){
        let colArray = []
        for(let j=0; j < userNumber; j++){
            colArray.push(`${j}${i}`)
        }
        winningArray.push(colArray)
    }

    // for left diagonals
    let leftDiagArray = []
    for(let i = 0; i < userNumber; i++){
        leftDiagArray.push(`${i}${i}`)
    }
    winningArray.push(leftDiagArray)


    // for right diagonals
    let rightDiagArray = []
    for(let i = 0; i < userNumber; i++){
        rightDiagArray.push(`${i}${userNumber - i}`)
    }
    winningArray.push(rightDiagArray)
}

function checkWinRow(playerSquares, userNumber, whoMarked) {
    for(let i=0; i < numberWins; i++){
        let squareCount = 0;
        for(let j = 0; j < numberWins; j++){
            const winningSquare = winCombos[i][j]
            if(playerSquares.includes(winningSquare)){
                squareCount++;
            }
        }
        if(squareCount === userNumber){
            endGame(winCombos[i], whoMarked);
        }
    }
}

function checkWinCol(playerSquares, userNumber, whoMarked) {
    for(let i=0; i < numberWins; i++){
        let squareCount = 0;
        for(let j = 0; j < numberWins; j++){
            const winningSquare = winCombos[j][i]
            if(playerSquares.includes(winningSquare)){
                squareCount++;
            }
        }
        if(squareCount === userNumber){
            endGame(winCombos[i], whoMarked);
        }
    }
}
