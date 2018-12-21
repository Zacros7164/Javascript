// console.log(document)

// if you ever want to do something to the website, what you really want is the document

console.dir(document)

// var simplifiedDocument = {
//     children: [
//         {
//             tag: "<html>",
//             children: [
//                 {
//                     tag: "<head>"
//                 },
//                 {
//                     tag:"<body>"
//                 }
//             ]
//         }
//     ]
// }

// simplifiedDocument.children[0],children[1] //references the body tag

var adam = document.getElementById("adamsDiv");
console.dir(adam);

adam.innerHTML = "I just changed this text"
adam.style.backgroundColor = "pink"