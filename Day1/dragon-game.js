// var userInput = prompt("What is your choice");
var die1 = 0;
var die2 = 0;
var userMessage = document.getElementById("message");
function diceRoll () {
    var min = 1;
    var max = 7;
    var die = Math.floor(Math.random() * (max - min) + min);
    return die
};

document.getElementById("fight-btn").addEventListener("click", function () {
    console.log("running") 
    
    die1 = diceRoll();
    die2 = diceRoll();
    document.getElementById("die1").src="./dragon-assets/d" + die1 + ".gif";
    document.getElementById("die2").src="./dragon-assets/d" + die2 + ".gif";
    if (die1 + die2 >= 9) {
        console.log("if statement");
        changeImages();
    };
    
});

document.getElementById("replay-btn").addEventListener("click", replay);

function changeImages() {
    document.getElementById("dragon").src="./dragon-assets/dead-dragon.jpg";
    document.getElementById("winner").classList.remove("d-none");
    document.getElementById("winner").classList.add("d-flex");
    document.getElementById("fight-class").classList.remove("d-flex");
    document.getElementById("fight-class").classList.add("d-none");
    document.getElementById("flee-class").classList.remove("d-flex");
    document.getElementById("flee-class").classList.add("d-none");
    document.getElementById("replay-class").classList.add("d-flex");
    document.getElementById("replay-class").classList.remove("d-none");
};
 function replay() {
    document.getElementById("dragon").src="./dragon-assets/dragon.png";
    document.getElementById("winner").classList.remove("d-flex");
    document.getElementById("winner").classList.add("d-none");
    document.getElementById("fight-class").classList.remove("d-none");
    document.getElementById("fight-class").classList.add("d-flex");
    document.getElementById("flee-class").classList.remove("d-none");
    document.getElementById("flee-class").classList.add("d-flex");
    document.getElementById("replay-class").classList.remove("d-flex");
    document.getElementById("replay-class").classList.add("d-none");
    document.getElementById("message1").classList.remove("d-none");
    document.getElementById("message2").classList.remove("d-flex");
    document.getElementById("message2").classList.add("d-none");
 }

function flee() {
    document.getElementById("dragon").src="./dragon-assets/knight-run.jpg";
    document.getElementById("message1").classList.remove("d-flex");
    document.getElementById("message1").classList.add("d-none");
    document.getElementById("message2").classList.remove("d-none");
    document.getElementById("message2").classList.add("d-flex");
    document.getElementById("fight-class").classList.remove("d-flex");
    document.getElementById("fight-class").classList.add("d-none");
    document.getElementById("flee-class").classList.remove("d-flex");
    document.getElementById("flee-class").classList.add("d-none");
    document.getElementById("replay-class").classList.add("d-flex");
    document.getElementById("replay-class").classList.remove("d-none");
    
}

document.getElementById("flee-btn").addEventListener("click", flee);