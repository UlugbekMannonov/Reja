console.log("Jack Ma maslahatlari!");
const list = [
    "Yahshi talaba boling", // 0-20
    "Togri boshliq tanlang va koproq xato qiling", //20-30
    "Uzingizga ishlashni boshlang", //30-40
    "Siz kuchli bolgan narsalarni qiling", //40-50
    "Yoshlarga investetsiya qiling", //50-60
    "Endi dam oling, foydasi yo'q endi", //60
];

// Callback functions
function maslahatBering(a, callback) {
    if(typeof a !== 'number') callback("Insert number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else{
        setInterval(function () {
            callback(null, list[5]);
        }, 1000);    
    }
}

console.log("passed here 0");
maslahatBering(65, (err, data) => {
    if(err) console.log('ERROR', err);
    else {
        console.log("Javob:", data);
    }
});
console.log("passed here 1");
















// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("Insert number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else{
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);    
//     }
// }




// ASYNC functions
// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("Insert number", null);
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else{
        

//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 resolve(list[5]);
//             }, 5000);    

        // return new Promise((resolve, reject) => {
        //     setInterval(() => {
        //         resolve(list[5]);
        //     }, 1000);  
//         });
//     }
// }



        // return list[5];
        // setTimeout(function () {
        //     return list[5];
        // }, 5000);    
    // }
// }


// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR', err);
//     else {
//         console.log("Javob:", data);
//     }
// });
// console.log("passed here 1");






// CAll via Then/Catch

// console.log("passed here 0");
// maslahatBering(65)
//     .then((data) => {
//         console.log("Javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR", err);
//     });
// console.log("passed here 1");





// Call via async/await

// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     // javob = await maslahatBering(31);
//     // console.log(javob);
//     // javob = await maslahatBering(41);
//     // console.log(javob);
// }
//  run();
