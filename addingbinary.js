// function addBinary(binA, binB) {
//     const maxLength = Math.max(binA.length, binB.length);
//     let carry = 0;
//     const result = [];

//     for (let i = 0; i < maxLength; i++) {
//         const bitA = i < binA.length ? binA[binA.length - 1 - i] : 0;
//         const bitB = i < binB.length ? binB[binB.length - 1 - i] : 0;

//         const sum = bitA + bitB + carry;
//         result.unshift(sum % 2);
//         carry = Math.floor(sum / 2);
//     }

//     if (carry > 0) {
//         result.unshift(carry);
//     }

//     return result;

// }

const a = [1, 0, 1, 1, 0, 1]
const b = [0, 1, 1, 0, 0, 0]
console.log(addBinary(a,b))
// addBinary(a, b) === [1, 0, 0, 0, 1, 0, 1]
