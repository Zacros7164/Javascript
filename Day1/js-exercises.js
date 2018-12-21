// var num = 0
// =====Exercise 1=====

// 1.Given a number between 0 and 6 representing the days of the week, print "Go to work." if it's a work day and "Sleep in." if it's a weekend day. You can set up an array for the days of the week, or for extra credit, you can check out the JS Date object here).

// var day = prompt("Give me a number 0-6");


// function sleepIn(num) {
//     if (num == 0) {
//         console.log("Sleep in.");
//     } else if (num == 1) {
//         console.log("Go to work.");
//     } else if (num == 2) {
//         console.log("Go to work.");
//     } else if (num == 3) {
//         console.log("Go to work.");
//     } else if (num == 4) {
//         console.log("Go to work.");
//     } else if (num == 5) {
//         console.log("Go to work.");
//     } else if (num == 6) {
//         console.log("Sleep in.");
//     }
// }

// var hello = "hello";
// console.log(hello);

// sleepIn(day)


// =====Exercise 2=====

// 2. Given a month number, between 1 and 12, and a year, print the number of days in that month - accounting for leap years.

// var month = prompt("Give me a number between 1-12");
// var year = prompt("Give me a year")

// function daysInMonth(month, year) {
//     if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//         console.log("31 days in the month");
//     } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//         console.log("30 days in the month");
//     } else if (month == 2) {
//         if (year % 4 == 0) {
//             if (year % 100 == 0){
//                 if (year % 400 == 0) {
//                     console.log("29 days in the month")
//                 } else {
//                     console.log("28 days in the month");
//                 }
//             }
//         } else {
//             console.log("28 days in the month")
//         }
//     }
// }

// daysInMonth(month, year)

// =====Exercise 3=====

// Given the amount of a bill as a number, and a level of service - which can be "good", "fair", or "bad", print the total bill with the tip included. The amount of tip given for each level of service is defined by:

 
// "good" -> 20%

// "fail" -> 15%

// "bad"  -> 10%

 
// Extra: Add to "Tip Calculator"...you are also given the number of people to divide the total into. Print the amount for each person to pay.

// var bill = prompt("What is the bill total?");
// var service = prompt("How was the service? good, fair, or bad");
// var guests = prompt("How many ways should we split it?");
// var total = 0;
// var perPerson = 0
// function tipCalc(bill, service) {
//     if (service == "good") {
//         total = Math.round(bill * 1.20);
//         perPerson = (total / guests);
//         // console.log(perPerson);
//         // console.log(total);
//         console.log(perPerson);
//     } else if (service == "fair") {
//         total = Math.round(bill * 1.15);
//         perPerson = (total / guests);
//         console.log(perPerson);
//     } else if (service == "bad") {
//         total = Math.round(bill * 1.10);
//         perPerson = (total / guests);
//         console.log(perPerson);
//     }
// }

// tipCalc(bill, service)

