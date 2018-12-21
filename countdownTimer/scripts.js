// console.log("Sanity check")
console.dir(document)
function updateTimer() {
    // new Date() will create a new date object with the current time
    // where current time = the moment the line ran
    var now = new Date();
    // getTime() can be run against a Date Object, and will convert it to the #
    // of milliseconds since 1-1-1970 (beginning of Unix)
    var nowAsTimeStamp = now.getTime();
    // console.log(nowAsTimeStamp);
    var timeRemaining = timeStamp - nowAsTimeStamp;
    // console.log(timeRemaining)

    var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
	var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    // console.log(seconds);
    // console.log(minutes);
    // getElementsByClassName always returns an Array, even if there is 0 or 1 thing
    document.getElementsByClassName('weeks')[0].innerHTML = weeks;
    document.getElementsByClassName('days')[0].innerHTML = days;
    document.getElementsByClassName('hours')[0].innerHTML =hours;
    document.getElementsByClassName('minutes')[0].innerHTML = minutes;
    // querySelector will use CSS rules to find a match, and only get the first one, not an array
    document.querySelector('.seconds').innerHTML = seconds;

    // == compares values 

    // === compares values AND data type
    // minutes = "0"
    // minutes == 0 TRUE
    // minutes === 0 NOT TRUE
    if(seconds == 0) {
        // update the dom to say "hooray"
        document.querySelector(".message").innerHTML = "One minute closer to Christmas!";
    } else if (seconds <= 55) {
        document.querySelector(".message").innerHTML = "";
    }
}

var endDate = new Date("December 25, 2018");
console.log(endDate);
var timeStamp= endDate.getTime();
console.log(timeStamp);
// setInterval will
// 1. call the function in arg1
// 2. every arg2 milliseconds
setInterval(updateTimer, 1000);

var bodyObject = document.children[0].children[1]
var heading = document.children[0].children[1].children[0].children[0]
var buttonMessage = document.children[0].children[1].children[0].children[7].children[0]
console.dir(buttonMessage)
// bodyObject.style.background = "blue"
var reset = false;
function doomsday() {
    // console.dir(heading)
    // bodyObject.classList.toggle("doomsday")
    bodyObject.style.background = "url('https://cdn.pixabay.com/photo/2017/06/30/19/52/apocalypse-2459465_960_720.jpg') no-repeat center"
    bodyObject.style.backgroundSize = "cover"
    heading.innerHTML = "Countdown to Doomsday!"
    buttonMessage.innerHTML = "Click for Christmas!"
    reset = true;

}
// console.dir(bodyObject)
document.getElementById('button').addEventListener("click",buttonPress);

function christmas() {
    bodyObject.style.background = "url('https://mattsko.files.wordpress.com/2013/12/xmas4548.png') no-repeat center"
    bodyObject.style.backgroundSize = "cover"
    heading.innerHTML = "Countdown to Christmas!"
    buttonMessage.innerHTML = "Click for Doomsday!"
    reset = false;
}

function buttonPress () {
    if(reset == true) {
        christmas()
    } else{
        doomsday()
    }
}



// title = "Countdown timer";
// position = 0;
// function scrolltitle() {
//    document.title = title.substring(position, title.length) + title.substring(0, position);
//    position++;
//    if (position > title.length) position = 0;
//    titleScroll = window.setTimeout(scrolltitle,200);
// }
// scrolltitle();