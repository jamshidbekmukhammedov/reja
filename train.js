console.log("TRAIN AREA!");

// A-TASK:
// Shunday 2 parametrli function tuzingki 
// birinchi parametrdagi letterni ikkinchi 
// parametrdagi sozda qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// Masala Yechimi:

function countLetter(a, b) {
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] === a) {
      count++;
    }
  }
  return count;
}

console.log("Natija:", countLetter("e", "engineer"));