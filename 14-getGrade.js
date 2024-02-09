// Coding Challenge 2024
// 14/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// function getGrade(s1, s2, s3) {
//   let score = (s1 + s2 + s3) / 3
//   if (score >= 90) {
//     return 'A'
//   } else if (score >= 80) {
//     return 'B'
//   } else if (score >= 70) {
//     return 'C'
//   } else if (score >= 60) {
//     return 'D'
//   } else {
//     return 'F'
//   }
// }

function getGrade(...s) {
  const score = s.reduce((acc, curr) => acc + curr) / s.length;
  if (score < 60) return 'F';
  if (score < 70) return 'D';
  if (score < 80) return 'C';
  if (score < 90) return 'B';
  return 'A';
}

console.log(getGrade(65, 70, 59));