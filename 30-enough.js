// Coding Challenge 2024
// 30/366
// https://www.codewars.com/kata/5875b200d520904a04000003

// function enough(cap, on, wait) {
//   return (cap >= on + wait) ? 0 : wait - (cap - on)
// }

// const enough = (cap, on, wait) => (cap >= on + wait ? 0 : wait - (cap - on))

const enough = (cap, on, wait) => Math.max(wait + on - cap, 0)

console.log(enough(94, 78, 32))