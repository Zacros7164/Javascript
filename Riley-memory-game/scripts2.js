$(document).ready(()=>{
    // let matches = 0;
    $('.start').click(boardSet);

    $('.replay').click(function() {
        $('.replay-message').hide()
        $('.memory-game').show()
        boardReset()
    });

})


function boardSet(){
    console.log("boardSet")
    let matches = 0;
    let gridSize = $(this).attr('diff');
        // console.log(gridSize);
        let cards= []
        for(let i=1; i < (gridSize/2)+1; i++){
            let pictureNumber=i;
            if(i<10){
                pictureNumber="0"+i;
            }
            cards.push(`<img src="./images/jojo-siwa-${pictureNumber}.jpeg" />`)
            cards.push(`<img src="./images/jojo-siwa-${pictureNumber}.jpeg" />`)

        }
        let shuffledCards = cards.slice()
        shuffleCards(shuffledCards, gridSize)
        
        // console.log(shuffledCards);
        memoryHTML = '';
        shuffledCards.forEach((card)=>{
            memoryHTML += `
            <div class="card col-sm-3 game-board">
                <div class="card-holder">
                    <div class="card-front">${card}</div>
                    <div class="card-back"></div>
                </div>
            </div>
            `
        })
        // console.log(memoryHTML)
        $('.memory-game').html(memoryHTML);

        $('.card-holder').click(function(){
            // console.log("card click")
            $(this).addClass('flip')
            let cardsUp = $('.flip')
            // if cardsUp has 2 cards, then this is the second card, compare
            if(cardsUp.length === 2){
                const card1 = cardsUp[0];
                const card2 = cardsUp[1];
                if(card1.innerHTML == card2.innerHTML){
                    // these cards match
                    cardsUp.removeClass('flip');
                    cardsUp.addClass('matched');
                    matches++;
                }else{
                    // JS is too FocusNavigationEvent, we need to add some delay so the user can see the card
                    setTimeout(()=>{
                    cardsUp.removeClass('flip')},1500);
                }
            }
            if(matches == (gridSize/2)){
                $('.replay-message').show()
                $('.memory-game').attr('style', "animation: fadeout 2s;")
                setTimeout(()=>{
                    $('.memory-game').hide()
                },2000);
                $('#stage').show()
            }
        })
}

function shuffleCards(cardsToBeShuffled, gridSize){
    for(let count=0;count<1000;count++){
        let rand1 = Math.floor(Math.random() * gridSize);
        let rand2 = Math.floor(Math.random() * gridSize);
        let tempCard= cardsToBeShuffled[rand1];
        cardsToBeShuffled[rand1] = cardsToBeShuffled[rand2];
        cardsToBeShuffled[rand2] = tempCard;
        
    }
}

function boardReset(){
    console.log("reset")
    $('#stage').hide()
    let resetHTML = '';
    resetHTML+= `
        <h1>How difficult?</h1>
        <button diff=4 class="btn btn-lg btn-success start">Easy</button>
        <button diff=12 class="btn btn-lg btn-warning start">Medium</button>
        <button diff=28 class="btn btn-lg btn-danger start">Hard</button>
        `
    $('.memory-game').html(resetHTML)
    $('.memory-game').removeAttr('style')
    $('.start').click(boardSet);
}