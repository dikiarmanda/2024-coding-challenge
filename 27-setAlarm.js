// Coding Challenge 2024
// 27/366
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

// function setAlarm(employed, vacation){
//   return (employed == true && vacation == false)
// }

const setAlarm = (employed, vacation) => (employed && !vacation)

console.log(setAlarm(true, true));

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false