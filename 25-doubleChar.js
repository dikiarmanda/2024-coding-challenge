// Coding Challenge 2024
// 25/366
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// function doubleChar(str) {
//   let result = ''
//   for (let i = 0; i < str.length; i++) {
//     result += str[i] + str[i]
//   }
//   return result
// }

const doubleChar = (str) => str.split('').map((e) => e + e).join('')

console.log(doubleChar('Adidas')); // "AAddiiddaass"