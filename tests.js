console.log("Jack Ma maslahatlari");

const list = [
    "yaxshi talaba bo'ling", // 0-20
    "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
    "o'zingizni ishlaringizni boshlang", // 30-40
    "siz kuchli bo'lgan narsalarni qiling", // 40-50
    "yoshlarga investitsya qiling", // 50-60
    "endi dam oling, foydasi yo'q", // 60
];


// Asynchronous Function
async function maslahatBering(a) {
    if(typeof a !== 'number') throw new Error("Insert a number");
        else if(a <= 20) return list[0];
        else if(a > 20 && a <= 30) return list[1];
        else if(a > 30 && a <= 40) return list[2];
        else if(a > 40 && a <= 50) return list[3];
        else if(a > 50 && a <= 60) return list[4];
        else {
            return new Promise((resolve, reject) => {
                // setTimeout(() => {
                //     resolve(list[5]);
                // }, 5000);           // Asynchronous Function ichida CORE Package dan foydalanish uchun Promise Functiondan foydalaniladi!

                setInterval(() => {
                    resolve(list[5]);
                }, 1000);
            });
            // setTimeout(function () {             // Asynchronous Function ichida CORE Package lar ishlamaydi
            //      callback(null, list[5]);
            // }, 5000);    
        }
}

// Async  then/catch  yordamida call qilindi!
// console.log('passed here 0');
// maslahatBering(25)
//   .then(data => {
//     maslahatBering(31)
//         .then(data => {
//             console.log('Javob:', data);
//         }).catch(err => {
//             console.log("ERROR:", err);
//         });
//         console.log("passed here 1")
//     console.log('Javob:', data);
//   }).catch(err => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1")


// Async await yordamida call qilindi!
async function run() {
    let javob = await maslahatBering(25);
    console.log(javob);
    javob = await maslahatBering(70);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
}
run();


// CALLBACK FUNCTION
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("Insert a number", null);
//         else if(a <= 20) callback(null, list[0]);
//         else if(a > 20 && a <= 30) callback(null, list[1]);
//         else if(a > 30 && a <= 40) callback(null, list[2]);
//         else if(a > 40 && a <= 50) callback(null, list[3]);
//         else if(a > 50 && a <= 60) callback(null, list[4]);
//         else {
//             setTimeout(function () {
//                  callback(null, list[5]);
//             }, 5000);    
//         }
// }
// console.log('passed here 0');
// maslahatBering(61, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else{
//         console.log('Javob:', data);
//     }    
// });
// console.log('passed here 1');

