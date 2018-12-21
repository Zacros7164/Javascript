const freshDeck = createDeck();
let theDeck = freshDeck.slice();
let playerHand = [];
let dealerHand = [];

// hello Christopher


// blackjack deal function
$('.deal-btn').click(()=> {
                            // console.log("user clicked deal")
                            // first, we need a deck to work with (creatDeck() up top)
    
    theDeck = freshDeck.slice();
    playerHand = []
    dealerHand = []
    clearBoard()



                            // we need to shuffle the deck
    shuffleDeck(theDeck);
                            // we have a shuffled deck, now we have to deal them
                            // shift pulls the first element off the array and returns interface, it mutates the original array
    let topCard = theDeck.shift();
                            // put the top card in the player's hand
    playerHand.push(topCard);
    placeCard('player', 1, playerHand[0])
    topCard = theDeck.shift();
    dealerHand.push(topCard);
    placeCard('dealer', 1, dealerHand[0])
    topCard = theDeck.shift();
    playerHand.push(topCard)
    placeCard('player', 2, playerHand[1])
    topCard = theDeck.shift();
    dealerHand.push(topCard);
    placeCard('dealer', 2, dealerHand[1])
    // console.log(playerHand)
    // console.log(dealerHand)
    calculateTotal(playerHand, 'player')
    calculateTotal(dealerHand, 'dealer')
    checkBlackJack(playerHand, 'player')
    checkBlackJack(dealerHand, 'dealer')
})

// =====HIT BUTTON=====
$('.hit-btn').click(()=>{
    if(playerHand.length <= 6){
        // grab the next card in the deck 
        const topCard = theDeck.shift();
        // push it onto the players Hand
        playerHand.push(topCard)
        placeCard('player',playerHand.length,topCard);
        console.log(playerHand)
        calculateTotal(playerHand, 'player')
        checkBust()
        // checkWin()
    }
})

// ===== STAND BUTTON =====
$('.stand-btn').click(()=>{
    // console.log("User stands!!")
    // What happens to the players hand, when they stand?
    // Nothing.
    // Control passes to the dealer
    // Rules for the dealer:
    // 1. If I have less than 17, I MUST hit.
    // 2. If I have 17 or more I CANNOT hit, even if it
    // means I will lose
    let dealersTotal = calculateTotal(dealerHand,'dealer');
    while (dealersTotal < 17){
        const topCard = theDeck.shift();
        dealerHand.push(topCard);
        placeCard('dealer',dealerHand.length,topCard);
        dealersTotal = calculateTotal(dealerHand,'dealer');
    }
    checkWin();
})

function checkWin(){
    const playerTotal = calculateTotal(playerHand,'player');
    const dealersTotal = calculateTotal(dealerHand,'dealer');

                                                                    // 1. If the player has > 21, player busts and loses.
                                                                    // 2. If the dealer has > 21, dealer busts and loses.
                                                                    // 3. If playersHand.length == 2 AND playerTotal == 21... BLACKJACK
                                                                    // 4. If dealerHand.length == 2 AND dealersTotal == 21... BLACKJACK
                                                                    // 5. If player > dealer, player wins
                                                                    // 6. if dealer > player, dealer wins
                                                                    // 7. else... push (tie)
    if(playerTotal <= 21){
        if(dealersTotal <= 21){
            if(playerTotal > dealersTotal){
                console.log('you win')
                $('.game-message').html('you win')
                $('.game-message').toggle()
            }else if(dealersTotal > playerTotal){
                console.log('dealer wins')
                $('.game-message').html('dealer wins')
                $('.game-message').toggle()
            }else{
                console.log('push!')
                $('.game-message').html('push!')
                $('.game-message').toggle()
                                                            // if(playerHand.length == 2 && playerTotal == 21){
                                                            //     console.log('you have blackjack')
                                                            //     $('.game-message').html('you have blackjack')
                                                            //     $('.game-message').toggle()
                                                            // }else if(dealerHand.length == 2 && dealersTotal == 21){
                                                            //     console.log("dealer has blackjack")
                                                            //     $('.game-message').html("dealer has blackjack")
                                                            //     $('.game-message').toggle()
            }

        }else{
            console.log("dealer busts")
            $('.game-message').html("dealer busts")
            $('.game-message').toggle()
        }
    }
}
function checkBlackJack(hand, who){
    const total = calculateTotal(hand, who);
    if(total == 21 && hand.length == 2){
        console.log("blackjack!")
        if(hand == playerHand){
            console.log('you have blackjack')
            $('.game-message').html('you have blackjack')
            $('.game-message').toggle()
        }else if(hand == dealerHand){
            console.log("dealer has blackjack")
            $('.game-message').html("dealer has blackjack")
            $('.game-message').toggle()
        }
    }
}

function checkBust(){
    const playerTotal = calculateTotal(playerHand,'player');
    if(playerTotal > 21){
        console.log("you bust")
        $('.game-message').html("you bust")
        $('.game-message').toggle()
    }
}

function calculateTotal(hand, who){
                            // purpose:
                            // 1. find out the number and return it 
                            // 2. update the DOM with the right number for who and return it
    let handTotal = 0;
                            // Loop through the hand
    hand.forEach((card, index)=>{
        let thisCardsValue = card.slice(0,-1); // copy everything in this String, except the last character
        // let ace
        if(thisCardsValue > 10){
            thisCardsValue = 10;
        }else if(thisCardsValue == 1){
            thisCardsValue = 11;
            // ace = String(hand.index);

        }
        handTotal += Number(thisCardsValue);
        // console.log(playerHand);
    })
    // console.log(handTotal)
    if(handTotal > 21){
        if(hand.includes("1h")){
            // console.log('this actually worked 1h')
            handTotal -= 10;
        }
        if(hand.includes("1d")){
            // console.log('this actually worked 1d')
            handTotal -= 10;
        }
        if(hand.includes("1s")){
            // console.log('this actually worked 1s')
            handTotal -= 10;
        }
        if(hand.includes("1c")){
            // console.log('this actually worked 1c')
            handTotal -= 10;
        }
    }
    $(`.${who}-total`).html(handTotal)
    return handTotal
}
function clearBoard(){
    $('.card').html('')
    $('.game-message').toggle()
    console.log('toggled message')
    
    // for(let i = 1; i <= hand.length; i++){
    //     let classSelector = `.card-${i}`;
    //     $(classSelector).html('');
    // }
    // hand = []
}
    

function placeCard(who, where, what){
                        // who = option1: player option2: dealer
                        // where = option 1-6
                        // what = 1h-13h,1s-13s,1d-13d,1c-13c
    const classSelector = `.${who}-cards .card-${where}`;
    $(classSelector).html(`<img src="./cards/${what}.png" />`)
}

function createDeck(){
    // local variable
    let newDeck = []; 
    // card = suit letter + value
    const suits = ['h', 's', 'd', 'c'];

                                // old way nested loops
                                // for(let s = 0; s < suits.length; s++){
                                //     // outer loop for each suit
                                //     for(let c = 1; c < 14; c++){
                                //     }
                                // }
    
                                // new way
                                // a forEach loop takes 1 arguments, function
                                // that function gets 2 arguments
                                // 1. what to call this element in loop
                                // 2. index loop is on
    // outer loop for suit
    suits.forEach((s,index) =>{
        // inner loop for card value
        for(let c=1; c<= 13; c++){
            newDeck.push(`${c}${s}`);
        }
    })
    return newDeck;
}

function shuffleDeck(deckToBeShuffled){
                                // loop, A LOT. like an auto shuffler IRL
                                // when the loop is done, the array(deck) will be shuffled
    for(let i=0;i<10000; i++){
        let rand1 = Math.floor(Math.random() * 52);
        let rand2 = Math.floor(Math.random() * 52);
                                // we need to switch rand1 with rand2 but we have to save the value of one so we can keep it for later
        let tempCardHolder = deckToBeShuffled[rand1];
        deckToBeShuffled[rand1] = deckToBeShuffled[rand2];
        deckToBeShuffled[rand2] = tempCardHolder;
    }                            
}


