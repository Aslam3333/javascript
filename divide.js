// let n = 20;
// for (let i = 1; i <= n; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
// 1. Check if a Number is Divisible by 5
// let start = 1;
// let end = 20;
// for (let i = start; i <= end; i++) {
//   if (i % 2 !== 0) {  
//     console.log(i);    
//   }
// }
// // 2. Print the Odd Numbers in a Range

let start = 1;
let end = 20;
let count = 0;
for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {  
    count++;          
  }
}
console.log("Number of even numbers:", count);
// // 3.Count the Number of Even Numbers in a Range.
// let str = "hello world";
// let charToCount = 'o';
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === charToCount) {  
//     count++;  
//   }
// }
// console.log(`The character '${charToCount}' appears ${count} times.`);
// // 4..Count Occurrences of a Character in a String
// let terms = 10; 
// for (let i = 0; i < terms; i++) {
//   let powerOf2 = Math.pow(2, i);  
//   console.log(powerOf2);     
// }
// // 5.Generate a Sequence of Powers of 2