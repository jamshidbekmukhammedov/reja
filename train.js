console.log("TRAIN AREA!");


// MITASK-C
// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 
// 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, 
// biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 
// 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return 
// hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
const moment = require("moment");


class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  hozirgiVaqt() {
    return moment().format('HH:mm');
  }

  qoldiq() {
    console.log(`Hozir ${this.hozirgiVaqt()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
  }

  sotish(maxsulot, miqdor) {
    this[maxsulot] -= miqdor;
    console.log(`Hozir ${this.hozirgiVaqt()}da ${miqdor}ta ${maxsulot} sotildi!`);
  }

  qabul(maxsulot, miqdor) {
    this[maxsulot] += miqdor;
    console.log(`Hozir ${this.hozirgiVaqt()}da ${miqdor}ta ${maxsulot} qabul bo'ldi!`);
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();









// TASK B: 
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


// function countDigits(findNumber) {
//     let count = 0;
//     for (let i = 0; i < findNumber.length; i++) {
//         if (findNumber[i] >= '0' && findNumber[i] <= '9') {
//             count++;
//         }
//     }
//     return count;
// }
// const result = countDigits("ad2a54y79wet0sfgb9");
// console.log("result:", result);


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