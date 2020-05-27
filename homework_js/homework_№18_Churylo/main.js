// ---------------------Task 1---------------

// let arr = [5,6,7,8,9];
// let sum = 0;

// arr.forEach(function(val){
//     return sum += val;
// })

// console.log(sum);

// ---------------------Task 2---------------

// let arr = [5,6,7,8,9];
// let result = arr.map(value => value**2);

// console.log(result);

// ---------------------Task 3---------------

// let arr = [
//     {
//         name: 'Ivan',
//         country: 'Ukraine'
//     },
//     {
//         name: 'Petro',
//         country: 'Ukraine'
//     },
//     {
//         name: 'Miguel',
//         country: 'Cuba'
//     }
// ]
// let result = arr.every(country => country.country == 'Ukraine');
// console.log(result);

// ---------------------Task 4---------------

// let arr = [
//     {
//         name: 'Ivan',
//         country: 'Ukraine'
//     },
//     {
//         name: 'Petro',
//         country: 'Ukraine'
//     },
//     {
//         name: 'Miguel',
//         country: 'Cuba'
//     }
// ]
// let result = arr.some(country => country.country == 'Cuba');
// console.log(result);

// ---------------------Task 5---------------
// let arr = [1, 'string', [3, 4], 5, [6, 7]];

// let result = arr.filter(value => Array.isArray(value));
// console.log(result);

// ---------------------Task 6---------------
// 6.1
// let arr = [1,2,5,0,4,5,6];

// arr = arr.slice(0, arr.indexOf(0));
// let result = arr.reduce(function(accum, value) {
//     return accum + value;
// }, 0);    
// console.log(result);

// 6.2
// let arr = [1,2,5,0,4,5,6];
// let count = 0;

// let result = arr.reduce((suma, number) => {
//   suma += number;
//   if(suma < 10) count++
//   return count;
// });

// console.log(result);

// ---------------------Task 7---------------
let arr = [1, -2, 3, 0, 4, -5, 6, -11];
let result = [];

arr = arr.filter(value => value>0);
console.log(arr);

arr = arr.map(value => Math.sqrt(value));
console.log(arr);