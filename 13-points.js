// Coding Challenge 2024
// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//   let result = 0
//   for (let i = 0; i < games.length; i++) {
//     if (parseInt(games[i][0]) == parseInt(games[i][2])) {
//       result += 1
//     } else if (parseInt(games[i][0]) > parseInt(games[i][2])) {
//       result += 3
//     }
//   }
//   return result
// }

const points = (games) => games.reduce((acc, [x, _, y]) => (x == y ? 1 : x > y ? 3 : 0) + acc, 0)

console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]));