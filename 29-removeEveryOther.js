// Coding Challenge 2024
// 29/366
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// function removeEveryOther(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// const removeEveryOther = (arr) => arr.filter((e, i) => i % 2 == 0)

const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // [1, 3, 5, 7, 9]