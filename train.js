console.log("TRAIN AREA!");

// TASK B: 
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


function countDigits(findNumber) {
    let count = 0;
    for (let i = 0; i < findNumber.length; i++) {
        if (findNumber[i] >= '0' && findNumber[i] <= '9') {
            count++;
        }
    }
    return count;
}
const result = countDigits("ad2a54y79wet0sfgb9");
console.log("result:", result);


// ========================================================


// A-TASK:
// Shunday 2 parametrli function tuzingki 
// birinchi parametrdagi letterni ikkinchi 
// parametrdagi sozda qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// Masala Yechimi:

// function countLetter(a, b) {
//   let count = 0;
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] === a) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log("Natija:", countLetter("e", "engineer"));