// Coding Challenge 2024
// 16/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// function getAverage(marks) {
//   let result = 0
//   for (let i = 0; i < marks.length; i++) {
//     result += marks[i]
//   }
//   return Math.floor(result / marks.length)
// }

const getAverage = (marks) => Math.floor(marks.reduce((acc, cur) => acc + cur)/marks.length)

console.log(getAverage([1,1,1,1,1,1,1,2]))