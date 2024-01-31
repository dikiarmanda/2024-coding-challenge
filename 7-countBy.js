// Coding Challenge 2024
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, n) {
//   let result = []
//   for (let i = 1; i <= n; i++) {
//     result.push(i*x)
//   }
//   return result
// }

// function countBy(x,n) {
//   return [...Array(n)].map((e, i) => x*(i+1))
// }

const countBy = (x,n) => [...Array(n)].map((_, i) => x*(i+1))

console.log(countBy(3,3));