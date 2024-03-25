// Coding Challenge 2024
// 38/366
// https://www.codewars.com/kata/5865918c6b569962950002a1

// function strCount(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// function strCount(str, letter){  
//   return str.split('').reduce((a, b) => b === letter ? a + 1 : a, 0)
// }

// function strCount(str, letter){  
//   return str.split(letter).length-1
// }

const strCount = (str, letter) => str.split('').filter((e) => e === letter).length

console.log(strCount('Hello', 'l'));
