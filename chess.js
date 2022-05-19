// const fs = require("fs");
// const { format } = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split('\n');

// let len = input.shift().split(' ')

// let arr = [];
// for(let i = 0; i < input.length; i++){
//     let a = input[i].split('');
//     arr.push(a);
// }
// let arr2 = [];
// for(let i = 0; i <= +len[0] - 8; i++){
//     for(let j = 0; j <= len[1] - 8; j++){
//         arr2.push([i, j]);
//     }
// }
// // console.log(arr2);
// let arr3 = [];
// for(let a = 0; a < arr2.length; a++){
//         let black = 0;
//         let white = 0;
//     for(let i = arr2[a][0]; i < arr2[a][0] + 8; i++){
     
//         for(let j = arr2[a][1]; j < arr2[a][1] + 8; j++){
//             if(arr[i][j] === 'B'){
//                 black++
//             }else{
//                 white++
//             }
//         }
        
//     }
//     arr3.push([black, white])
// }

// console.log(arr3);


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const NM = input.shift().split(' ').map(num => parseInt(num));
const N = NM.shift();
const M = NM.shift();
const minArr = [];
 
const whiteFirst = [
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW'
];
 
const blackFirst = [
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB',
'BWBWBWBW',
'WBWBWBWB'
];
 
function whiteFirstPaint(y, x) {
let counter = 0;
 
for (let i = y; i < y + 8; i++)
for (let j = x; j < x + 8; j++)
if (input[i][j] !== whiteFirst[i - y][j - x]) counter++;
 
return counter;
}
 
function blackFirstPaint(y, x) {
let counter = 0;
 
for (let i = y; i < y + 8; i++)
for (let j = x; j < x + 8; j++)
if (input[i][j] !== blackFirst[i - y][j - x]) counter++;
 
return counter;
}
 
for (let i = 0; i + 7 < N; i++) {
for (let j = 0; j + 7 < M; j++) {
minArr.push(whiteFirstPaint(i, j));
minArr.push(blackFirstPaint(i, j));
}
}
 
console.log(Math.min.apply(null, minArr));