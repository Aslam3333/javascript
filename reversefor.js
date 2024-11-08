// let reverse="aslam";
// let reversed="";
// for (let i = reverse.length - 1; i >= 0; i--){
//    reversed += reverse[i]
// }
// console.log(reversed);

// //factorial

let str = "aslam";
let targetChar = 'm';
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === targetChar) {
        count++;
    }
}

console.log(count);