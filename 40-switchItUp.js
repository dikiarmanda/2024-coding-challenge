// Coding Challenge 2024
// 40/366
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

// function switchItUp(number) {
//   switch (number) {
//     case 0:
//       return 'Zero'
//       break
//     case 1:
//       return 'One'
//       break
//     case 2:
//       return 'Two'
//       break
//     case 3:
//       return 'Three'
//       break
//     case 4:
//       return 'Four'
//       break
//     case 5:
//       return 'Five'
//       break
//     case 6:
//       return 'Six'
//       break
//     case 7:
//       return 'Seven'
//       break
//     case 8:
//       return 'Eight'
//       break
//     case 9:
//       return 'Nine'
//       break
//     default:
//       break
//   }
// }

const switchItUp = (number) => ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][number]

console.log(switchItUp(3));
