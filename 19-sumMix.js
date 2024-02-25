// Coding Challenge 2024
// 19/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// function sumMix(x) {
//   let result = 0
//   for (let i = 0; i < x.length; i++) {
//     result += +x[i]
//   }
//   return result
// }

const sumMix = (x) => x.reduce((acc, cur) => acc + +cur, 0)

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));