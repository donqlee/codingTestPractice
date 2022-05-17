const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

let len = input.shift();
const kgCmTable = input.map(kgCm => kgCm.split(' ').map(num => +num));

let arr = [];
for(let i = 0; i < len; i++){
    let count = 1;
    for(let j = 0; j < len; j++){
        if(i === j){
            continue;
        }
        if(kgCmTable[i][0] < kgCmTable[j][0] && kgCmTable[i][1] < kgCmTable[j][1]){
            count++
        }
        
    }
    arr.push(count);
}
console.log(arr.join(' '));



// let arr = [];
// for(let i = 1; i <= +input[0]; i++){
//     arr.push({name : i, weight: +input[i].split(' ')[0], height: +input[i].split(' ')[1]})
// }
// let rank = 1;

// arr.sort((a, b) => b.weight - a.weight);
// arr.map((val, i) => val.weightRank = i + 1);
// arr.sort((a, b) => b.height - a.height);
// arr.map((val, i) => val.heightRank = i + 1);
// arr.map((val, i) => val.score = val.weightRank + val.heightRank);
// arr.sort((a, b) => a.score - b.score);
// console.log(arr)
// for(let i = 0; i < arr.length; i++){
//     if(i < 1){
//         rank = i + 1;
//         arr[i].rank = rank;
//     }else{
//         if(arr[i].score === arr[i-1].score){
//             arr[i].rank = rank;
//         }else{
//             rank = i + 1;
//             arr[i].rank = rank;
//         }
//     }
    
// }

// arr.sort((a, b) => a.name - b.name);
// console.log((arr.map((val) => val.rank)).join(' '));
