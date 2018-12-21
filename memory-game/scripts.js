// add a ready listener to the whole DOM
// i.e. JS wait until the DOM is finished loading before running anything

$(document).ready(()=>{
    // console.log("test")
    let matches = 0;

    $('button').click(function(){
        // console.log($(this));
        let gridSize = $(this).attr('diff');
        // console.log(gridSize);
        let cards= []
        for(let i=1; i < (gridSize/2)+1; i++){
            let monsterNumber=i;
            if(i<10){
                monsterNumber="0"+i;
            }
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`)
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`)

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

        // User just clicked on a card
        $('.card-holder').click(function(){
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
                    cardsUp.removeClass('flip')},500);
                }
            }
            if(matches == (gridSize/2)){
                $('.replay-message').show()
                $('.game-board').attr('style', "animation: fadeout 2s;")
                setTimeout(()=>{
                    $('.game-board').hide()
                },2000);
            }
        })
        
    })
    


})

// randomizes pictures for the game
function shuffleCards(cardsToBeShuffled, gridSize){
    for(let count=0;count<1000;count++){
        let rand1 = Math.floor(Math.random() * gridSize);
        let rand2 = Math.floor(Math.random() * gridSize);
        let tempCard= cardsToBeShuffled[rand1];
        cardsToBeShuffled[rand1] = cardsToBeShuffled[rand2];
        cardsToBeShuffled[rand2] = tempCard;
        
    }
}

// toggle Overlay and reset button

