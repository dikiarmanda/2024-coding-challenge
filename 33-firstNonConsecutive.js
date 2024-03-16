// Coding Challenge 2024
// 33/366
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1]
//     }
//   }
//   return null
// }

const firstNonConsecutive = (arr) => arr.find((e, i) => e !== arr[0] + i) ?? null

console.log(firstNonConsecutive([-2, 0]))
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))